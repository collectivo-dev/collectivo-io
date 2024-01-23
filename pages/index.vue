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

  <div
    id="cv-page"
    class="h-full px-10 mx-auto flex justify-center items-center">
    <div class="max-w-3xl w-full mt-24 md:mt-32">
      <h1
        class="font-[Nunito] pb-5 pr-1 italic text-4xl md:text-7xl font-black text-transparent bg-clip-text cv-gradient-text">
        A modular platform for your community.
      </h1>
      <p class="text-xl md:text-2xl pb-6 text-gray-800 italic leading-9">
        An open-source framework to build your own custom platform for
        <span class="font-semibold">collaboration</span>,
        <span class="font-semibold">participation</span> and
        <span class="font-semibold">data management</span>.
      </p>
      <div class="flex flex-wrap gap-5">
        <a href="https://mailchi.mp/79143ea8bd3c/collectivo" target="_blank">
          <UButton size="xl" class="cv-button">
            <UIcon name="i-bx-bxs-bell-ring" />
            Sign up for our newsletter
          </UButton>
        </a>
        <a href="https://discord.gg/42MWureAYW" target="_blank">
          <UButton size="xl" class="cv-button">
            <UIcon name="i-bx-bxl-discord-alt" />
            Join us on Discord
          </UButton>
        </a>
      </div>
      <div class="h-48"></div>

      <!-- Features section -->
      <div id="cv-features" class="flex flex-col gap-10">
        <div class="flex flex-wrap">
          <div class="basis-full sm:basis-1/2 p-5">
            <h2>Community app</h2>
            <p>
              Create a flexible web app built with
              <a href="https://nuxt.com/" target="_blank">Nuxt</a>. Use modules
              for memberships, payments, tasks, decisions, and more. Or add your
              own custom modules.
            </p>
          </div>
          <div class="basis-full sm:basis-1/2 p-5">
            <img
              src="/features/dashboard.png"
              class="rounded-xl overflow-hidden" />
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="basis-full sm:basis-1/2 p-5 hidden md:block">
            <img
              src="/features/studio1.png"
              class="rounded-xl overflow-hidden" />
          </div>
          <div class="basis-full sm:basis-1/2 p-5">
            <h2>Data studio</h2>
            <p>
              Enjoy full control over your data with
              <a href="https://directus.io/" target="_blank">Directus</a>.
              Manage content, control access, track changes, design
              visualizations, and create automated workflows.
            </p>
          </div>
          <div class="basis-full sm:basis-1/2 p-5 block md:hidden">
            <img src="/features/studio1.png" />
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="basis-full sm:basis-1/2 p-5">
            <h2>Single sign-on</h2>
            <p>
              Control access to your applications with
              <a href="https://www.keycloak.org/" target="_blank">Keycloak</a>.
              Users can sign in once and will be authenticated with all of your
              services.
            </p>
          </div>
          <div class="basis-full sm:basis-1/2 p-5">
            <img src="/features/login.png" class="rounded-xl overflow-hidden" />
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="basis-full sm:basis-1/2 p-5 hidden md:block">
            <img
              src="/features/github.png"
              class="rounded-xl overflow-hidden" />
          </div>

          <div class="basis-full sm:basis-1/2 p-5">
            <h2>Open-source</h2>
            <p>
              Collectivo is completely free and anyone can contribute. The code
              is available on
              <a
                href="https://github.com/collectivo-dev/collectivo"
                target="_blank"
                >GitHub</a
              >
              under the AGPL-3.0 license.
            </p>
          </div>
          <div class="basis-full sm:basis-1/2 p-5 block md:hidden">
            <img src="/features/github.png" />
          </div>
        </div>
      </div>
      <div class="h-32"></div>
      <div
        class="w-full space-y-3 text-lg p-5 bg-slate-50 rounded-xl shadow-lg">
        <h2 class="flex flex-wrap align-middle items-center gap-3 pb-0">
          <UIcon
            name="i-bx-bxs-error"
            class="bg-gray-800 bg-gradient-to-br from-pink-400 to-[#761e8a]" />
          In development
        </h2>
        <p>
          Collectivo is currently in development. If you are interested in
          testing the software, please contact us at
          <a href="mailto:info@collectivo.io" target="_blank">
            info@collectivo.io
          </a>
          or join our
          <a href="https://discord.gg/42MWureAYW" target="_blank"
            >Discord server</a
          >.
        </p>
      </div>

      <div class="h-32"></div>
      <div>
        <h2>Collectivo community</h2>
      </div>
      <div id="partners" class="flex flex-wrap items-center gap-10">
        <a href="https://convive.io/" target="_blank" class="block">
          <img src="/logos/convive.png" />
        </a>
        <a href="https://mila.wien/" target="_blank">
          <img src="/logos/mila.png" />
        </a>
        <a href="https://www.hermes.at/" target="_blank">
          <img src="/logos/hermes.png" />
        </a>
        <a href="https://wien.arbeiterkammer.at/digifonds" target="_blank">
          <img src="/logos/digifonds.jpg" />
        </a>
        <a href="https://smartat.coop" target="_blank">
          <img src="/logos/smart.png" />
        </a>
      </div>
      <div class="h-24"></div>

      <h2>Interested? Get in touch</h2>

      <div class="flex flex-wrap gap-5 mt-2">
        <a href="mailto:info@collectivo.io" target="_blank">
          <UButton size="xl" class="cv-button">
            <UIcon name="i-bx-bxs-envelope" />
            Write us an Email
          </UButton>
        </a>
        <a href="https://mailchi.mp/79143ea8bd3c/collectivo" target="_blank">
          <UButton size="xl" class="cv-button">
            <UIcon name="i-bx-bxs-bell-ring" />
            Sign up for our newsletter
          </UButton>
        </a>
        <a href="https://discord.gg/42MWureAYW" target="_blank">
          <UButton size="xl" class="cv-button">
            <UIcon name="i-bx-bxl-discord-alt" />
            Join us on Discord
          </UButton>
        </a>
      </div>
      <div class="h-24"></div>
      <div id="cv-footer">
        <hr class="h-1 w-full cv-gradient rounded border-0 my-10" />
        <div class="flex flex-wrap">
          <div class="basis-full sm:basis-1/2 p-5">
            <p>
              <span class="font-bold">Links</span>
              <br />Email:
              <a href="mailto:info@collectivo.io" target="_blank">
                info@collectivo.io
              </a>
              <br />GitHub:
              <a
                href="https://github.com/collectivo-dev/collectivo"
                target="_blank"
                >collectivo-dev</a
              >
            </p>
          </div>
          <div class="basis-full sm:basis-1/2 p-5">
            <p>
              <span class="font-bold">Impressum</span>
              <br />Smart Coop Austria <br />SMartAt e. Gen.
              <br />Gumpendorferstraße 63b <br />1060 Wien
            </p>
          </div>
        </div>
      </div>
      <div class="h-12"></div>
      <!-- END CONTENT -->
    </div>
  </div>
</template>

<style type="scss">
p {
  @apply font-[Poppins] text-gray-800 text-lg;

  a {
    @apply font-semibold cv-gradient-text;
  }
}

#partners {
  img {
    @apply max-h-32 max-w-48;
  }
}

.header-icon {
  @apply p-1;
  &:hover {
    @apply bg-slate-200 rounded-full;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-[Nunito] font-black cv-gradient-text;
}

h2 {
  @apply text-3xl md:text-4xl pb-3;
}

.cv-gradient {
  @apply bg-gradient-to-br from-pink-400 to-[#761e8a];
}

.cv-gradient-text {
  @apply cv-gradient text-transparent bg-clip-text;
}

.cv-button {
  @apply opacity-90 hover:opacity-100 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-br from-pink-400 to-[#761e8a];
}

.logo-color {
  @apply text-[#761e8a];
}
</style>
