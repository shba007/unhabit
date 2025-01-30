<script setup lang="ts">
defineProps<{ habit: Habit; habitDays: number }>()
</script>

<template>
  <div class="flex h-full overflow-hidden rounded-xl" dir="rtl">
    <div class="flex gap-0.5" dir="ltr">
      <div v-for="(week, weekIndex) in generateWeeks(habitDays)" :key="weekIndex" class="flex flex-col gap-0.5">
        <div v-for="(day, dayIndex) in week" :key="dayIndex">
          <UTooltip :popper="{ placement: 'top' }" :ui="{ wrapper: '', background: '', ring: '', shadow: '', base: '' }">
            <div :class="['day', { active: habit.completeDays.includes(day.date) }]"></div>
            <template #text>
              <div :class="['chip', { active: habit.completeDays.includes(day.date) }]">{{ formatDate(day.date) }}</div>
            </template>
          </UTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.day {
  @apply flex h-2.5 w-2.5 rounded-sm bg-white/5;

  &.active {
    @apply bg-gradient-to-tr from-sky-300 via-sky-400 to-sky-500 shadow-sm dark:from-sky-400 dark:via-sky-500 dark:to-sky-800 dark:shadow-sky-800;
  }
}

.chip {
  font-size: 0.75rem;
  box-shadow:
    inset 0.5px 0.5px 1px 0px rgba(255, 255, 255, 0.1),
    inset -0.5px -0.5px 1px 0px rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.2) 0px 3px 10px -5px;
  @apply flex select-none items-center justify-center rounded-full bg-black/40 px-2.5 py-0.5 text-white dark:bg-black/80;

  &.active {
    @apply bg-sky-950/80 text-sky-400;
  }
}
</style>
