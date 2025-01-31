<script setup lang="ts">
import { format } from 'date-fns'
const config = useRuntimeConfig()
const currentYear = format(new Date(), 'yyyy')
</script>

<template>
  <div class="mt-2 flex items-center justify-center gap-1 text-xs text-neutral-400">
    <a class="font-semibold transition hover:text-white" href="https://unhabit.shirsendu-bairagi.dev/" target="_blank">Habit v{{ config.app.version }}</a>
    - by
    <a class="font-semibold transition hover:text-white" href="https://shirsendu-bairagi.dev/" target="_blank">Shirsendu Bairagi</a>
    {{ currentYear }}
  </div>
</template>
