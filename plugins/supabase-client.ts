import { createClient } from "@supabase/supabase-js"
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig().app
    const supabase = createClient(config.supabaseUrl, config.supabaseKey)

    return {
        provide: {
            supabase,
        },
    }
})