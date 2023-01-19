import styles from './App.module.css';
import Card from './Components/Card/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import { useState, useEffect } from 'react';
const App = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        const categorySet = new Set();
        data.forEach(item => categorySet.add(item.category));
        setCategories([...categorySet]);
      })
  }, [])
  return (
    <div className={`${styles.app__wrapper} container`}>
      <Navbar categories={categories} />
      <div className={styles.app}>
        <Card />


      </div>
    </div>
  )
}

export default App
