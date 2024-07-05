<script setup lang="ts"></script>
<template>
  <HsUiContainer class="">
    <HsUiCard class="">
      <HsUiCardItem variant="header" class="tw-bg-main1 tw-text-white">
        s3-access-test
      </HsUiCardItem>
      <HsUiCardItem variant="body" class="tw-bg-back">
        File Server Location
        <div class="tw-flex tw-gap-2">
          <div class="tw-min-w-[100px]">
            <HsFcBtn
              variant="outlined"
              to="/tokyo"
              class="tw-w-full"
              theme="link"
            >
              Tokyo
            </HsFcBtn>
          </div>
          <div class="tw-min-w-[100px]">
            <HsFcBtn
              variant="outlined"
              to="/osaka"
              class="tw-w-full"
              theme="link"
            >
              Osaka
            </HsFcBtn>
          </div>
          <div class="tw-min-w-[100px]">
            <HsFcBtn
              variant="outlined"
              to="/singapore"
              class="tw-w-full"
              theme="link"
            >
              Singapore
            </HsFcBtn>
          </div>
        </div>
      </HsUiCardItem>
    </HsUiCard>
  </HsUiContainer>
</template>
