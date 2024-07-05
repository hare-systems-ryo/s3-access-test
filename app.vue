<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en', prefix: 'og: http://ogp.me/ns#' },
  meta: [
    { 'http-equiv': 'refresh', content: '' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#FFF' },
    { hid: 'robots', name: 'robots', content: 'noindex' },
  ],
  link: [
    { rel: 'shortcut icon', href: '/assets/icon/favicon.ico', type: 'image/x-icon' },
    { rel: 'apple-touch-icon', href: '/assets/icon/apple-touch-icon.png' },
    { rel: 'apple-touch-icon', href: '/assets/icon/apple-touch-icon-57x57.png', sizes: '57x57' },
    { rel: 'apple-touch-icon', href: '/assets/icon/apple-touch-icon-72x72.png', sizes: '72x72' },
    { rel: 'apple-touch-icon', href: '/assets/icon/apple-touch-icon-76x76.png', sizes: '76x76' },
    { rel: 'apple-touch-icon', href: '/assets/icon/apple-touch-icon-114x114.png', sizes: '114x114' },
    { rel: 'apple-touch-icon', href: '/assets/icon/apple-touch-icon-120x120.png', sizes: '120x120' },
    { rel: 'apple-touch-icon', href: '/assets/icon/apple-touch-icon-144x144.png', sizes: '144x144' },
    { rel: 'apple-touch-icon', href: '/assets/icon/apple-touch-icon-152x152.png', sizes: '152x152' },
    { rel: 'apple-touch-icon', href: '/assets/icon/apple-touch-icon-180x180.png', sizes: '180x180' },
  ],
  script: [],
  noscript: [{ children: 'JavaScript is required' }],
});
</script>
<template>
  <div class="tw-min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
