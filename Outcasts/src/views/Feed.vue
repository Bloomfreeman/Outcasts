<template>
  <div class="flex justify-center">
  <div class="w-full md:max-w-xl p-3 space-y-4">


<CreatePost />
<PostCard
  v-for="post in posts"
  :key="post.id"
  :post="post"
/>
<div v-if="loading" class="text-center text-gray-400"> Loading posts... </div>

  </div>
  
</div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import CreatePost from "../components/CreatePost.vue"
import PostCard from "../components/PostCard.vue"
import { fetchPosts } from "../services/api"

const posts = ref([])
const page = ref(1)
const loading = ref(false)
const hasMore = ref(true)

async function loadPosts() {
  if (loading.value || !hasMore.value) return

  loading.value = true

  const data = await fetchPosts(page.value)

  posts.value.push(...data)
  hasMore.value = data.hasMore

  page.value++
  loading.value = false
}

function handleScroll() {
  const bottom =
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 200

  if (bottom) {
    loadPosts()
  }
}

onMounted(() => {
  loadPosts()
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

