<script lang="ts" setup>
import Button from "@/components/universalButton/Button.vue";
import { ref } from "vue";
import MoreVert from "@/icons/MoreVert.vue";

const modelValue = ref<boolean>(false);
</script>

<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <Button :icon="MoreVert" @click="modelValue = !modelValue" />

    <div
      v-if="modelValue"
      class="absolute top-0 translate-y-full left-0 w-full py-1 rounded-md shadow-2xl bg-white z-10 flex flex-col"
    >
      <slot />
    </div>
  </div>
</template>
