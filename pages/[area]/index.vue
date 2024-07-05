<script setup lang="ts">
import dayjs from "dayjs";
const route = useRoute();
const capitalize = (str: string) => {
  if (typeof str !== "string" || !str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
const area = computed(() => {
  return capitalize(String(route.params.area) || "tokyo");
});
const ts = dayjs().format("YYYYMMDD_HHmmss_SSS");
const imgClass = "tw-object-cover tw-h-full tw-w-full";
</script>
<template>
  <HsUiContainer class="">
    <ClientOnly>
      <HsUiCard class="">
        <HsUiCardItem
          variant="header"
          class="tw-bg-main1 tw-text-white tw-text-[20px]"
        >
          <div class="">Strage Location = {{ area }}</div>
        </HsUiCardItem>
        <HsUiCardItem variant="body" class="tw-bg-back">
          <div class="tw-grid tw-grid-cols-3 tw-gap-2">
            <div class="">
              <div class="">Strage Location Image</div>
              <HsUiAspectBox>
                <img
                  :src="`/api/area-img.jpg?area=${area}`"
                  alt=""
                  :class="imgClass"
                />
              </HsUiAspectBox>
            </div>
            <div class="">
              <div class="">Buffer</div>
              <HsUiAspectBox>
                <img
                  :src="`/api/test-img.jpg?area=${area}&ts=${ts}`"
                  alt=""
                  :class="imgClass"
                />
              </HsUiAspectBox>
            </div>
            <div class="">
              <div class="">Presigned Url</div>
              <HsUiAspectBox>
                <img
                  :src="`/api/test-img-presigned.jpg?area=${area}&ts=${ts}`"
                  alt=""
                  :class="imgClass"
                />
              </HsUiAspectBox>
            </div>
          </div>
        </HsUiCardItem>
      </HsUiCard>
    </ClientOnly>
  </HsUiContainer>
</template>
