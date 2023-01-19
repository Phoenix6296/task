import styles from './Chart.module.css'


import 'bootstrap/dist/css/bootstrap.min.css';
const Chart = () => {
    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Analysis</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart
