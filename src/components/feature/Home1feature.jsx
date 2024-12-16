import React from "react";

function Home1feature() {
  return (
    <div className="h1-feature-area">
      <div className="container">
        <div className="row justify-content-center bg">
          <div className="col-md-12 m-auto">
            <div className="freture-title">
              <h2 className="text-start mb-45">
                Beneficios de una Dieta Fresca
              </h2>
              <div className="single-card mb-45">
                <div className="icon">
                  <img src="assets/images/icon/badge1.svg" alt="" />
                </div>
                <div className="content">
                  <h4>MEJORA EN LA DIGESTIÓN Y ENERGÍA</h4>
                  <p>
                    Más digerible que el croquete, proporcionando a tu perro más
                    nutrientes y vitalidad.
                  </p>
                </div>
              </div>
              <div className="single-card mb-45">
                <div className="icon">
                  <img src="assets/images/icon/checked1.svg" alt="" />
                </div>
                <div className="content">
                  <h4>CONTROL DE ALERGIAS Y PESO</h4>
                  <p>
                    Nuestra comida ayuda a mantener el peso ideal de tu mascota
                    y es excelente para alergias y sensibilidades.
                  </p>
                </div>
              </div>
              <div className="single-card">
                <div className="icon">
                  <img src="assets/images/icon/insured1.svg" alt="" />
                </div>
                <div className="content">
                  <h4>MÁS MOMENTOS JUNTOS</h4>
                  <p>
                    Una dieta de alimentos frescos ha demostrado ayudar a los
                    perros a vivir hasta 2.5 años más.
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
