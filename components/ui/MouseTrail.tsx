"use client";

import { useEffect, useState } from "react";
import ClickSpark from "./ClickSpark";

type Point = { x: number; y: number; opacity: number };

export function MouseTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Point[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 450); // mobile breakpoint
    };
    checkMobile(); // check on load

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip trail logic on mobile

    const move = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, opacity: 1 };
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [...prev.slice(-20), newPoint]);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setTrail((prev) =>
        prev
          .map((p) => ({
            ...p,
            opacity: Math.max(0, p.opacity - 0.03),
          }))
          .filter((p) => p.opacity > 0)
      );
    }, 30);

    return () => clearInterval(interval);
  }, [isMobile]);

  const trailPoints = trail.map((p) => `${p.x},${p.y}`).join(" ");
  const currentOpacity = Math.max(...trail.map((p) => p.opacity), 0.2);

  if (isMobile) return null; // Entire effect disabled on mobile

  return (
    <ClickSpark>
      {/* Rocket Cursor */}
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "30px", // responsive size
          height: "30px",
          backgroundImage: "url('/rocket-cursor.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          transform: "translate(-30%, -30%)",
          zIndex: 9999,
        }}
      />

      {/* Smooth Blurred Line Trail */}
      <svg
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        <polyline
          points={trailPoints}
          fill="none"
          stroke={`rgba(255, 255, 255, ${currentOpacity})`}
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#blur)"
        />
      </svg>
    </ClickSpark>
  );
}
// "use client";

// import { useEffect, useState } from "react";
// import ClickSpark from "./ClickSpark";
// type Point = { x: number; y: number; opacity: number };

// export function MouseTrail() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [trail, setTrail] = useState<Point[]>([]);

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       const newPoint = { x: e.clientX, y: e.clientY, opacity: 1 };
//       setPosition({ x: e.clientX, y: e.clientY });
//       setTrail((prev) => [...prev.slice(-20), newPoint]); // shorter trail
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTrail((prev) =>
//         prev
//           .map((p) => ({
//             ...p,
//             opacity: Math.max(0, p.opacity - 0.03),
//           }))
//           .filter((p) => p.opacity > 0)
//       );
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   const trailPoints = trail.map((p) => `${p.x},${p.y}`).join(" ");
//   const currentOpacity = Math.max(...trail.map((p) => p.opacity), 0.2);

//   return (
//     <>
//       {/* Rocket Cursor */}
//       <div
//         style={{
//           position: "fixed",
//           top: position.y,
//           left: position.x,
//           width: "40px",
//           height: "40px",
//           backgroundImage: "url('/rocket-cursor.png')",
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           pointerEvents: "none",
//           transform: "translate(-50%, -50%)",
//           zIndex: 9999,
//         }}
//       />

//       {/* Smooth Blurred Line Trail */}
//       <svg
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//           pointerEvents: "none",
//           zIndex: 9998,
//         }}
//       >
//         <defs>
//           <filter id="blur">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
//           </filter>
//         </defs>

//         <polyline
//           points={trailPoints}
//           fill="none"
//           stroke={`rgba(255, 255, 255, ${currentOpacity})`}
//           strokeWidth="4"
//           strokeLinejoin="round"
//           strokeLinecap="round"
//           filter="url(#blur)"
//         />
//       </svg>
//     </>
//   );
// }
