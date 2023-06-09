import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { iAction, iNode, iPostPayload } from "@/types";
import Api from "@/api";

export const useIndexStore = defineStore("index", () => {
  const dictionary: {
    [key: string]: { [key: number]: Ref<iNode | null> };
  } = {};

  const nodes = ref<iNode[]>([]);

  const getNodesByPageId = () => {
    Api.getNodesByPageId().then(({ data }) => {
      nodes.value = data;
    });
  };

  const setNode = (node: iNode): Ref<iNode> => {
    if (dictionary[node.tableName] === undefined) {
      dictionary[node.tableName] = {};
    }

    if (dictionary[node.tableName][node.id] === undefined) {
      dictionary[node.tableName][node.id] = ref(null);
    }

    dictionary[node.tableName][node.id].value = node;

    return dictionary[node.tableName][node.id] as Ref<iNode>;
  };

  const add = (action: iAction<iPostPayload>): Promise<void> => {
    console.log(action);
    return new Promise<void>((resolve) => {
      resolve();
    });
  };

  const remove = (action: iAction): Promise<void> => {
    console.log(action);
    return new Promise<void>((resolve) => {
      resolve();
    });
  };

  const edit = (action: iAction): Promise<void> => {
    console.log(action);
    return new Promise<void>((resolve) => {
      resolve();
    });
  };

  return {
    nodes,
    getNodesByPageId,
    setNode,
    add,
    remove,
    edit,
  };
});
