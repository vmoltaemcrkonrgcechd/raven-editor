<script lang="ts" setup>
import { computed, PropType } from "vue";
import { buttonTypes, iAction, iButtonData, iNode } from "@/types";
import DialogButton from "@/components/universalButton/DialogButton.vue";

const props = defineProps({
  universalComponent: {
    type: Object as PropType<iNode<iButtonData>>,
    required: true,
  },
});

const emit = defineEmits(["action"]);

const getComponent = computed<any>(() => {
  switch (props.universalComponent.data.type) {
    case buttonTypes.DIALOG:
      return DialogButton;

    default:
      return null;
  }
});

const actionHandler = (action: iAction): void => {
  emit("action", action);
};
</script>

<template>
  <component
    :is="getComponent"
    :universal-button="universalComponent"
    @action="actionHandler"
  />
</template>
