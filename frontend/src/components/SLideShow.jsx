import { useState, useEffect } from "react";
import "./Slideshow.css";

import Vinhomes1 from "../assets/images/Vinhomes-1.png";
import Vinhomes2 from "../assets/images/Vinhomes-2.png";
import Vinhomes3 from "../assets/images/Vinhomes-3.png";

const images = [Vinhomes1, Vinhomes2, Vinhomes3];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slideshow-container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className={`slide ${index === current ? "active" : ""}`}
          />
        ))}
      </div>
      <div className = "information">
        <p>Nền tảng quản lí dân cư cao cấp, đã hoạt động trên hơn 11 tỉnh thành</p>
        <button className = "moreInfor"> Tìm hiểu thêm về chúng tôi</button>
      </div>
    </>
  );
}

export default Slideshow;
