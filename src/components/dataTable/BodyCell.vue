<script lang="ts" setup>
import { computed } from "vue";
import Constants from "@/constants";

const props = defineProps({
  value: null,
});

const getFormattedValue = computed<any>(() => {
  if (props.value === undefined || props.value === null) {
    return "нет данных";
  }

  if (typeof props.value === "number") {
    return props.value.toFixed(Constants.FRACTION_DIGITS);
  }

  if (typeof props.value === "boolean") {
    return props.value ? Constants.YES : Constants.NO;
  }

  return props.value;
});

const cellClass = computed(() => {
  return {
    "text-right": typeof props.value === "number",
    "text-center": typeof props.value === "boolean",
    "lowercase py-1 px-3 border-blue-900 border-r last:border-none font-normal":
      true,
  };
});
</script>

<template>
  <td :class="cellClass">{{ getFormattedValue }}</td>
</template>
