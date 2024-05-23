import React from "react";
import styled from "styled-components";

const PageComponent = styled.div`
  .page {
    display: flex;
    justify-content: center;
  }
  button {
    border: none;
    background-color: transparent; 
    width: 40px;
    height: 40px;
    font-size: 30px;
  }
`;

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);    // 총 페이지 수

  return (
    <PageComponent>
      <div className="page">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}> 
          &lt;
        </button> 
        {/* {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              value={i + 1}
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : undefined}
            >
              {i + 1}
            </button>
          ))} */}
          {Array(numPages)
            .fill()
            .map((_, i) => {
              const pageNumber = i + 1;
              const isCurrentPage = pageNumber === page;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  aria-current={isCurrentPage ? "page" : undefined}
                  style={{ display: isCurrentPage ? "block" : "none" }} // 현재 페이지인 경우에만 보이게 함
                >
                  {pageNumber}
                </button>
              );
            })}

          <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
          </button>
      </div>
    </PageComponent>
  );
}

export default Pagination;