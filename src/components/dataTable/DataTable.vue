<script lang="ts" setup>
import { PropType } from "vue";
import { iAction, iNode, iTableData } from "@/types";
import BodyCell from "@/components/dataTable/BodyCell.vue";
import HeadCell from "@/components/dataTable/HeadCell.vue";
import Universal from "@/components/universalComponent/UniversalComponent.vue";
import MenuButton from "@/components/universalButton/MenuButton.vue";

defineProps({
  universalComponent: {
    type: Object as PropType<iNode<iTableData>>,
    required: true,
  },
});

const emit = defineEmits(["action"]);

const actionHandler = (action: iAction): void => {
  emit("action", action);
};
</script>

<template>
  <table class="w-full table-fixed rounded-md shadow-2xl">
    <thead class="bg-blue-900">
      <tr>
        <HeadCell
          v-for="column in universalComponent.data.columns"
          :column="column"
        />

        <th
          v-if="universalComponent.children.length"
          class="uppercase py-1 px-3 text-white font-medium"
        >
          Действия
        </th>
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

        <td
          v-if="universalComponent.children.length"
          class="flex items-center justify-center"
        >
          <MenuButton>
            <Universal
              v-for="child in universalComponent.children"
              :universal-component="child"
              :row="row"
              @action="actionHandler"
            />
          </MenuButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>
