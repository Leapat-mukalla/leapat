"use client"

import React from 'react';
interface BtnProps {
  label: string;
  onClick?:() => void; 
  icon?: React.ReactNode;
} 
const Button: React.FC<BtnProps> =({label,icon}) => {
  return (
    <button className="text-white text-4xl font-semibold flex justify-center items-center py-3 rounded-[20px] bg-gradient-to-r from-[#75A3B1] to-[rgb(152,108,172)] hover:bg-gradient-to-l from-[#75A3B1] to-[rgb(152,108,172)]" onClick={() => { console.log("logout") }}>{label}
    {icon && <span className="ml-4">{icon}</span>}
    </button>
  )
}

export default Button;
