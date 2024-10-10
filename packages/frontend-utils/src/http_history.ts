type Row = Record<string, string>;

export const getHttpHistoryCurrentRow = () => {
  const selectedRow = document.querySelector(
    '.c-table__item-row[data-is-selected="true"]',
  );
  const row = selectedRow
    ? Array.from(selectedRow.querySelectorAll(".c-item-cell__inner")).map(
        (cell) => cell.textContent || "",
      )
    : [];
  const header = Array.from(
    document
      .querySelector(".c-table__header-row")
      ?.querySelectorAll(".c-header-cell__content") || [],
  ).map((r) => r.textContent || "");

  const rowData = header.reduce<Row>((acc, key, index) => {
    acc[key] = row[index] || "";
    return acc;
  }, {});

  return rowData;
};
