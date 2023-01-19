import styles from './App.module.css';
import Card from './Components/Card/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
const App = () => {
  return (
    <div className={`${styles.app__wrapper} container`}>
      <Navbar />
      <div className={styles.app}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
