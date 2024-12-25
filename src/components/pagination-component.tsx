import React, { useState } from "react";
import { Button } from "./button";

export const Pagination = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
  handlePageChange,
}: any) => {
  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page change

  return (
    <div className=" flex items-center space-x-4 mt-5">
      {pageNumbers.map((page) => (
        <Button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={currentPage === page}
          className="w-fit h-4 p-4 rounded-md"
        >
          {page}
        </Button>
      ))}
    </div>
  );
};
