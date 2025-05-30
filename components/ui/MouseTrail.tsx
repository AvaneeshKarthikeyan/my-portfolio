// dotted trail

// "use client";

// import { useEffect, useState } from "react";

// export function MouseTrail() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [trail, setTrail] = useState<
//     { x: number; y: number; opacity: number }[]
//   >([]);

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });

//       setTrail((prev) => [
//         ...prev.slice(-30), // Limit trail length (20 points max)
//         { x: e.clientX, y: e.clientY, opacity: 1 },
//       ]);
//     };

//     window.addEventListener("mousemove", move);

//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   // Fade the trail
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTrail(
//         (prev) =>
//           prev
//             .map((point) => ({
//               ...point,
//               opacity: Math.max(0, point.opacity - 0.05),
//             }))
//             .filter((point) => point.opacity > 0) // Remove fully faded points
//       );
//     }, 50); // Every 50ms

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* Rocket cursor */}
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

//       {/* Trail */}
//       {trail.map((point, index) => (
//         <div
//           key={index}
//           style={{
//             position: "fixed",
//             top: point.y,
//             left: point.x,
//             width: "8px",
//             height: "8px",
//             backgroundColor: `rgba(255, 255, 255, ${point.opacity})`,
//             borderRadius: "50%",
//             pointerEvents: "none",
//             transform: "translate(-50%, -50%)",
//             zIndex: 9998,
//             filter: "blur(4px)",
//           }}
//         />
//       ))}
//     </>
//   );
// }














"use client";

import { useEffect, useState } from "react";

type Point = { x: number; y: number; opacity: number };

export function MouseTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Point[]>([]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, opacity: 1 };
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [...prev.slice(-20), newPoint]); // shorter trail
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
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
  }, []);

  const trailPoints = trail.map((p) => `${p.x},${p.y}`).join(" ");
  const currentOpacity = Math.max(...trail.map((p) => p.opacity), 0.2);

  return (
    <>
      {/* Rocket Cursor */}
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "40px",
          height: "40px",
          backgroundImage: "url('/rocket-cursor.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
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
    </>
  );
}
