"use client"

import Arrow from "@/svgs/arrow.svg"
import { ArrowLeftIcon } from 'lucide-react'
import React from 'react';
import styles from './button.module.css'

interface BtnProps {
  label: string;
  onClick?:() => void; 
} 
const Button: React.FC<BtnProps> =({label}) => {
  return (
    <button className="text-white text-4xl font-semibold flex py-5 px-24 rounded-[20px] bg-gradient-to-r from-[#75A3B1] to-[rgb(152,108,172)]" onClick={() => { console.log("logout") }}>{label}
    <ArrowLeftIcon height={50} width={50}/>
    {/* <Arrow /> */}
    </button>
  )
}

export default Button;