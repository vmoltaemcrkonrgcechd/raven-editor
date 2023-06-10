<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  label: {
    type: String as PropType<string>,
    default: null,
  },

  secondary: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const buttonClass = computed(() => {
  return {
    "rounded-md": true,
    "bg-inherit hover:bg-blue-50": props.secondary,
    "bg-blue-900 hover:bg-blue-800 uppercase py-1 px-3 text-white font-medium":
      !props.secondary,
  };
});
</script>

<template>
  <button :class="buttonClass">{{ label }}</button>
</template>
