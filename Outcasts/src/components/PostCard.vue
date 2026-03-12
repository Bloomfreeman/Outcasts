<script setup>
import { ref } from "vue"

import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  ArrowDownCircleIcon
} from "@heroicons/vue/24/solid"

const props = defineProps({
  post: Object
})

const liked = ref(false)

function toggleLike(){
  liked.value = !liked.value
}
// comment system
const showComments = ref(false)
const newComment = ref("")
const comments = ref([])

function addComment() {
if (!newComment.value) return

comments.value.push({
user: "you",
text: newComment.value
})

newComment.value = ""
}
</script>

<template>
  <div class="bg-slate-800 rounded-lg overflow-hidden">


<!-- User -->
<div class="flex items-center gap-3 p-3">

  <img
    src="../../no_profile_pic.png"
    class="w-10 h-10 rounded-full"
  />

  <div>
    <p class="font-semibold">{{ post.username }}</p>
    <p class="text-xs text-gray-400">{{ post.created_at }}</p>
  </div>

</div>

<!-- Text -->
<div class="px-3 pb-2">
  {{ post.content }}
</div>

<!-- Image -->
<img
  v-if="post.media_url"
  :src="post.media_url"
  class="w-full object-cover"
/>

<!-- Reaction bar -->
<div class="flex justify-between items-center p-3">

  <div class="flex gap-2">

    <button @click="toggleLike">
      <HeartIcon 
      class="w-8 h-8 rounded-full"
      :class="liked ? 'bg-blue-500' : 'bg-slate-700'"
    />
      
    </button>
     <!-- Toggle Comments Button -->
        <button @click="showComments = !showComments">
          <ChatBubbleOvalLeftIcon class="w-6 h-6 text-gray-400" />
        </button>
    
    <button >
    <ArrowPathRoundedSquareIcon class="w-8 h-8 bg-slate-700 rounded-full"/>
    </button>

  </div>

  
  <button class="text-red-500 text-sm">
    Report
  </button>

</div>
  <!-- Comment Section (Visible when showComments is true) -->
    <div v-if="showComments" class="p-3 bg-slate-900/50">
      <!-- Comment List -->
      <div class="space-y-2 mb-3">
        <div v-for="(comment, index) in comments" :key="index" class="text-sm">
          <span class="font-bold text-blue-400">{{ comment.user }}:</span>
          <span class="ml-2 text-gray-200">{{ comment.text }}</span>
        </div>
      </div>

      <!-- Input Field -->
      <div class="flex gap-2">
        <input
          v-model="newComment"
          @keyup.enter="addComment"
          placeholder="Write a comment..."
          class="flex-1 bg-slate-700 p-2 rounded text-sm outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button 
          @click="addComment" 
          class="bg-blue-600 hover:bg-blue-500 px-4 py-1 rounded text-sm font-medium transition"
        >
          Post
        </button>
      </div>
    </div>
  </div>
</template>
