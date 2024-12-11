import Link from "next/link";
import React from "react";
import Image from "next/image";

function Pricing() {
  return (
    <div className="home3-collection-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="row mb-60">
              <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="section-title3 m-auto text-center">
                  <h2>
                    <img
                      src="assets/images/icon/h3-sec-tt-vect-left.svg"
                      alt="left"
                    />
                    <span>Precios Flexibles, Nutrición Personalizada</span>
                    <img
                      src="assets/images/icon/h3-sec-tt-vect-right.svg"
                      alt="right"
                    />
                  </h2>
                  <p className="h5 mt-3 fw-normal">
                    *Todos los precios mostrados se basan en el precio inicial
                    del tipo de plan y el tamaño del perro.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4">
                <div className="rounded-3">
                  <Image
                    width={500}
                    height={500}
                    loading="lazy"
                    alt="natural"
                    className="w-100 gallery-image rounded-3"
                    src="/assets/images/dogs/vida-443 2.JPEG"
                  />
                  <div className="text-center px-md-3">
                    <p className="h5 text-uppercase mt-4 mb-0">
                      PARA PERROS PEQUEÑOS
                    </p>
                    <p className="mb-1">(3-20 lbs) </p>
                    <div>
                      Comida completa: <strong>$22/semana</strong>
                    </div>
                    <div>
                      Tazón mixto: <strong>$19/semana</strong>
                    </div>
                    <div>
                      Media fresca: <strong>$15/semana</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="rounded-3">
                  <Image
                    width={500}
                    height={500}
                    loading="lazy"
                    alt="meat"
                    className="w-100 gallery-image rounded-3"
                    src="/assets/images/dogs/VIDA-283.jpg"
                  />
                  <div className="text-center px-md-3">
                    <p className="h5 text-uppercase mt-4 mb-0">
                      PARA PERROS MEDIANOS
                    </p>
                    <p className="mb-1">(20 - 50 lbs) </p>
                    <div>
                      Comida completa: <strong>$55/semana</strong>
                    </div>
                    <div>
                      Tazón mixto: <strong>$45/semana</strong>
                    </div>
                    <div>
                      Media fresca: <strong>$38/semana</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="rounded-3">
                  <Image
                    width={500}
                    height={500}
                    loading="lazy"
                    alt="vegetable"
                    className="w-100 gallery-image rounded-3"
                    src="/assets/images/dogs/vida-260.jpg"
                  />
                  <div className="text-center px-md-3">
                    <p className="h5 text-uppercase mt-4 mb-0">
                      PARA PERROS GRANDES
                    </p>
                    <p className="mb-1">(50+ lbs) </p>
                    <div>
                      Comida completa: <strong>$69/semana</strong>
                    </div>
                    <div>
                      Tazón mixto: <strong>$59/semana</strong>
                    </div>
                    <div>
                      Media fresca: <strong>$41/semana</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12 d-flex justify-content-center ">
                <div className="">
                  <Link legacyBehavior href="/shop">
                    <a className="primary-btn6">
                      ver planes y precios
                      <i className="ms-2 fa fa-arrow-alt-circle-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
