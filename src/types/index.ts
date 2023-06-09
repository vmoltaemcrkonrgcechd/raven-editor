export interface iNode<T> {
  id: number;
  type: number;
  tableName: string;
  data: T;
  children: iNode<tData>[];
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
