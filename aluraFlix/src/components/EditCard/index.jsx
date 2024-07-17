import React, { useContext, useState, useEffect } from "react";
import "./EditCard.css";
import { GlobalContext } from "../../context/GlobalContext";

function EditCard() {
  const { cardId, setCardId, videos } = useContext(GlobalContext);

  // Assuming we are editing the first video for simplicity
  const initialVideoData = videos[cardId -1] || {
    titulo: "",
    categoria: "backend",
    imagen: "",
    video: "",
    descripcion: "",
  };

  const cleanData = {
    titulo: "",
    categoria: "backend",
    imagen: "",
    video: "",
    descripcion: "",
  };

  const [formData, setFormData] = useState(initialVideoData);

  useEffect(() => {
    console.log('Initial Video Data:', cardId); // Debugging line
    setFormData(initialVideoData);
  }, [videos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClean = () => {
    setFormData(cleanData);
  };

  if (cardId == null) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => setCardId(null)}>
          <img className="close" src="/img/iconClose.png" alt="Close Modal" />
        </button>
        <h2>EDITAR CARD:</h2>
        <form>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Ingrese un titulo..."
          />

          <label htmlFor="category">Categoria</label>
          <select
            id="category"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          >
            <option value="frontend">FRONT END</option>
            <option value="backend">BACK END</option>
            <option value="innovacion">INNOVACIÓN Y GESTIÓN</option>
          </select>

          <label htmlFor="image">Imagen</label>
          <input
            type="url"
            id="image"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            placeholder="Ingrese la URL de la imagen..."
          />

          <label htmlFor="video">Video</label>
          <input
            type="url"
            id="video"
            name="video"
            value={formData.video}
            onChange={handleChange}
            placeholder="Ingrese la URL del video..."
          />

          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Añada una descripcion, esto ayuda a filtrar mejor."
          ></textarea>

          <div className="modal-buttons">
            <button className="guardar" type="submit">
              GUARDAR
            </button>
            <button className="limpiar" type="button" onClick={handleClean}>
              LIMPIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCard;
