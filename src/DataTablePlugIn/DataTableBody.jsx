const DataTableBody = ({ data, columns, currentPage, dataLength }) => {
  const startIndex = currentPage * dataLength - dataLength;
  const endIndex = parseInt(startIndex) + parseInt(dataLength);
  const currentData = data.slice(startIndex, endIndex);

  const rows = currentData.map((item, rowIndex) => (
    <tr key={rowIndex} className={rowIndex % 2 == 0 ? "odd" : "even"}>
      {columns.map((column, columnIndex) => {
        return <td key={columnIndex}>{item[column.valueName]}</td>;
      })}
    </tr>
  ));

  return <>{rows}</>;
};

export default DataTableBody;
