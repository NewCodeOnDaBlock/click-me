import Button from './components/Button';
import Modal from './components/Modal';
import './styles/app.scss'
import { React, useState } from "react";
import {motion} from 'framer-motion';


function App() {
const [isModalOpen, setIsModalOpen] = useState(false);

const closeModalFromBg = () => {
  setIsModalOpen(!isModalOpen)
}

  return (
    <div className="app">
      <div 
        className={`modal-background ${isModalOpen? 'active-modal-background' : ''}`} 
        onClick={closeModalFromBg}
      >
      </div>
      <Button 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen}
        motion={motion}
      />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        motion={motion}
      />
    </div>
  );
}

export default App;
