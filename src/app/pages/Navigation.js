'use client'
import Image from "next/image";
import TsIc from '../img/icons/ts_ic.png';
import { MdHive, MdOutlineAddCircle, MdAssignmentAdd, MdPerson, MdAssignment  } from "react-icons/md";
import { ImStatsBars, ImDropbox  } from "react-icons/im";
import { BsBuildingsFill } from "react-icons/bs";
import { Poppins } from "next/font/google";


const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Navigation(props) {
  return (
    <div className={props.classes.nav}>
        <h1>
            <Image
                src={TsIc}
                width={30}
                height={30}
                alt="Trsn"
            />
            TRANSMITTAL
        </h1>
        <ul>
            <li className={poppins.className}>
                <MdOutlineAddCircle  
                    size={26}
                />
                <a>Create New Form</a>
            </li>
            <li className={poppins.className}>
                <MdHive 
                    size={26}
                />
                <a>Dashboard</a>
            </li>
            <li className={poppins.className}>
                <MdAssignmentAdd  
                    size={26}
                />
                <a>Stocks</a>
            </li>
            <li className={poppins.className}>
                <MdAssignment   
                    size={26}
                />
                <a>Catalog</a>
            </li>
            <li className={poppins.className}>
                <BsBuildingsFill  
                    size={26}
                />
                <a>Branch</a>
            </li>
            <li className={poppins.className}>
                <ImDropbox   
                    size={26}
                />
                <a>Purchases</a>
            </li>
            <li className={poppins.className}>
                <ImStatsBars  
                    size={26}
                />
                <a>Report</a>
            </li>
            <li className={poppins.className}>
                <MdPerson   
                    size={26}
                />
                <a>Account</a>
            </li>
        </ul>
    </div>
  )
}