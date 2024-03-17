import { useEffect, useState } from "react";

const DataTableInfo = ({ currentPage, dataLength, data, initialEntries }) => {
  const startIndex = currentPage * dataLength - dataLength + 1;
  let endIndex = parseInt(startIndex) + parseInt(dataLength) - 1;
  endIndex = endIndex > data.length ? data.length : endIndex;

  const [displayText, setDisplayText] = useState(
    `Showing ${startIndex} to ${endIndex} of ${data.length} entries.`
  );

  useEffect(() => {
    const startIndex = currentPage * dataLength - dataLength + 1;
    let endIndex = parseInt(startIndex) + parseInt(dataLength) - 1;
    endIndex = endIndex > data.length ? data.length : endIndex;
    const complement =
      data.length < initialEntries
        ? ` (filtered from ${initialEntries} total entries)`
        : "";
    setDisplayText(
      `Showing ${startIndex} to ${endIndex} of ${data.length} entries${complement}.`
    );
  }, [data, currentPage]);

  return <p>{displayText}</p>;
};

export default DataTableInfo;
