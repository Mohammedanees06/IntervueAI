// // src/components/Modal.jsx
// import React from 'react';

// const Modal = ({ isOpen, onClose, children, hideHeader }) => {
//   console.log("🎭 Modal render - isOpen:", isOpen, "onClose exists:", !!onClose);
  
//   if (!isOpen) return null;

//   const handleCloseClick = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("❌ Modal X button clicked");
//     if (onClose) {
//       console.log("❌ Calling onClose from Modal");
//       onClose();
//     } else {
//       console.log("⚠️ No onClose function provided to Modal");
//     }
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       console.log("🎯 Backdrop clicked");
//       if (onClose) {
//         onClose();
//       }
//     }
//   };

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//       onClick={handleBackdropClick}
//     >
//       <div className="bg-[#1e1e2f] text-white rounded-xl shadow-xl w-full max-w-md p-6 relative border border-blue-600">
//         {!hideHeader && (
//           <button
//             onClick={handleCloseClick}
//             className="absolute top-3 right-3 text-blue-300 hover:text-white text-2xl font-bold focus:outline-none"
//             aria-label="Close modal"
//           >
//             &times;
//           </button>
//         )}
//         <div className="text-white">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
