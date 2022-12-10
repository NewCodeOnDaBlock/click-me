import React from 'react'

const Button = ({isModalOpen, setIsModalOpen, motion}) => {

  const showModal = () => {
    setIsModalOpen(!isModalOpen)
  }


  return (
    <div className='button'>
      <motion.button   
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          initial={{ x: "100%" }}
          animate={{ x: "0" }}
          onClick={showModal}
      >CLICK HERE</motion.button>
    </div>
  )
}

export default Button
