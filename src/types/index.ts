export enum nodeTypes {
  TABLE,
  FORM,
  BUTTON,
}

export interface iNode<T = tData> {
  id: number;
  type: number;
  tableName: string;
  data: T;
  children: iNode[];
}

export type tData = iTableData | iFormData | iButtonData;

export interface iTableData {
  columns: iColumn[];
  rows: { [key: string]: any };
}

export interface iColumn {
  columnName: string;
  displayName: string;
}

export interface iFormData {
  type: number;
  fields: iFormField[];
}

export enum fieldTypes {
  INPUT_TEXT,
}

export interface iFormField {
  type: number;
  columnName: string;
  displayName: string;
}

export enum buttonTypes {
  DIALOG,
}

export interface iButtonData {
  type: number;
  label: string;
  secondary: boolean;
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
