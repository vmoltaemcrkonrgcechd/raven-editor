<script lang="ts" setup>
import { computed, onBeforeMount, PropType, Ref } from "vue";
import { iAction, iNode, nodeTypes } from "@/types";
import { useIndexStore } from "@/stores";
import DataTable from "@/components/dataTable/DataTable.vue";
import UniversalForm from "@/components/universalForm/UniversalForm.vue";

const props = defineProps({
  universalComponent: {
    type: Object as PropType<iNode>,
    required: true,
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

const getData = computed<iNode>(() => {
  return reactiveNode.value;
});

const getComponent = computed<any>(() => {
  switch (props.universalComponent.type) {
    case nodeTypes.TABLE:
      return DataTable;

    case nodeTypes.FORM:
      return UniversalForm;

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
    :universal-component="getData"
    @action="actionHandler"
  />
</template>
