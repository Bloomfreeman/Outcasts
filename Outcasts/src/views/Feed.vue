<template>
  <div class="flex justify-center">
  <div class="w-full md:max-w-xl p-3 space-y-4">


<div class="bg-slate-800 p-3 rounded-lg">
  <input
    type="text"
    placeholder="What's on your mind?"
    class="w-full bg-slate-700 p-2 rounded"
  />
</div>

<PostCard
  v-for="post in posts"
  :key="post.id"
  :post="post"
/>


  </div>
</div>

</template>

<script setup>
import PostCard from "../components/PostCard.vue"

const posts = [
  {
    id: 1,
    username: "name_name",
    text: "what a happy day",
    image: "https://picsum.photos/800/500",
    avatar: "https://i.pravatar.cc/40"
  },
  {
    id: 2,
    username: "name_name",
    text: "what a happy day",
    image: "https://picsum.photos/800/501",
    avatar: "https://i.pravatar.cc/41"
  }
]
</script>
