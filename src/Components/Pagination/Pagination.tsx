import React, { FC, useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { Button } from "react-bootstrap";

// not fully functional for now
const Pagination: FC = () => {
  const { instrumentType } = useContext(Context);

  // total number of items
  const [itemCount, setItemCount] = useState<number>(0);

  // items to be loaded per page
  const [itemsPerPage, setItemsPerPage] = useState<number>(0);

  // total number of pages
  const [pageCount, setPageCount] = useState<number | null>(null);

  // array of page numbers
  const [totalPage, setTotalPage] = useState<any>([]);

  // sets current page number upon click
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setItemCount(instrumentType.length);
    setItemsPerPage(48);
    setPageCount(Math.round(itemCount / itemsPerPage));

    // populating total page array
    if (pageCount && totalPage < pageCount) {
      for (let number = 1; number <= pageCount; number++) {
        setTotalPage((prev: number[]) => [...prev, number]);
      }
    }
  }, [instrumentType.length, pageCount, itemCount, itemsPerPage, totalPage]);

  // marking the current page
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <nav className="m-5">
      <ul className="pagination flex-wrap">
        {totalPage.map((page: number, i: number) => (
          <li
            key={page + i}
            className={`m-1 ${
              page === currentPage ? "page-item active" : "page-item"
            }`}
          >
            <Button
              onClick={() => onPageChange(page)}
              variant="outline-primary"
              className="page-link"
            >
              {page}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
