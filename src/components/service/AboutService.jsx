import React from "react";

function AboutService() {
  return (
    <div className="h2-services-area mb-120">
      <div className="services-btm ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="services-img">
                <div className="services-img-bg">
                  <img src="assets/images/icon/h2-services-img-bg.svg" alt="" />
                </div>
                <div className="video-wraper text-center">
                  <video
                    autoPlay
                    loop="loop"
                    muted
                    preload="auto"
                    width={350}
                    className="rounded-5"
                  >
                    <source src="/assets/video/about.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* <img
                  className="img-fluid"
                  src="assets/images/bg/h2-services-img.png"
                  alt=""
                /> */}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="services-content">
                <img
                  alt="image"
                  className="img-fluid"
                  width={150}
                  src="assets/logo/ANIMADO/logo-animated.gif"
                />
                <h2>El amor es nutritivo.</h2>
                <p>
                  En VIDAPET, entendemos que nuestros perros son más que simples
                  mascotas; son compañeros leales, guardianes apasionados y
                  miembros invaluables de nuestras familias. Cada uno de ellos
                  es único, con su propia personalidad y necesidades especiales.
                  Esta conexión especial nos inspira y motiva a ofrecer lo mejor
                  para ellos.
                </p>
                <p>
                  Nuestra misión es hacer que cada momento compartido con tu
                  perro sea aún más especial, proporcionando productos de alta
                  calidad que reflejen nuestra dedicación y amor. Creemos que el
                  amor es nutritivo, y que una buena alimentación es la base
                  para la salud, la felicidad y la longevidad de nuestros amigos
                  de cuatro patas.
                </p>
                <p>
                  Trabajamos incansablemente con el propósito de ofrecer a las
                  mascotas productos naturales y personalizados, elaborados con
                  ingredientes de la mejor calidad. Nuestros alimentos son el
                  resultado de un profundo compromiso con la excelencia y la
                  transparencia, enriquecidos con conocimientos de autoridades
                  en salud animal. Así, garantizamos que cada bocado sea no solo
                  delicioso, sino también esencial para su bienestar.
                </p>
                <p>
                  En VIDAPET, cada receta que creamos está diseñada para
                  resaltar lo mejor de tu perro. Incorporamos cuidadosamente
                  proteínas de calidad, frutas frescas, verduras coloridas y
                  granos selectos para asegurar una nutrición completa y
                  equilibrada. Nuestro objetivo es que al servir estas comidas,
                  te sientas tan satisfecho como tu mascota al disfrutar de una
                  experiencia gastronómica rica y nutritiva.
                </p>
                <p>
                  Vemos a cada perro como un individuo merecedor de amor y
                  atención. Nuestra visión es liderar con elegancia y
                  sofisticación, creando un entorno en el que cada perro y su
                  dueño puedan disfrutar del más alto estándar de cuidado y
                  confort. Cada interacción, cada producto y cada detalle de
                  nuestra marca refleja nuestro compromiso con el amor
                  incondicional que sentimos por ellos.
                </p>
                <p>
                  En VIDAPET, no solo alimentamos a las mascotas, sino que
                  celebramos la hermosa relación que compartimos con ellas. Te
                  invitamos a formar parte de esta experiencia excepcional y a
                  unirte a nosotros en este viaje hacia un bienestar integral,
                  donde los momentos junto a tus seres queridos se convierten en
                  recuerdos inolvidables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutService;
