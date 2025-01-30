<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', href: '/logo.png' },
    { rel: 'apple-touch-icon', href: '/logo.png' },
    { rel: 'msapplication-TileImage', href: '/logo.png' },
  ],
})

useSeoMeta({
  title: 'Habit',
  description: 'A minimalistic habit tracker application to track and manage your daily habits with ease',
  ogTitle: 'Habit',
  ogDescription: 'A minimalistic habit tracker application to track and manage your daily habits with ease',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  twitterCard: 'summary_large_image',
  ogImage: '/preview/landing.png',
  twitterImage: '/review/landing.png',
  ogType: 'website',
  ogUrl: 'https://habit.shirsenud-bairagi.dev',
  ogSiteName: 'Habit',
  robots: 'index, follow',
  keywords: 'habit, tracker, daily, habits, management, tool, minimalistic',
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPwaManifest />
  <NuxtPwaAssets />
  <NuxtLoadingIndicator color="#98DA8B" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <AppInstallPrompt />
</template>

<style lang="postcss">
.scrollable-card {
  scrollbar-width: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.button {
  box-shadow:
    inset 0.5px 0.5px 1px 0px rgba(255, 255, 255, 0.1),
    inset -0.5px -0.5px 1px 0px rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.2) 0px 3px 10px -5px;
  @apply flex items-center justify-center gap-2 rounded-full text-sm backdrop-blur-sm transition-all;

  &:active {
    @apply scale-95;
  }
}
</style>
