const DataTableHead = ({
  columns,
  setSortDirection,
  sortDirection,
  setSortCriteria,
  sortCriteria,
}) => {
  const handleSort = (e, criteria) => {
    setSortCriteria(criteria);
    let newSortDirection = "";
    switch (sortDirection) {
      case "none":
        newSortDirection = "asc";
        break;
      case "asc":
        newSortDirection = "desc";
        break;
      case "desc":
        newSortDirection = "none";
        break;
      default:
        newSortDirection = "none";
    }
    setSortDirection(newSortDirection);
  };
  // a simple map to render a row with all the titles needed
  const titleCells = columns.map((column, index) => {
    return (
      <th
        key={index}
        onClick={(e) => handleSort(e, column.valueName)}
        data-sort={sortCriteria === column.valueName ? sortDirection : "none"}
      >
        <span>{column.title}</span>
        <span>↓</span>
        <span>↑</span>
      </th>
    );
  });

  return <tr>{titleCells}</tr>;
};

export default DataTableHead;
