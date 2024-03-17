import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import DataTableInfo from "./DataTableInfo";
import DataTableLength from "./DataTableLength";
import DataTablePaginate from "./DataTablePaginate";
import DataTableFilter from "./DataTableFilter";

const DataTableWrapper = ({
  data,
  defaultDataLength,
  id,
  columns,
  customClassNames,
}) => {
  const initialPagesNumber = (data) => {
    const itemsNumber = data.length;
    const pagesNumber = Math.ceil(itemsNumber / dataLength);
    return pagesNumber;
  };

  const initialEntries = data.length;
  const [filteredData, setFilteredData] = useState(data);
  const [sortDirection, setSortDirection] = useState("none");
  const [sortCriteria, setSortCriteria] = useState(null);
  const [dataLength, setDataLength] = useState(
    defaultDataLength ? parseInt(defaultDataLength) : 10
  );
  const [pagesNumber, setPagesNumber] = useState(initialPagesNumber(data));
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setPagesNumber(Math.ceil(filteredData.length / dataLength));
  }, [dataLength, filteredData]);

  useEffect(() => {
    let newFilteredData = data.filter((item) =>
      columns.some((column) =>
        item[column.valueName]
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      )
    );

    if (sortCriteria != null && sortDirection != "none") {
      newFilteredData.sort((a, b) =>
        sortDirection === "asc"
          ? a[sortCriteria].localeCompare(b[sortCriteria])
          : b[sortCriteria].localeCompare(a[sortCriteria])
      );
    }

    setFilteredData(newFilteredData);
  }, [searchTerm, data, columns, sortCriteria, sortDirection]);

  useEffect(() => {
    if (sortCriteria != null) {
      setSortDirection("asc");
    }
  }, [sortCriteria]);

  return (
    <div className={`data-table ${customClassNames}`}>
      <DataTableFilter
        setSearchTerm={setSearchTerm}
        data={data}
        columns={columns}
      />
      <DataTable //insert here the 3 needed props
        setSortDirection={setSortDirection}
        sortDirection={sortDirection}
        setSortCriteria={setSortCriteria}
        sortCriteria={sortCriteria}
        id={id}
        data={filteredData}
        columns={columns}
        currentPage={currentPage}
        dataLength={dataLength}
      />
      <DataTableLength
        setDataLength={setDataLength}
        dataLength={dataLength}
        setCurrentPage={setCurrentPage}
      />
      <DataTableInfo
        currentPage={currentPage}
        dataLength={dataLength}
        data={filteredData}
        initialEntries={initialEntries}
      />
      <DataTablePaginate
        pagesNumber={pagesNumber}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default DataTableWrapper;
