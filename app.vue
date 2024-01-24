<template>
  <div
    id="cv-header"
    class="flex flex-wrap justify-between w-full px-10 md:px-16 py-10 space-y-2">
    <NuxtLink to="/" class="flex flex-row items-center">
      <span
        class="font-[Nunito] italic font-black text-4xl cv-gradient-text pr-5">
        collectivo
      </span>
    </NuxtLink>

    <div class="flex flex-row space-x-2 text-3xl text-gray-800">
      <a
        href="https://discord.gg/42MWureAYW"
        target="_blank"
        aria-label="Discord"
        class="header-icon">
        <UIcon name="i-bxl-discord-alt" class="block" />
      </a>
      <a
        href="https://github.com/collectivo-dev/collectivo"
        target="_blank"
        aria-label="Github"
        class="header-icon">
        <UIcon name="i-bxl-github" class="block" />
      </a>
    </div>
  </div>
  <div class="">
    <NuxtPage></NuxtPage>
  </div>
</template>
