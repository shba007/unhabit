<template>
  <div class="wrapper">
    <div class="container">
      <slot />
    </div>
    <div class="background" />
  </div>
</template>

<style scoped>
.wrapper {
  @apply relative flex h-dvh items-center justify-center;
}

.container {
  @apply z-10 mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-4 p-5;
}

.background {
  @apply absolute h-dvh w-screen bg-cover bg-center blur transition-opacity duration-300;
  background-image: url('/images/background.jpg');
}
</style>
