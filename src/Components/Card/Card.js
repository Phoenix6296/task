import styles from './Card.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DUMMY_IMAGE from '../../Assets/images.jpeg'
import { useState } from 'react';
const Card = ({ category, title, desc }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={DUMMY_IMAGE} className="card-img-top" alt="..." />
            <h5 className={`${styles.category} card-title`}>{category}</h5>
            <div className="card-body">
                <p className="card-text"><u>Title:</u> {title}</p>
                <p className="card-text">
                    <u>Description:</u> {desc.length > 150 && !showMore ? desc.substring(0, 150) + '...' : desc}
                </p>
                {desc.length > 150 &&
                    <button className="btn btn-primary" onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'Show Less' : 'Read More'}
                    </button>
                }
            </div>
        </div >
    )
}

export default Card