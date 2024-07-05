<script setup lang="ts">
/* ----------------------------------------------------------------------------
  layouts\default.vue
---------------------------------------------------------------------------- */
const { data: appLocation } = await useFetch("/api/app-location", {});
</script>
<template>
  <div>
    <div class="tw-bg-blue-800 tw-py-2">
      <HsUiContainer
        class="tw-h-[50px] tw-flex tw-justify-normal tw-items-center"
      >
        <NuxtLink
          to="/"
          theme="link"
          variant="outlined"
          class="tw-text-white tw-font-bold tw-text-[24px]"
        >
          <div class="tw-text-white">Server = {{ appLocation }}</div>
        </NuxtLink>
        <div
          class="tw-h-[calc(100%_-_2px)] tw-mx-4 tw-w-[1px] tw-bg-white"
        ></div>
        <div class="">
          <NuxtLink
            to="/tokyo"
            theme="link"
            variant="outlined"
            class="tw-text-white"
          >
            Tokyo
          </NuxtLink>
        </div>
        <div
          class="tw-h-[calc(100%_-_2px)] tw-mx-4 tw-w-[1px] tw-bg-white"
        ></div>
        <div class="">
          <NuxtLink
            to="/osaka"
            theme="link"
            variant="outlined"
            class="tw-text-white"
          >
            Osaka
          </NuxtLink>
        </div>
        <div
          class="tw-h-[calc(100%_-_2px)] tw-mx-4 tw-w-[1px] tw-bg-white"
        ></div>
        <div class="">
          <NuxtLink
            to="/singapore"
            theme="link"
            variant="outlined"
            class="tw-text-white"
          >
            Singapore
          </NuxtLink>
        </div>
      </HsUiContainer>
    </div>
    <div class="tw-pt-3">
      <slot />
    </div>
    <div class="tw-py-10"></div>
  </div>
</template>
