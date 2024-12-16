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
      <div className="hero3">
        <div className="swiper hero3-slider w-100">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-wrapper">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="banner-content py-3">
                      <h6 className="mt-3">El amor es nutritivo</h6>
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
                  <div className="col-xl-6 d-flex justify-content-end video-container">
                    <video
                      autoPlay
                      loop="loop"
                      muted
                      preload="auto"
                      className=""
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
