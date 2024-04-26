import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Pagenation({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : null}>
          <button
            className=" w-[48px] h-[48px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center rounded-[8px]"
            style={{ boxShadow: "5px 5px 10px  0px #c2c2c280" }}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };
  return (
    <div>
      {" "}
      <nav>
        <ul className="pagination flex gap-[8px]">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className=" w-[48px] h-[48px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center rounded-[8px]"
              style={{ boxShadow: "5px 5px 10px  0px #c2c2c280" }}
            >
              <IoIosArrowBack />
            </button>
          </li>
          {renderPageNumbers()}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              style={{ boxShadow: "5px 5px 10px  0px #c2c2c280" }}
              className=" w-[48px] h-[48px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center rounded-[8px]"
              disabled={currentPage === totalPages}
            >
              <IoIosArrowForward />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
