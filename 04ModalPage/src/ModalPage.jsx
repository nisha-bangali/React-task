import React from 'react'
import './App.css'

function ModalPage({ handleClose, handleAcceptOffer }) {

    return (
        <div className="offer-modal">
            <div className="modal-content">
                <button onClick={handleClose} className='close-btn'>X</button>
                <p>Click the Accept Offer button and Accept the offer</p>
                <button onClick={handleAcceptOffer} className='offer-btn'>Accept Offer</button>
            </div>
         </div>
    )
}

export default ModalPage
