import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { iNode, tData } from "@/types";
import Api from "@/api";

export const useIndexStore = defineStore("index", () => {
  const dictionary: {
    [key: string]: { [key: number]: Ref<iNode<tData> | null> };
  } = {};

  const nodes = ref<iNode<tData>[]>([]);

  const getNodesByPageId = () => {
    Api.getNodesByPageId().then(({ data }) => {
      nodes.value = data;
    });
  };

  const setNode = (node: iNode<tData>): Ref<iNode<tData>> => {
    if (dictionary[node.tableName] === undefined) {
      dictionary[node.tableName] = {};
    }

    if (dictionary[node.tableName][node.id] === undefined) {
      dictionary[node.tableName][node.id] = ref(null);
    }

    dictionary[node.tableName][node.id].value = node;

    return dictionary[node.tableName][node.id] as Ref<iNode<tData>>;
  };

  return {
    nodes,
    getNodesByPageId,
    setNode,
  };
});
