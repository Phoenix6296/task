import styles from './App.module.css';
import Card from './Components/Card/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Chart from './Components/Chart/Chart';

import { useState, useEffect } from 'react';
const App = () => {
  const [filterCatergory, setFilterCategory] = useState('Categories');
  const [products, setProducts] = useState([]);

  const onSubmitHandler = (input) => {
    setFilterCategory(input);
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
  }, [filterCatergory])

  const uniqueCategories = products.reduce((acc, product) => {
    if (acc[product.category])
      acc[product.category] += 1;
    else
      acc[product.category] = 1;
    return acc;
  }, {})
  console.table(uniqueCategories);

  return (
    <div className={`${styles.app__wrapper} container`}>
      <Navbar onSave={onSubmitHandler} />
      <div className={styles.app}>
        {
          products.filter((product) => {
            if (filterCatergory === 'Categories')
              return product;
            else if (product.category === filterCatergory)
              return product;
            else return null;
          }).map((product, index) => {
            return <Card key={index} category={product.category} title={product.title} desc={product.description} />
          })
        }
      </div>
      <button type="button" className={`${styles.analyse__button} btn btn-primary`} data-bs-toggle="modal" data-bs-target="#exampleModal">Analyse</button>
      <Chart />
    </div >
  )
}

export default App
