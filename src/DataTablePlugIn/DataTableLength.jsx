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
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <label htmlFor="table-length">entries per page</label>
    </div>
  );
};

export default DataTableLength;
