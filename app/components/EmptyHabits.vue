<script setup lang="ts">
const createHabitModal = ref(false)
</script>

<template>
  <ContentBox class="relative mx-4 mb-4 flex flex-col items-center justify-center overflow-hidden bg-white/5 text-center">
    <div class="absolute flex flex-col gap-0.5">
      <div v-for="row in 14" :key="row" class="flex w-full gap-0.5">
        <div v-for="col in 27" :key="col" class="h-2.5 w-2.5 rounded-sm bg-neutral-600/5"></div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-2 p-6">
      <button class="button mb-2 bg-sky-400 p-2.5 text-sky-950 hover:bg-sky-300" @click="createHabitModal = true">
        <UIcon name="i-heroicons-plus-16-solid" class="h-6 w-6" />
      </button>
      <div class="font-medium">No habit found</div>
      <div class="text-xs text-neutral-400">Create a new habit to track your progress</div>
    </div>
  </ContentBox>
  <UModal v-model="createHabitModal" :ui="{ container: 'items-center', width: 'w-96', background: '', shadow: '', overlay: { base: 'backdrop-blur-2xl', background: 'bg-white/5 dark:bg-black/60' } }">
    <HabitForm @habit-added="createHabitModal = false" />
  </UModal>
</template>
