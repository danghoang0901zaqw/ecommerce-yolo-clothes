import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const HeroSlider = ({ data, control, auto }) => {
  const [idxSlider, setIdxSlider] = useState(0);
  const handleNextSlide = useCallback(() => {
    const index = idxSlider >= data.length - 1 ? 0 : idxSlider + 1;
    setIdxSlider(index);
  }, [idxSlider,data]);

  const handlePrevSlide = () => {
    const index = idxSlider === 0 ? data.length - 1 : idxSlider - 1;
    setIdxSlider(index);
  };

  useEffect(() => {
    if (auto) {
      const timerId = setInterval(() => {
        const index = idxSlider >= data.length - 1 ? 0 : idxSlider + 1;
        setIdxSlider(index);
      }, 3000);
      return () => {
        clearInterval(timerId);
      };
    }
  }, [idxSlider,data,auto ]);
  return (
    <div className="hero-slider">
      {data?.map((item, index) => (
        <div
          key={index}
          className={`hero-slider__item ${idxSlider === index ? "active" : ""}`}
        >
          <div className="hero-slider__item__info">
            <div className="hero-slider__item__info__title">
              <span className={`color-${item.color}`}>{item.title}</span>
            </div>
            <div className="hero-slider__item__info__desc">
              <span>{item.description}</span>
            </div>
            <div className="hero-slider__item__info__btn">
              <Link to={item.path}>
                <Button
                  backgroundColor={item.color}
                  icon={"bx bx-cart"}
                  animate={true}
                >
                  Xem chi tiết
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero-slider__item__image">
            <div className={`shape  bg-${item.color}`}></div>
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
      {control ? (
        <div className="hero-slider__control">
          <div className="hero-slider__control__item" onClick={handlePrevSlide}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="hero-slider__control__item">
            <div className="index">
              {idxSlider + 1}/{data.length}
            </div>
          </div>
          <div className="hero-slider__control__item" onClick={handleNextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeroSlider;
