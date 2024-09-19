import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BurgerItem from "../components/BurgerItem";

import { fetchBurgers } from "../store/slices/burgerSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";

export default function MenuPage() {
  const { burgers, status, error } = useSelector((state) => state.burgers);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(burgers?.length / itemsPerPage);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBurgers());
  }, [dispatch]);
  

  return (
    <Container>
      <Row xs={1} md={2}>
        {status === "loading" && <h3>Burgers are loading</h3>}
        {error && <h3>An error occured : {error}</h3>}
        {burgers?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((burger) => (
            <BurgerItem key={burger.id} burger={burger} />
          ))}
      </Row>
      {burgers && totalPages > 1 && (
        <Pagination className="justify-content-center mt-5">
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index}
              onClick={() => handlePageChange(index + 1)}
              active={index + 1 === currentPage}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} />
        </Pagination>
      )}
    </Container>
  );
}
