<script setup lang="ts">
const createHabitModal = ref(false)
</script>

<template>
  <div class="absolute right-5 top-5 flex gap-3">
    <button class="button bg-white/20 py-1.5 pl-2 pr-2.5 hover:bg-white/25" @click="createHabitModal = true">
      <UIcon name="i-heroicons-plus-16-solid" class="h-5 w-5" />
      Create
    </button>
    <AppDropdown />
  </div>
  <UModal v-model="createHabitModal" :ui="{ container: 'items-center', width: 'w-96', background: '', shadow: '', overlay: { base: 'backdrop-blur-2xl', background: 'bg-white/5 dark:bg-black/60' } }">
    <HabitForm @habit-added="createHabitModal = false" />
  </UModal>
</template>
