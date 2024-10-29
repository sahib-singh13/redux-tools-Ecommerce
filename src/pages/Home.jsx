import React, { useState, useEffect } from 'react';
import Spinner from "../components/Spinner";
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data);
      setCurrent(Array(data.length).fill(0)); 
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const toggleCart = (id) => {
    setCurrent((prevCurrent) => {
      const updatedCurrent = [...prevCurrent];
      updatedCurrent[id] = updatedCurrent[id] === 1 ? 0 : 1;
      return updatedCurrent;
    });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        data.map((item) => (
          <Product key={item.id} {...item} current={current} toggleCart={toggleCart} />
        ))
      )}
    </>
  );
};

export default Home;
