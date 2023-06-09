<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  modelValue: {
    type: String as PropType<string>,
    default: null,
  },

  label: {
    type: String as PropType<string>,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputHandler = (event: any): void => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <input
    :value="modelValue"
    @input="inputHandler"
    :placeholder="label"
    class="py-1 px-3 border-slate-900 border outline-none rounded-md"
  />
</template>
