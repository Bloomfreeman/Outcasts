<template>
  <div class="min-h-screen bg-slate-900 text-white">
    <Navbar />
    <router-view />
    
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"

</script>
