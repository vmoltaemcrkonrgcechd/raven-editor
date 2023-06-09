<script lang="ts" setup>
import { PropType } from "vue/dist/vue";
import { iFormData, iNode } from "@/types";
import UniversalFormField from "@/components/universalForm/UniversalFormField.vue";

defineProps({
  universalComponent: {
    type: Object as PropType<iNode<iFormData>>,
    required: true,
  },
});
</script>

<template>
  <form
    @submit.prevent
    class="grid grid-cols-2 gap-4 p-4 rounded-md shadow-2xl bg-white"
  >
    <UniversalFormField
      v-for="field in universalComponent.data.fields"
      :field="field"
    />
  </form>
</template>
