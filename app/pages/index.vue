<script setup lang="ts">
const { user } = useUserSession()

const { data: habits } = useQuery({
  key: ['habits'],
  query: () => useRequestFetch()('/api/habits') as Promise<Habit[]>,
  enabled: !!useUserSession().loggedIn.value,
})

const emptyHabits = computed(() => habits.value?.length === 0)
</script>

<template>
  <AppContainer>
    <Transition name="fade" mode="out-in">
      <AppCard v-if="user">
        <div class="relative z-10">
          <ProfileHeader />
          <div class="scrollable-card max-h-[calc(100vh-18.875rem)] overflow-y-auto">
            <HabitCard v-for="habit in habits" :key="habit.id" :habit="habit" />
          </div>
          <EmptyHabits v-if="emptyHabits" />
        </div>
      </AppCard>
      <AppCard v-else class="items-start justify-center gap-7 p-6">
        <div class="relative z-10 flex w-5/6 flex-col gap-5">
          <div class="h-12 w-12 rounded-2xl border-4 border-sky-600 bg-sky-400 shadow-lg" />
          <div class="text-lg font-medium">Habit Tracker</div>
          <div class="text-3xl font-medium">
            An efficient tool to
            <span class="text-sky-400">track</span>
            and manage your
            <span class="text-sky-400">daily habits</span>
          </div>
        </div>
        <a href="/auth/google" class="button bg-white/20 px-2.5 py-2 hover:bg-white/30">
          <UIcon name="i-simple-icons-google" class="h-5 w-5" />
          Continue with Google
        </a>
      </AppCard>
    </Transition>
    <AppFooter />
  </AppContainer>
</template>
