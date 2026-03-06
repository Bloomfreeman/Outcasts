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
</script>

<template>
  <div class="bg-slate-800 rounded-lg overflow-hidden">


<!-- User -->
<div class="flex items-center gap-3 p-3">

  <img
    :src="post.avatar"
    class="w-10 h-10 rounded-full"
  />

  <div>
    <p class="font-semibold">{{ post.username }}</p>
    <p class="text-xs text-gray-400">day and date</p>
  </div>

</div>

<!-- Text -->
<div class="px-3 pb-2">
  {{ post.text }}
</div>

<!-- Image -->
<img
  :src="post.image"
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

    <button >
    <ChatBubbleOvalLeftIcon class="w-8 h-8 bg-slate-700 rounded-full"/>
      
    </button>

    <button >
    <ArrowPathRoundedSquareIcon class="w-8 h-8 bg-slate-700 rounded-full"/>
    </button>

  </div>

  <button class="text-red-500 text-sm">
    Report
  </button>

</div>


  </div>
</template>
