import Link from "next/link";
import React from "react";

function WorkProcess() {
  return (
    <div className="h2-working-process mb-120 mt-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12">
            <div className="section-title2 text-center">
              <h2>PLANES DE COMIDA</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="work-process-area">
              <div className="work-process-card">
                <div className="sl-no">
                  <span>Step</span>
                  <h3>01</h3>
                </div>
                <div className="icon">
                  <img src="assets/images/icon/search2.svg" alt="" />
                </div>
                <div className="work-content text-center">
                  <h3>PRESENTANOS A TU PERRITO</h3>
                  <p>
                    Queremos conocer a tu amado compañero. Hemos simplificado
                    nuestro cuestionario para que puedas responder fácilmente y
                    dedicar más tiempo a jugar y disfrutar de momentos
                    especiales juntos.
                  </p>
                </div>
              </div>
              <div className="work-proces-arrow">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-work-proces-arrow.png"
                  alt=""
                />
              </div>
              <div className="work-process-card two">
                <div className="sl-no">
                  <span>Step</span>
                  <h3>02</h3>
                </div>
                <div className="icon">
                  <img src="assets/images/icon/appoinment2.svg" alt="" />
                </div>
                <div className="work-content text-center">
                  <h3>OBTEN TU CAJA INICIAL</h3>
                  <p>
                    Tu caja inicial está diseñada con todo el cariño. Contiene
                    dos semanas de comida cuidadosamente elaborada y las
                    herramientas necesarias para un servicio fácil. Queremos que
                    te sientas satisfecho al darle lo mejor a tu mascota.
                  </p>
                </div>
              </div>
              <div className="work-proces-arrow">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-work-proces-arrow.png"
                  alt=""
                />
              </div>
              <div className="work-process-card three">
                <div className="sl-no">
                  <span>Step</span>
                  <h3>03</h3>
                </div>
                <div className="icon">
                  <img src="assets/images/icon/relax2.svg" alt="" />
                </div>
                <div className="work-content text-center">
                  <h3>COMIDA REAL, ENTREGA REGULAR</h3>
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
        <div className="row mt-4">
          <div className="col-lg-12 d-flex justify-content-center ">
            <div className="">
              <Link legacyBehavior href="/shop">
                <a className="primary-btn6">
                  Empezar
                  <i className="ms-2 fa fa-arrow-alt-circle-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
