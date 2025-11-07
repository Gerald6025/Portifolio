"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function SpinningCircle() {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    const circle = circleRef.current;
    const imageURLs = [
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1759223993/vecteezy_figma-logo-icon-figma-app-editable-transparent-background_65386871_1_1_qrnfdo.png",
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1759223890/Ubiquiti-Logo-removebg-preview_2_xsjcfg.png",
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1759224195/Visual_Studio_Code_1.35_icon.svg_dsbbdh.png",
       
   
    ];

    function placeImages(urls: string[]) {
      const angleIncrement = (Math.PI * 2) / urls.length;
      const radius = circle.offsetWidth / 2;
      const images: HTMLImageElement[] = [];

      urls.forEach((url, i) => {
        const img = new Image();
        images.push(img);
        circle.appendChild(img);
        const angle = angleIncrement * i;
        gsap.set(img, {
          attr: { src: url },
          position: "absolute",
          top: 0,
          left: 0,
          xPercent: -30,
          yPercent: -70,
          transformOrigin: "50% 50%",
          x: radius + Math.cos(angle) * radius,
          y: radius + Math.sin(angle) * radius,
        });
      });
      return images;
    }

    const images = placeImages(imageURLs);

    const spin = gsap
      .timeline({ repeat: -1, defaults: { duration: 50, ease: "none" } })
      .to(circle, { rotation: 360 })
      .to(images, { rotation: -360 }, 0);

    Draggable.create(circle, {
      type: "rotation",
      inertia: true,
      onPressInit: () => spin.pause(),
      onDrag: function () {
        const angle = (this.rotation + 360 * 100000) % 360;
        spin.progress(angle / 360);
      },
      onThrowUpdate: function () {
        const angle = (this.rotation + 360 * 100000) % 360;
        spin.progress(angle / 360);
      },
      onThrowComplete: () => {
        spin.resume();
        gsap.fromTo(
          spin,
          { timeScale: 0 },
          { duration: 1, timeScale: 1, ease: "power1.in" }
        );
      },
    });

    const handleClick = () => {
      console.log("clicking");
    };
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
      spin.kill();
    };
  }, []);

  return (
    <div className="viewport-box ">
      <div className="main-circle" ref={circleRef}></div>
      <style jsx>{`
        .viewport-box {
          width: 100%;
          min-width: 400px;
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          
        }
        .main-circle {
          width: 380px;
          height: 380px;
          border: none;
          border-radius: 50%;
          position: relative;
          margin-top: 80px;
          top: 70px;
        }
       
      `}</style>
    </div>
  );
}
