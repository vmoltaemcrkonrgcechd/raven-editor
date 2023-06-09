import axios, { AxiosResponse } from "axios";
import { iNode, tData } from "@/types";

const instance = axios.create({
  baseURL: "",
});

const getNodesByPageId = (): Promise<AxiosResponse<iNode<tData>[]>> => {
  return instance.get(`api.json`);
};

export default {
  getNodesByPageId,
};
