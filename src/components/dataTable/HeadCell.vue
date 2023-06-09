<script lang="ts" setup>
import { computed, PropType } from "vue";
import { iColumn } from "@/types";
import Utils from "@/utils";

const props = defineProps({
  column: {
    type: Object as PropType<iColumn>,
    required: true,
  },
});

const getColumnNameOrDisplayName = computed<string>(() => {
  return Utils.getColumnNameOrDisplayName(props.column);
});
</script>

<template>
  <th class="uppercase py-1 px-3 text-white font-medium">
    {{ getColumnNameOrDisplayName }}
  </th>
</template>
