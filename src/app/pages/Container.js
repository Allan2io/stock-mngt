'use client'
import Image from 'next/image'
import React from 'react'
import Bean from '../img/logo.png';
import { RxEnvelopeClosed } from "react-icons/rx";
import { MdLogout, MdPerson } from "react-icons/md";
import { ImCalendar } from "react-icons/im";
import { FaFileImport, FaBoxesStacked, FaExclamation, FaTriangleExclamation  } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import ChartPage from './ChartPage';

const date = new Date();
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Container(props) {
  return (
    <div className={props.classes.con}>
      <div className={props.classes.mail}>
        <RxEnvelopeClosed 
          size={26} 
          color='var(--gray)' 
          />
        <Image
          src={Bean}
          width={45}
          height={45}
          alt='Bean'
        />
      </div>
      <div className={props.classes.greetings}>
        <h2>Welcome to Stock Management</h2>
        <ul>
          <li>
            <ImCalendar 
            size={20} 
            color='var(--gray)' 
          />
          {date.toDateString()}
          </li>
          <li>
            Admin
            <MdPerson 
            size={20} 
            color='var(--gray)' 
          />
          </li>
          <li>
            Logout
            <MdLogout 
            size={20} 
            color='var(--gray)' 
          />
          </li>
        </ul>
      </div>
      <div className={props.classes.cards}>
        <div className={props.classes.stacks}>
          <h3>100</h3>
          <p>Total Item</p>
          <FaBoxesStacked 
            size={75} 
            className={props.classes.cards_ic}
          />
        </div>
        <div className={props.classes.stacks}>
          <h3>100</h3>
          <p>Total Delivered</p>
          <FaFileImport 
            size={75} 
            className={props.classes.cards_ic}
          />
        </div>
        <div className={props.classes.stacks}>
          <h3>100</h3>
          <p>Critical Item</p>
          <FaExclamation 
            size={75} 
            className={props.classes.cards_ic}
          />
        </div>
        <div className={props.classes.stacks}>
          <h3>100</h3>
          <p>Out of Stocks</p>
          <FaTriangleExclamation  
            size={75} 
            className={props.classes.cards_ic}
          />
        </div>
      </div>
      <div>
      <div className={props.classes.summary}>
        <h4>
          Inventory Summary
        </h4>
        <div className={props.classes.sum_datas}>
        <ul className={poppins.className}>
          <li>
            <h5>500</h5>
            <p>Quantity in Hand</p>
          </li>
          <li>
            <h5>500</h5>
            <p>Total Purchased</p>
          </li>
          <li>
            <h5>500</h5>
            <p>In hand Cost</p>
          </li>
          <li>
            <h5>500</h5>
            <p>Purchased Cost</p>
          </li>
          <li>
            <h5>10</h5>
            <p>Repaired Item</p>
          </li>
        </ul>
        </div>
      </div>
      </div>
      <ChartPage classes={props.classes}/>
    </div>
  )
}
