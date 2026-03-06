<template>
  <div class="bg-slate-800 h-16 flex items-center justify-between px-4 md:px-10">

<!-- Left -->
<div class="flex gap-2">
  <button class="bg-slate-700 px-4 py-1 rounded-full hover:bg-slate-600">
    Feed
  </button>

  <button class="bg-slate-700 px-4 py-1 rounded-full hover:bg-slate-600">
    Chat
  </button>
</div>

<!-- Center (hidden on mobile) -->
<div class="hidden md:block">
  <input
    type="text"
    placeholder="Search"
    class="bg-slate-700 px-4 py-1 rounded-full focus:outline-none"
  />
</div>

<!-- Right -->
<div>
  <img
    src="https://i.pravatar.cc/40"
    class="w-10 h-10 rounded-full"
  />
</div>


  </div>
</template>
