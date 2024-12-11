import Link from "next/link";
import React from "react";
import Image from "next/image";

function Home3Collection() {
  return (
    <div className="home3-collection-area mb-120 pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="row mb-60">
              <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="section-title3 m-auto text-center">
                  <h2>
                    <img
                      src="assets/images/icon/h3-sec-tt-vect-left.svg"
                      alt="left"
                    />
                    <span>Ingredientes 100% de Grado Humano</span>
                    <img
                      src="assets/images/icon/h3-sec-tt-vect-right.svg"
                      alt="right"
                    />
                  </h2>
                  <p className="h5 mt-3 fw-normal">
                    Nuestra comida, cuidadosamente seleccionada, aporta
                    vitaminas y minerales que son tan deliciosos como esenciales
                    para la salud de tu perro.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="rounded-3">
                  <Image
                    width={500}
                    height={500}
                    loading="lazy"
                    alt="natural"
                    className="w-100 gallery-image rounded-3"
                    src="/assets/images/products/VIDA-13.jpg"
                  />
                  <div className="text-center px-md-3">
                    <p className="h5 text-uppercase mt-4">
                      INGREDIENTES NATURALES
                    </p>
                    <p>
                      Carne, frutas, verduras y granos de calidad, aptos para el
                      consumo humano.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="rounded-3">
                  <Image
                    width={500}
                    height={500}
                    loading="lazy"
                    alt="meat"
                    className="w-100 gallery-image rounded-3"
                    src="/assets/images/products/VIDA-14.jpg"
                  />
                  <div className="text-center px-md-3">
                    <p className="h5 text-uppercase mt-4">
                      Carnes de Alta Calidad
                    </p>
                    <p>
                      La carne es el primer ingrediente en nuestros alimentos.
                      Sin sabores artificiales, subproductos o rellenos dañinos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="rounded-3">
                  <Image
                    width={500}
                    height={500}
                    loading="lazy"
                    alt="vegetable"
                    className="w-100 gallery-image rounded-3"
                    src="/assets/images/products/VIDA-122.jpg"
                  />
                  <div className="text-center px-md-3">
                    <p className="h5 text-uppercase mt-4">
                      Formulado por Veterinarios
                    </p>
                    <p>
                      Diseñado para todas las etapas de la vida con una
                      nutrición equilibrada y basada en la ciencia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="rounded-3">
                  <Image
                    width={500}
                    height={500}
                    alt="kitchen"
                    loading="lazy"
                    className="w-100 gallery-image rounded-3"
                    src="/assets/images/products/VIDA-51.jpg"
                  />
                  <div className="text-center px-md-3">
                    <p className="h5 text-uppercase mt-4">
                      Cocinado en Cocinas Colombianas
                    </p>
                    <p>
                      Con ingredientes cuidadosamente seleccionados de nuestros
                      agricultores y productores de confianza en el país.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
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
      </div>
    </div>
  );
}

export default Home3Collection;
