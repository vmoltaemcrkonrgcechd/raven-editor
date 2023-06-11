<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  label: {
    type: String as PropType<string | null>,
    default: null,
  },

  secondary: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  icon: {
    type: null,
    default: null,
  },
});

const buttonClass = computed(() => {
  return {
    "rounded-md uppercase py-1 px-3 font-medium flex items-center justify-center gap-4":
      true,
    "bg-inherit hover:bg-blue-50 rounded-none": props.secondary,
    "bg-blue-900 hover:bg-blue-800 text-white": !props.secondary,
    "px-0 py-0 rounded-full": !props.label && props.icon,
  };
});
</script>

<template>
  <button :class="buttonClass">
    <component v-if="icon" :is="icon" class="fill-white" />

    <template v-if="label">
      {{ label }}
    </template>
  </button>
</template>
