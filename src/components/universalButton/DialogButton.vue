<script lang="ts" setup>
import Button from "@/components/universalButton/Button.vue";
import { PropType, ref } from "vue";
import Dialog from "@/components/dialog/Dialog.vue";
import { iAction, iButtonData, iNode } from "@/types";
import UniversalComponent from "@/components/universalComponent/UniversalComponent.vue";

defineProps({
  universalButton: {
    type: Object as PropType<iNode<iButtonData>>,
    required: true,
  },
});

const emit = defineEmits(["action"]);

const modelValue = ref<boolean>(false);

const actionHandler = (action: iAction): void => {
  emit("action", {
    ...action,
    successHandler: () => {
      modelValue.value = false;

      if (action.successHandler !== undefined) {
        action.successHandler();
      }
    },
  });
};
</script>

<template>
  <Button
    :label="universalButton.data.label"
    :secondary="universalButton.data.secondary"
    @click="modelValue = true"
  />

  <Dialog v-model="modelValue">
    <UniversalComponent
      v-for="child in universalButton.children"
      :universal-component="child"
      @action="actionHandler"
    />
  </Dialog>
</template>
