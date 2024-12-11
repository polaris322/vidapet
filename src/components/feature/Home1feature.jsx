import React from "react";

function Home1feature() {
  return (
    <div className="h1-feature-area">
      <div className="container">
        <div className="row justify-content-center bg">
          <div className="col-md-10 m-auto">
            <div className="freture-title">
              <h2 className="text-start mb-45">PLANES DE COMIDA</h2>
              <div className="single-card mb-45">
                <div className="icon">
                  <img src="assets/images/icon/badge1.svg" alt="" />
                </div>
                <div className="content">
                  <h4>PRESENTANOS A TU PERRITO</h4>
                  <p>
                    Queremos conocer a tu amado compañero. Hemos simplificado
                    nuestro cuestionario para que puedas responder fácilmente y
                    dedicar más tiempo a jugar y disfrutar de momentos
                    especiales juntos.
                  </p>
                </div>
              </div>
              <div className="single-card mb-45">
                <div className="icon">
                  <img src="assets/images/icon/checked1.svg" alt="" />
                </div>
                <div className="content">
                  <h4>OBTEN TU CAJA INICIAL</h4>
                  <p>
                    Tu caja inicial está diseñada con todo el cariño. Contiene
                    dos semanas de comida cuidadosamente elaborada y las
                    herramientas necesarias para un servicio fácil. Queremos que
                    te sientas satisfecho al darle lo mejor a tu mascota.
                  </p>
                </div>
              </div>
              <div className="single-card">
                <div className="icon">
                  <img src="assets/images/icon/insured1.svg" alt="" />
                </div>
                <div className="content">
                  <h4>COMIDA REAL, ENTREGA REGULAR</h4>
                  <p>
                    Olvídate de los viajes de última hora a la tienda de
                    mascotas. En VIDAPET, traemos las comidas nutritivas de tu
                    perro directamente a tu puerta, en el momento que tú lo
                    desees. Porque tu tiempo junto a tu perro es invaluable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1feature;
