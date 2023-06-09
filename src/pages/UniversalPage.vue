<script lang="ts" setup>
import { onMounted } from "vue";
import { useIndexStore } from "@/stores";
import UniversalComponent from "@/components/UniversalComponent.vue";

const indexStore = useIndexStore();

onMounted(() => {
  indexStore.getNodesByPageId();
});
</script>

<template>
  <div>
    <UniversalComponent
      v-for="node in indexStore.nodes"
      :key="node.id"
      :universal-component="node"
    />
  </div>
</template>
