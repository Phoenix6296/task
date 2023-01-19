import styles from './Navbar.module.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
const Navbar = ({ categories }) => {
    return (
        <nav className={styles.nav}>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
                <ul className="dropdown-menu">
                    {categories.map((category, index) => {
                        return <li key={index}><a className="dropdown-item" href="#">{category}</a></li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar