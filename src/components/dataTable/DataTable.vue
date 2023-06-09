<script lang="ts" setup>
import { PropType } from "vue";
import { iNode, iTableData } from "@/types";
import BodyCell from "@/components/dataTable/BodyCell.vue";
import HeadCell from "@/components/dataTable/HeadCell.vue";

defineProps({
  universalComponent: {
    type: Object as PropType<iNode<iTableData>>,
    required: true,
  },
});
</script>

<template>
  <table class="w-full table-fixed rounded-md overflow-hidden shadow-2xl">
    <thead class="bg-blue-900">
      <tr>
        <HeadCell
          v-for="column in universalComponent.data.columns"
          :column="column"
        />
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="row in universalComponent.data.rows"
        class="bg-white even:bg-blue-50"
      >
        <BodyCell
          v-for="column in universalComponent.data.columns"
          :value="row[column.columnName]"
        />
      </tr>
    </tbody>
  </table>
</template>
