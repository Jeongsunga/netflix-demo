import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert, Col, Row, Container, Spinner } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";

// 경로
// 1. nav바에서 클릭해서 온 경우 -> popularMovie 보여주기
// 2. keyword를 입력해서 온 경우 -> keyword와 관련된 영화들을 보여주기

// 페이지네이션
// 1. page의 state 만들기
// 2. 페이지네이션 클릭할 때마다 page 바꿔주기
// 3. page 값이 바뀔 때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

  const handlePageClick = ({ selected }) => {
    const nextPage = selected + 1;
    if (nextPage <= 500) {
      setPage(nextPage);
    } else {
      alert("최대 500페이지까지만 조회할 수 있습니다.");
    }
  };

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  if (!data || data.results?.length === 0) {
    return <div style={{textAlign: 'center'}}>검색 결과가 없습니다.</div>;
  }

  return (
    <Container>
      <Row>
        <Col lg={3} xs={12}></Col>
        <Col lg={9} xs={12}>
          <Row className="justify-content-center">
            {data?.results.map((movie, index) => (
              <Col key={index} lg={3} md={4} sm={6} xs={7}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-center mt-5 pagination-wrapper">
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={Math.min(data?.total_pages ?? 0, 500)}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}  // 현재 페이지
          />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
