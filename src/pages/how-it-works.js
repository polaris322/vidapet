import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import WorkProcess from "../components/workProcess/WorkProcess";
import Image from "next/image";
import Link from "next/link";

function AboutPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Cómo Funciona" pageTitle="Cómo Funciona" />
        <WorkProcess />

        <div className="container mt-120 mb-120">
          <div className="row">
            <div className="col-lg-6 my-3">
              <div className="card rounded-5 h-100 bg-main">
                <div className="card-body p-4">
                  <Image
                    width={35}
                    height={35}
                    alt=""
                    src="/assets/images/icon/breadcumb-vec.svg"
                  />
                  <h3 className="display-5 fw-bold text-dark my-3">
                    Un enfoque experto, pero personalizado
                  </h3>
                  <p>
                    Una vez que completes nuestro cuestionario, te ofreceremos
                    recomendaciones de comidas basadas en la edad, peso, raza,
                    actividad y cualquier alergia de tu perro.
                  </p>
                  <p>
                    Sabemos que tú conoces a tu mascota mejor que nadie, por lo
                    que puedes personalizar cualquier parte de tu plan en
                    cualquier momento.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-3 rounded-5">
              <Image
                className="w-100 rounded-5 border object-fit-cover"
                src="/assets/images/products/vida-227.png"
                width={600}
                height={600}
                priority
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="container mt-120 mb-120">
          <div className="row">
            <div className="col-xl-9 m-auto">
              <h3 className="mb-3">
                ¡Con estas opciones, podrás crear tazones diarios llenos de amor
                y creatividad para tu peludo! Cada comida se convertirá en un
                momento especial, haciendo que tu mascota se sienta
                verdaderamente apreciada y cuidada.
              </h3>
              <div className="row g-4 justify-content-center">
                <div className="col-sm-6">
                  <div className="rounded-5">
                    <Image
                      width={500}
                      height={500}
                      loading="lazy"
                      alt="natural"
                      className="w-100 gallery-image rounded-5"
                      src="/assets/images/products/VIDA-13.jpg"
                    />
                    <div className="text-center px-md-3">
                      <p className="h5 text-uppercase mt-4 text-dark">
                        PLAN GRAN VARIEDAD
                      </p>
                      <p>
                        Obtén todos los beneficios de la comida fresca para
                        perros con comidas porcionadas por expertos. Selecciona
                        desde nuestras 3 recetas a tu manera
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="rounded-5">
                    <Image
                      width={500}
                      height={500}
                      loading="lazy"
                      alt="meat"
                      className="w-100 gallery-image rounded-5"
                      src="/assets/images/products/VIDA-187.jpg"
                    />
                    <div className="text-center px-md-3">
                      <p className="h5 text-uppercase mt-4 text-dark">
                        PLAN COMPLETO FRESCO
                      </p>
                      <p>
                        Así como a ti te gusta disfrutar de diferentes sabores,
                        a tu mascota también le encanta la variedad en su dieta.
                        Con nuestro PLAN COMPLETO FRESCO, recibirás un delicioso
                        deshidratado, un sazonador sabroso, un spread cremoso y
                        un nutritivo caldo de hueso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12 d-flex justify-content-center ">
                  <div className="">
                    <Link legacyBehavior href="/meal-plans">
                      <a className="primary-btn6">
                        Explorar planes de comidas
                        <i className="ms-2 fa fa-arrow-alt-circle-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-120 mb-120">
          <div className="row">
            <div className="col-lg-6 my-3 rounded-5">
              <Image
                className="w-100 rounded-5 border object-fit-cover"
                src="/assets/images/products/EBC07373.jpg"
                width={600}
                height={600}
                priority
                alt=""
              />
            </div>
            <div className="col-lg-6 my-3">
              <div className="card rounded-5 h-100 bg-main">
                <div className="card-body p-4">
                  <Image
                    width={35}
                    height={35}
                    alt=""
                    src="/assets/images/icon/breadcumb-vec.svg"
                  />
                  <h3 className="display-5 fw-bold text-dark my-3">
                    Cuando llegue VIDAPET
                  </h3>
                  <p>
                    ¡Prepárate para las colas que se agitan! Guarda la comida
                    fresca en el congelador y déjala descongelar en el
                    refrigerador al menos 24 horas antes de que llegue a su
                    tazón.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-120 mb-120">
          <div className="row">
            <div className="col-lg-6 my-3">
              <div className="card rounded-5 h-100 bg-main">
                <div className="card-body p-4">
                  <Image
                    width={35}
                    height={35}
                    alt=""
                    src="/assets/images/icon/breadcumb-vec.svg"
                  />
                  <h3 className="display-5 fw-bold text-dark my-3">
                    Suscripción Sin Complicaciones
                  </h3>
                  <p>
                    ¿Quieres darle un toque nuevo a la comida de tu peludo? Con
                    nuestra suscripción sin complicaciones, puedes ajustar tu
                    horario de entrega o seleccionar recetas de acuerdo con lo
                    que funcione mejor para ti y tu perro. Si tienes más de un
                    perro en casa, ¡puedes añadir a tus compañeros peludos a tu
                    cuenta! Así, cada comida será sencilla y placentera para
                    todos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-3 rounded-5">
              <Image
                className="w-100 rounded-5 border object-fit-cover"
                src="/assets/images/products/EBC07379.jpg"
                width={600}
                height={600}
                priority
                alt=""
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AboutPage;
