<script lang="ts" setup>
import { computed, onBeforeMount, PropType, Ref } from "vue";
import { iNode } from "@/types";
import { useIndexStore } from "@/stores";
import { actionTypes } from "@/types";

const props = defineProps({
  universalComponent: {
    type: Object as PropType<iNode>,
  },
});

const emit = defineEmits(["action"]);

const indexStore = useIndexStore();

let reactiveNode: Ref<iNode>;

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
