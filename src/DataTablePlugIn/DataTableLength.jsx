const DataTableLength = ({ setDataLength, dataLength, setCurrentPage }) => {
  const handleSelect = (e) => {
    const selectedLength = document.querySelector(
      "select[name='table-length']"
    );
    setDataLength(selectedLength.value);
    setCurrentPage(1);
  };
  return (
    <div>
      <select
        onChange={(e) => handleSelect(e)}
        name="table-length"
        id="table-length"
        defaultValue={dataLength}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <label htmlFor="table-length">entries per page</label>
    </div>
  );
};

export default DataTableLength;
