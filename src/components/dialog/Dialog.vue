<script lang="ts" setup>
import { PropType, ref } from "vue";

defineProps({
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const body = ref<any>(null);

const outsideClickHandler = (event: Event) => {
  if (!event.composedPath().includes(body.value)) {
    emit("update:modelValue", false);
  }
};
</script>

<template>
  <teleport to="body">
    <div
      v-if="modelValue"
      class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-900/75 z-50"
      @click="outsideClickHandler"
    >
      <div ref="body">
        <slot />
      </div>
    </div>
  </teleport>
</template>
