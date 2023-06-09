const getColumnNameOrDisplayName = (i: {
  columnName: string;
  displayName: string;
}): string => {
  if (i.displayName.length !== 0) {
    return i.displayName;
  }

  return i.columnName;
};

export default {
  getColumnNameOrDisplayName,
};
