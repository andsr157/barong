<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadImage">Upload Image</button>
    <img v-if="imageUrl" :src="imageUrl" width="500" height="500" />
  </div>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js"
import { v4 as uuidv4 } from "uuid"
import { ref } from "vue"

const supabaseUrl = "https://jwqzuahitmeppwhdtouq.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3cXp1YWhpdG1lcHB3aGR0b3VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMTA0NjgsImV4cCI6MjAyNjc4NjQ2OH0.hbDi8UtqO6lfiEDO7ETiL78T2IsjScNYg7lZ2SXk-9c"
const supabaseBucketUrl =
  "https://jwqzuahitmeppwhdtouq.supabase.co/storage/v1/object/public/images"
const supabase = createClient(supabaseUrl, supabaseKey, {
  storageBucket: supabaseBucketUrl,
})

const file = ref(null)
const imageUrl = ref(null)

const handleFileUpload = (event) => {
  file.value = event.target.files[0]
}

const uploadImage = async () => {
  try {
    if (!file.value) {
      console.error("No file selected")
      return
    }

    const { data, error } = await supabase.storage
      .from("images")
      .upload(`${uuidv4()}.jpg`, file.value)

    console.log(data)
    if (error) {
      console.error("Error uploading image:", error.message)
      return
    }

    console.log(data.path)
    const { data: publicUrlData, error: publicUrlError } =
      await supabase.storage.from("images").getPublicUrl(data.path)

    if (publicUrlError) {
      console.error("Error getting public URL:", publicUrlError.message)
      return
    }
    console.log(publicUrlData.publicUrl)
    imageUrl.value = publicUrlData.publicUrl
    console.log("Image uploaded successfully:", imageUrl.value)
    file.value = null
  } catch (error) {
    console.error("Error uploading image:", error.message)
  }
}
</script>
