import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import NFT from './NFT'
import ModalBody from './ModalBody'
import ModalButton from './ModalButton'


const Modal = ({isModalOpen, setIsModalOpen, motion}) => {

  const closeModal = () => {
    if(isModalOpen) {
      setIsModalOpen(!isModalOpen)
    }
  }

  return (
    <div className={`modal ${isModalOpen ? 'active-modal' : ''}`}>
          <FontAwesomeIcon icon={faX} className='close-x' onClick={closeModal}/>
          <NFT />
          <ModalBody />
          <ModalButton motion={motion}/>
    </div>
  )
}

export default Modal
