const DataTablePaginate = ({ pagesNumber, setCurrentPage, currentPage }) => {
  let pagesButtons = [];
  pagesButtons.push(
    <button
      key="first"
      onClick={(e) => setCurrentPage(1)}
      className="other"
      type="button"
    >
      {"<<"}
    </button>
  );
  if (currentPage > 1) {
    pagesButtons.push(
      <button
        key="previous"
        onClick={(e) => setCurrentPage(currentPage - 1)}
        className="other"
        type="button"
      >
        {"<"}
      </button>
    );
  }
  for (let i = 1; i <= pagesNumber; i++) {
    pagesButtons.push(
      <button
        key={i}
        onClick={(e) => setCurrentPage(i)}
        className={i === currentPage ? "current" : "other"}
        type="button"
      >
        {i}
      </button>
    );
  }
  if (currentPage < pagesNumber) {
    pagesButtons.push(
      <button
        key="next"
        onClick={(e) => setCurrentPage(currentPage + 1)}
        className="other"
        type="button"
      >
        {">"}
      </button>
    );
  }
  pagesButtons.push(
    <button
      key="last"
      onClick={(e) => setCurrentPage(pagesNumber)}
      className="other"
      type="button"
    >
      {">>"}
    </button>
  );
  return <div>{pagesButtons}</div>;
};

export default DataTablePaginate;
