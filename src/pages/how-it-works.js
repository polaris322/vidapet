import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import WorkProcess from "../components/workProcess/WorkProcess";
import Image from "next/image";

function AboutPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Intro" pageTitle="How It Works" />
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
                className="w-100 rounded-5 border"
                src="/assets/images/products/vida-227.png"
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
