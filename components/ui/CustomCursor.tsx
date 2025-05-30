// "use client";
// import { useEffect, useState } from "react";
// // import Rocket from "../../public/rocket-cursor.png"; // Import the image directly

// export function CustomCursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         left: pos.x,
//         top: pos.y,
//         transform: "translate(-50%, -50%)",
//         width: "24px",
//         height: "24px",
//         backgroundImage: `url('../../public/rocket-cursor.png)`, // Correct backgroundImage usage
//         backgroundSize: "contain",
//         pointerEvents: "none",
//         zIndex: 9999,
//       }}
//     />
//   );
// }
