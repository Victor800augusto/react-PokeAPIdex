import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import "./pagination.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={() => {
          onPrevious();
          scrollTop();
        }}
      >
        {/* <div className="arrow left" /> */}
        <MdArrowBackIosNew className="arrow" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => {
              onPageChange(pageNumber);
              scrollTop();
            }}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={() => {
          onNext();
          scrollTop();
        }}
      >
        {/* <div className="arrow right" /> */}
        <MdArrowForwardIos className="arrow" />
      </li>
    </ul>
  );
};

export default Pagination;
