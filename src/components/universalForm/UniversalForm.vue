<script lang="ts" setup>
import { PropType } from "vue/dist/vue";
import { iFormData, iNode, actionTypes } from "@/types";
import UniversalFormField from "@/components/universalForm/UniversalFormField.vue";
import Button from "@/components/universalButton/Button.vue";
import { onMounted, watch } from "vue";

const props = defineProps({
  universalComponent: {
    type: Object as PropType<iNode<iFormData>>,
    required: true,
  },

  row: {
    type: Object as PropType<{ [key: string]: any }>,
    default: null,
  },
});

const emit = defineEmits(["action"]);

type tForm = { [key: string]: any };

let form: tForm = {};

onMounted(() => {
  props.universalComponent.data.fields.forEach((i) => {
    if (props.row && props.row[i.columnName] !== undefined) {
      form[i.columnName] = props.row[i.columnName];
      return;
    }

    form[i.columnName] = "";
  });
});

const changeHandler = (field: tForm) => {
  form = { ...form, ...field };
};

const clickHandler = () => {
  switch (props.universalComponent.data.type) {
    case actionTypes.POST:
      emit("action", {
        type: actionTypes.POST,
        tableName: props.universalComponent.tableName,
        payload: {
          data: form,
        },
      });
      return;

    case actionTypes.PATCH:
      emit("action", {
        type: actionTypes.PATCH,
        tableName: props.universalComponent.tableName,
        payload: {
          data: form,
          by: props.universalComponent.data.by,
        },
      });
      return;
  }
};
</script>

<template>
  <form
    @submit.prevent
    class="grid grid-cols-2 gap-4 p-4 rounded-md shadow-2xl bg-white"
  >
    <UniversalFormField
      v-for="field in universalComponent.data.fields"
      :field="field"
      :row="row"
      @change="changeHandler"
    />

    <Button class="col-span-2" label="Подтвердить" @click="clickHandler" />
  </form>
</template>
