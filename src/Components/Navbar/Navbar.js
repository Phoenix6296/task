import styles from './Navbar.module.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react';
const Navbar = ({onSave}) => {
    const [filterCategory, setFilterCategory] = useState('Categories');
    const handleCategoryChange = (category) => {
        setFilterCategory(category);
        onSave(category);
    }
    const [showCategories, setShowCategories] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                const categorySet = new Set();
                data.forEach(item => categorySet.add(item.category));
                setShowCategories([...categorySet]);
            })
    }, [])
    return (
        <nav className={styles.nav}>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{filterCategory}</button>
                <ul className="dropdown-menu">
                    {showCategories.map((category, index) => {
                        return (<li key={index}><a className="dropdown-item" href="#" onClick={() => handleCategoryChange(category)}>{category}</a></li>)
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar