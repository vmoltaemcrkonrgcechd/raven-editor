<script lang="ts" setup>
import { computed, onBeforeMount, PropType, Ref } from "vue";
import { iNode, tData } from "@/types";
import { useIndexStore } from "@/stores";

const props = defineProps({
  universalComponent: {
    type: Object as PropType<iNode<tData>>,
  },
});

const indexStore = useIndexStore();

let reactiveNode: Ref<iNode<tData>>;

onBeforeMount(() => {
  if (props.universalComponent) {
    reactiveNode = indexStore.setNode(props.universalComponent);
  }
});

const data = computed(() => {
  return reactiveNode.value;
});
</script>

<template>
  {{ data }}
</template>
