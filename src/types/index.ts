export enum nodeTypes {
  TABLE,
}

export interface iNode<T = tData> {
  id: number;
  type: number;
  tableName: string;
  data: T;
  children: iNode[];
}

export type tData = iTableData;

export interface iTableData {
  columns: iColumn[];
  rows: { [key: string]: any };
}

export interface iColumn {
  columnName: string;
  displayName: string;
}

export enum actionTypes {
  POST,
  PATCH,
  DELETE,
}

export interface iAction<T = tPayload> {
  type: number;
  tableName: string;
  successHandler?: () => void;
  payload: T;
}

export type tPayload = iPostPayload;

export interface iPostPayload {
  data: { [key: string]: any };
}
