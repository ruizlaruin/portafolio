import React, { useContext } from 'react';
import './Card.css';
import EditCard from '../EditCard';
import { GlobalContext } from '../../context/GlobalContext';

function Card() {

  const {videos, setCardId} = useContext(GlobalContext);

  const onDelete = ()=>{
    console.log("Deleting")
  }

  if (!videos) {
    return null;
  }

  return (
    <>
      {videos.map(video => (
        <div className="container" key={video.id}>
          <div className='image-container'>
            <img src={video.imagen} alt={video.titulo} className="imagen" />
          </div>
          <div className="buttons-container">
            <button className="action" onClick={() => onDelete(video.id)}>
              <img src="/img/iconDelete.png" alt="delete icon" className="icon" />
              <p>BORRAR</p>
            </button>
            <button className="action" onClick={() => setCardId(video.id)}>
              <img src="/img/iconEdit.png" alt="edit icon" className="icon" />
              <p>EDITAR</p>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
