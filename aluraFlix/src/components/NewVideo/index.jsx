import "./NewVideo.css";

function NewVideo() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const imageValue = event.target.image.value;
    return console.log("Done");
  };

  return (
    <section className="wrapper">
      <div className="form-container">
        <h1>NUEVO VIDEO</h1>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
        <form onSubmit={handleSubmit}>
          <h2>Crear Tarjeta</h2>
          <div className="input-row">
            <div className="input-container">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="ingrese el título"
              />
            </div>
            <div className="input-container">
              <label htmlFor="category">Categoría</label>
              <select id="category" name="category">
                <option value="frontend">FRONT END</option>
                <option value="backend">BACK END</option>
                <option value="innovacion">INNOVACIÓN Y GESTIÓN</option>
              </select>
            </div>
          </div>

          <div className="input-row">
            <div className="input-container">
              <label htmlFor="image">Imagen</label>
              <input
                type="url"
                id="image"
                name="image"
                placeholder="ingrese el enlace de la imagen"
              />
            </div>
            <div className="input-container">
              <label htmlFor="video">Video</label>
              <input
                type="url"
                id="video"
                name="video"
                placeholder="ingrese el enlace del video"
              />
            </div>
          </div>

          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            placeholder="¿de qué se trata este video?"
          ></textarea>
          <div className="modal-buttons">
            <button className="guardar" type="submit">
              GUARDAR
            </button>
            <button
              className="limpiar"
              type="button"
              onClick={() => console.log("Limpiar")}
            >
              LIMPIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewVideo;
