import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalPage from './ModalPage'

function App() {
  const [issShow, setIssShow] = useState(false)
  const [isOfferAccepted, setIsOfferAccepted] = useState(false)

  const handleOpenModal = () => {
    setIssShow(true)
  }

  const handleAcceptOffer = () => {
    setIsOfferAccepted(true)
    setIssShow(false)
  }

  const handleClose = () => {
    setIssShow(false)

  }

  return (
   
      <div className="show-page">
        <div className="show-offer">
          {
            !isOfferAccepted && (<button
              onClick={handleOpenModal}
              className='show-btn'>Show Offer</button>
            )
          }
          {
            isOfferAccepted && (
              <div className='offermsg'>Offer Accepted</div>
            )
          }
        </div>


        {
          issShow && <ModalPage handleAcceptOffer ={handleAcceptOffer} handleClose={handleClose}/>
        }
      </div>
  
  )
}

export default App
