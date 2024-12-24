import React from 'react';

export const Logo = () => {
  return (
    <svg width="300" height="300" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Corpo do Grilo */}
      <path
        d="M250 150 C150 150 100 250 150 350 C200 450 300 450 350 350 C400 250 350 150 250 150"
        fill="#69B550"
      />
      
      {/* Barriga Rosa */}
      <path
        d="M250 200 C200 200 175 250 200 325 C225 400 275 400 300 325 C325 250 300 200 250 200"
        fill="#FF69B4"
      />
      
      {/* Olhos */}
      <circle cx="220" cy="200" r="10" fill="white" />
      <circle cx="223" cy="200" r="5" fill="black" />
      
      {/* Antenas */}
      <path
        d="M200 180 Q150 130 120 150"
        stroke="#69B550"
        strokeWidth="8"
        fill="none"
      />
      <path
        d="M240 180 Q290 130 320 150"
        stroke="#69B550"
        strokeWidth="8"
        fill="none"
      />
      
      {/* Pernas */}
      <path
        d="M150 300 Q100 320 80 300"
        stroke="#69B550"
        strokeWidth="8"
        fill="none"
      />
      <path
        d="M350 300 Q400 320 420 300"
        stroke="#69B550"
        strokeWidth="8"
        fill="none"
      />
    </svg>
  );
}; 