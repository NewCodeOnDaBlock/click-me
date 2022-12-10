import React from 'react'
import nft from '../assets/1.png'
import {motion} from 'framer-motion';

const NFT = () => {

  return (
    <div className='nft'>
      <motion.img
        src={nft} alt='pic'
        className='nft'
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        whileHover={{ scale: 1.1 }}
      />
    </div>
  )
}

export default NFT
