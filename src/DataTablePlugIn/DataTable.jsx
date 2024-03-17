import DataTableHead from "./DataTableHead";
import DataTableBody from "./DataTableBody";

const DataTable = ({
  id,
  data,
  columns,
  setSortCriteria,
  setSortDirection,
  sortDirection,
  className,
  currentPage,
  dataLength,
  sortCriteria,
}) => {
  //Constructor for the titles row - 1 only row
  const titles = (
    <DataTableHead
      columns={columns}
      data={data}
      setSortDirection={setSortDirection}
      sortDirection={sortDirection}
      setSortCriteria={setSortCriteria}
      sortCriteria={sortCriteria}
      id={id}
    />
  );

  const values = (
    <DataTableBody
      data={data}
      columns={columns}
      currentPage={currentPage}
      dataLength={dataLength}
    />
  );

  //Constructor for the items rows - as much rows as items in "data"
  // const values = currentData.map((item, index) => {
  //   return <DataTableBody key={index} item={item} columns={columns} />;
  // });

  return (
    <>
      <table id={id} className={className}>
        <thead>{titles}</thead>
        <tbody>{values}</tbody>
      </table>
    </>
  );
};

export default DataTable;
