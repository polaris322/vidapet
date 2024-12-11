import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
function FeatureCounter() {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("my-element");
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight && elementBottom >= 0) {
        setStartCounting(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startCounting]);
  return (
    <div className="h1-feature-counter mb-120">
      <div className="container-md container-fluid">
        <div className="row justify-content-center g-md-4 gy-5">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="counter-single client">
              <div className="counter-icon">
                <img src="assets/images/icon/client.svg " alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    <div id="my-element">
                      {startCounting ? (
                        <CountUp start={0} end={90} duration={3} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </h3>
                  <span>%</span>
                </div>
                <p className="text-capitalize">MEJOR CALIDAD DE HECES</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="counter-single animals">
              <div className="counter-icon">
                <img src="assets/images/icon/animals.svg" alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-12">
                  <h3 className="odometer">
                    <div id="my-element">
                      {startCounting ? (
                        <CountUp start={0} end={92} duration={3} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </h3>
                  <span>%</span>
                </div>
                <p className="text-capitalize">FELICIDAD EN LA HORA DE COMER</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="counter-single walked">
              <div className="counter-icon">
                <img src="assets/images/icon/walked.svg " alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    <div id="my-element">1 ~ 2 meses</div>
                  </h3>
                </div>
                <p className="text-capitalize">PESO SALUDABLE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCounter;
