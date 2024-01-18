<template>
  <div
    class="flex flex-wrap justify-between w-full px-10 md:px-16 py-10 space-y-2"
  >
    <NuxtLink to="/" class="flex flex-row items-center">
      <img src="/collectivo-rgb.png" class="object-scale-down h-10 w-full" />
    </NuxtLink>

    <div class="flex flex-row space-x-2">
      <a
        href="https://discord.gg/42MWureAYW"
        target="_blank"
        aria-label="Discord"
        class="header-icon"
      >
        <UIcon name="i-bxl-discord-alt" class="text-3xl m-0 p-0 block" />
      </a>
      <a
        href="https://github.com/collectivo-dev/collectivo"
        target="_blank"
        aria-label="Github"
        class="header-icon"
      >
        <UIcon name="i-bxl-github" class="text-3xl m-0 p-0 block" />
      </a>
    </div>
  </div>
  <div class="h-full mx-auto flex justify-center items-center">
    <div class="space-y-6 max-w-3xl w-full mx-10 md:mx-16 md:mt-32">
      <h1
        class="text-5xl md:text-7xl font-bold text-[#3b2476] text-transparent bg-clip-text cv-gradient"
      >
        A modular platform for your community.
      </h1>
      <p class="text-2xl text-gray-700 italic leading-9">
        A flexible framwork to build your own custom platform for
        <span class="font-semibold">collaboration</span>,
        <span class="font-semibold">participation</span> and
        <span class="font-semibold">data management</span>.
      </p>
      <div class="flex flex-wrap gap-5">
        <a href="https://github.com/collectivo-dev/collectivo" target="_blank">
          <UButton
            size="xl"
            class="rounded-xl cv-gradient hover:transparent font-semibold"
          >
            <UIcon name="i-bxl-github" />
            Try it out
          </UButton></a
        >
        <a href="https://discord.gg/42MWureAYW" target="_blank"
          ><UButton
            size="xl"
            class="rounded-xl cv-gradient hover:transparent font-semibold"
          >
            <UIcon name="i-bxl-discord-alt" />
            Join the discussion
          </UButton></a
        >
      </div>
    </div>
  </div>
</template>

<style type="scss">
html {
  font-family: "Poppins";
}

.header-icon {
  @apply p-1;
  &:hover {
    @apply bg-slate-200 rounded-full;
  }
}

.cv-gradient {
  @apply bg-gradient-to-br from-pink-400 to-[#3b2476];
}
</style>
