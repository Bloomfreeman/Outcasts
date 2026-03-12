<script setup>
import { ref } from "vue"

const text = ref("")
const image = ref(null)
const preview = ref(null)

function handleImage(e) {
  const file = e.target.files[0]
  if (!file) return

  image.value = file
  preview.value = URL.createObjectURL(file)
}

function submitPost() {
  if (!text.value && !image.value) return

  console.log("POST DATA:", {
    text: text.value,
    image: image.value
  })

  text.value = ""
  image.value = null
  preview.value = null
}
</script>

<template>
  <div class="bg-slate-800 rounded-lg p-4 space-y-3">

<textarea
  v-model="text"
  placeholder="What's on your mind?"
  class="w-full bg-slate-700 rounded p-2 resize-none"
></textarea>

<div v-if="preview">
  <img :src="preview" class="rounded-lg max-h-60 object-cover" />
</div>

<div class="flex justify-between items-center">

  <label class="cursor-pointer text-blue-400">
    Upload Image
    <input type="file" hidden @change="handleImage" />
  </label>

  <button
    @click="submitPost"
    class="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600"
  >
    Post
  </button>

</div>

  </div>
</template>
