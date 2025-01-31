<script setup lang="ts">
const title = `UnHabit`
const description = `A minimalistic habit tracker application to track and manage your daily habits with ease`
const url = 'https://habit.shirsenud-bairagi.dev'

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', href: '/logo.png' },
    { rel: 'apple-touch-icon', href: '/logo.png' },
    { rel: 'msapplication-TileImage', href: '/logo.png' },
  ],
})

useSeoMeta({
  ogType: 'profile',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogUrl: url,
  fbAppId: 966242223397117,
  twitterCard: 'summary_large_image',
  colorScheme: 'light dark',
})

useSchemaOrg([
  defineWebPage({
    datePublished: new Date(2025, 0, 30).toISOString(),
    dateModified: new Date(2025, 0, 31).toISOString(),
    author: 'Shirsendu Bairagi',
  }),
  defineWebSite({
    url: url,
    name: title,
    description: description,
  }),
])
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
