import { clientsClaim } from "workbox-core"
import {
  precacheAndRoute,
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
} from "workbox-precaching"
import { registerRoute, NavigationRoute } from "workbox-routing"

self.skipWaiting()

clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)
cleanupOutdatedCaches()

// You can remove this code if you aren't precaching anything, or leave it in and live with the warning message
try {
  const handler = createHandlerBoundToURL("/")
  const route = new NavigationRoute(handler)
  registerRoute(route)
} catch (error) {
  console.warn("Error while registering cache route", { error })
}

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/")

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
  console.log("service worker installed", event)
})

self.addEventListener("activate", async (event) => {
  console.log("service worker activated", event)
  event.waitUntil(
    (async () => {
      try {
        console.log("inside", event)
        const subscription = await self.registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            "BNsKXx4n8kwghDYTigbDajuKtW0e4mH6DBV5cxQlFH1jprApNL9rZ_dLQNGYBVOuw84O-vhukLb1UDaCCW8nR5g"
          ),
        })
        console.log("berfore save", subscription)
        const response = await saveSubscription(subscription)
        console.log("Subscribed:", subscription)
      } catch (err) {
        console.error("Subscription failed:", err)
      }
    })()
  )
})

self.addEventListener("push", (e) => {
  console.log(e)
  e.waitUntil(
    console.log(e),
    self.registration.showNotification("Simple Notification", {
      body: "This is a simple notifications",
    })
  )
})
