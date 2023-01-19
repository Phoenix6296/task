import styles from './App.module.css';
import Card from './Components/Card/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import { useState, useEffect } from 'react';
const App = () => {
  const [filterCatergory, setFilterCategory] = useState('Categories');
  const [products, setProducts] = useState([]);

  const onSubmitHandler = (input) => {
    setFilterCategory(input);
    console.log(input, "App.js");
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
  }, [filterCatergory])


  return (
    <div className={`${styles.app__wrapper} container`}>
      <Navbar onSave={onSubmitHandler} />
      <div className={styles.app}>
        {
          products.filter((product) => {
            if (filterCatergory === 'Categories') {
              return product;
            } else if (product.category === filterCatergory) {
              return product;
            }
          }).map((product, index) => {
            return <Card key={index} category={product.category} title={product.title} desc={product.description} />
          })
        }
      </div>
    </div>
  )
}

export default App
