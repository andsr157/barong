import { clientsClaim } from "workbox-core"
import {
  precacheAndRoute,
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
} from "workbox-precaching"
import { registerRoute, NavigationRoute } from "workbox-routing"

const VERSION = "v1.0.0"
console.log(`Service Worker version: ${VERSION}`)

self.skipWaiting()
clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)
cleanupOutdatedCaches()

try {
  const handler = createHandlerBoundToURL("/")
  const route = new NavigationRoute(handler)
  registerRoute(route)
} catch (error) {
  console.warn("Error while registering cache route", { error })
}

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/")

  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }

  return outputArray
}

const saveSubscription = async (subscription) => {
  const response = await fetch(
    process.env.NODE_ENV === "production"
      ? "https://barong-psi.vercel.app/api/v1/notification/subscription"
      : "http://localhost:3000/api/v1/notification/subscription",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(subscription),
    }
  )
}

self.addEventListener("install", (event) => {
  console.log("Service worker installing...")
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...")
  // event.waitUntil(
  //   (async () => {
  //     try {
  //       const subscription = await self.registration.pushManager.subscribe({
  //         userVisibleOnly: true,
  //         applicationServerKey: urlBase64ToUint8Array(
  //           "BNsKXx4n8kwghDYTigbDajuKtW0e4mH6DBV5cxQlFH1jprApNL9rZ_dLQNGYBVOuw84O-vhukLb1UDaCCW8nR5g"
  //         ),
  //       })
  //       console.log("Subscription:", subscription)
  //       await saveSubscription(subscription)
  //     } catch (err) {
  //       console.error("Subscription failed:", err)
  //     }
  //   })()
  // )
  clientsClaim()
})

self.addEventListener("push", (event) => {
  const payload = JSON.parse(event.data.text())
  const options = {
    body: payload.body,
    data: {
      url: "https://barong-psi.vercel.app" + payload.url,
    },
  }
  event.waitUntil(self.registration.showNotification(payload.title, options))
})

self.addEventListener("notificationclick", (event) => {
  console.log("Notification click received:", event.notification)
  event.notification.close()

  event.waitUntil(clients.openWindow(event.notification.data.url))
})

self.addEventListener("message", async (event) => {
  if (event.data && event.data.type === "SAVE_SUBSCRIPTION") {
    try {
      const subscription = await self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          "BNsKXx4n8kwghDYTigbDajuKtW0e4mH6DBV5cxQlFH1jprApNL9rZ_dLQNGYBVOuw84O-vhukLb1UDaCCW8nR5g"
        ),
      })
      console.log("Subscription obtained:", subscription)
      await saveSubscription(subscription, event.data.userId)
    } catch (err) {
      console.error("Subscription failed:", err)
    }
  }
})
