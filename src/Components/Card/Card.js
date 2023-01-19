
import styles from './Card.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DUMMY_IMAGE from '../../Assets/images.jpeg'
const Card = ({ category, title, desc }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={DUMMY_IMAGE} className="card-img-top" alt="..." />
            <h5 className={`${styles.category} card-title`}>{category}</h5>
            <div className="card-body">
                <p className="card-text"><u>Title:</u> {title.length > 50 ? title.substring(0, 50) + '...' : title}</p>
                <p className="card-text"><u>Description:</u> {desc.length > 100 ? desc.substring(0, 100) + '...' : desc}</p>
            </div>
        </div >
    )
}

export default Card