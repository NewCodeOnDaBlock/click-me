import { React, useState } from "react";
import Lottie from 'lottie-react';
import Confetti from '../lottie/Confetti 1.json'


const ModalButton = ({motion}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [buttonText, setButtonText] = useState('CLICK ME')

  const clickedButton = () => {
      setIsClicked(!isClicked)
      setButtonText('YAY YOU CLICKED ME!!')
    setTimeout(() => {
      console.log('setTimeout triggered')
      setButtonText('CLICK ME')
      setIsClicked(false)
    }, "5000")
    return clearTimeout()
  } 

  return (
    <div className='modal-button-container'>
      {
        isClicked ? 
        <Lottie animationData={Confetti} loop={false} className='confetti'/>
        :
        ''
      }
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={clickedButton}
      >
        {buttonText}
      </motion.button>
    </div>
  )
}

export default ModalButton
