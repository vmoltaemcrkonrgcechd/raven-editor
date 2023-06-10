<script lang="ts" setup>
import { fieldTypes, iFormField } from "@/types";
import { onBeforeMount, PropType, ref, watch } from "vue";
import InputText from "@/components/inputText/InputText.vue";
import Utils from "@/utils";

const modelValue = ref<any>(null);

const props = defineProps({
  field: {
    type: Object as PropType<iFormField>,
    required: true,
  },
});

const emit = defineEmits(["change"]);

onBeforeMount(() => {
  switch (props.field.type) {
    case fieldTypes.INPUT_TEXT:
      modelValue.value = "";
      break;

    default:
      return;
  }

  watch(modelValue, (newValue: any) => {
    emit("change", {
      [props.field.columnName]: newValue,
    });
  });
});
</script>

<template>
  <InputText
    v-if="field.type === fieldTypes.INPUT_TEXT"
    v-model="modelValue"
    :label="Utils.getColumnNameOrDisplayName(field)"
  />
</template>
