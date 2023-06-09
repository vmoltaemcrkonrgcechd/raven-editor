<script lang="ts" setup>
import { onMounted } from "vue";
import { useIndexStore } from "@/stores";
import UniversalComponent from "@/components/UniversalComponent.vue";
import { actionTypes, iAction } from "@/types";

const indexStore = useIndexStore();

onMounted(() => {
  indexStore.getNodesByPageId();
});

const actionHandler = (action: iAction): void => {
  const handlers: {
    [key: number]: ((action: iAction) => Promise<void>) | undefined;
  } = {
    [actionTypes.POST]: indexStore.add,
    [actionTypes.PATCH]: indexStore.edit,
    [actionTypes.DELETE]: indexStore.remove,
  };

  if (handlers[action.type] !== undefined) {
    (handlers[action.type] as (action: iAction) => Promise<void>)(action).then(
      () => {
        if (action.successHandler) {
          action.successHandler();
        }
      }
    );
  }
};
</script>

<template>
  <div>
    <UniversalComponent
      v-for="node in indexStore.nodes"
      :key="node.id"
      :universal-component="node"
      @action="actionHandler"
    />
  </div>
</template>
