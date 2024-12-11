import Link from "next/link";
import React, { useMemo } from "react";
import Marquee from "react-fast-marquee";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Banner3() {
  return (
    <>
      <div className="hero3 mb-90">
        <div className="background-text">
          <Marquee pauseOnHover={true} gradient={false} speed={60}>
            <h2 className="marquee_text">
              <img src="assets/images/icon/marque-foot.svg" alt="image" />
              <span>Get exciting Discount</span> Up To 40%
              <img src="assets/images/icon/marque-foot.svg" alt="image" />
              <span>On Your first buying</span> Up To 50%
              <img src="assets/images/icon/marque-foot.svg" alt="image" />
              <span>Get exciting Discount</span> Up To 30%
            </h2>
          </Marquee>
        </div>
        <div className="swiper hero3-slider w-100">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-wrapper">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h6>El amor es nutritivo</h6>
                      <h1>Sirve la Comida Adecuada a tu Peludo</h1>
                      <div className="btn-group">
                        <Link legacyBehavior href="/shop-details">
                          <a className="primary-btn6">
                            Eleva la Cena de Tu Perro a otro nivel
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end">
                    <video
                      autoPlay
                      loop="loop"
                      muted
                      preload="auto"
                      width="100%"
                    >
                      <source
                        src="assets/video/video-02.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner3;
