import { useState, useMemo } from "react";

function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const setPage = (pageNumber) => {
    if (pageNumber < 1) {
      setCurrentPage(1);
    } else if (pageNumber > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);

  const startIndex = useMemo(() => {
    return (currentPage - 1) * itemsPerPage;
  }, [currentPage, itemsPerPage]);

  const endIndex = useMemo(() => {
    return Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
  }, [startIndex, itemsPerPage, totalItems]);

  const itemsOnCurrentPage =
    totalItems === 0 ? 0 : endIndex - startIndex + 1;

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage: currentPage < totalPages,
    canPrevPage: currentPage > 1,
  };
}

export default usePagination;
