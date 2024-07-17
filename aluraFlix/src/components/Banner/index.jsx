import "./Banner.css";

function Banner(params) {
  return (
    <section className="Banner">
      <div className="background-section" >

        <div className="card">
            <button className="button">FRONT END</button>
          <div className="card-body">
            <h2>Challenge React</h2>
            <p>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </p>
          </div>
        </div>

        <div className="card-footer">
              <img className="image" src="/img/bannerImg.png" alt="Player" />
          </div>
      </div>
    </section>
  );
}

export default Banner;
