<script lang="ts" setup>
import { computed, PropType } from "vue";
import { iColumn } from "@/types";

const props = defineProps({
  column: {
    type: Object as PropType<iColumn>,
    required: true,
  },
});

const getColumnNameOrDisplayName = computed<string>(() => {
  if (props.column.displayName.length !== 0) {
    return props.column.displayName;
  }

  return props.column.columnName;
});
</script>

<template>
  <th class="uppercase py-1 px-3 text-white font-medium">
    {{ getColumnNameOrDisplayName }}
  </th>
</template>
