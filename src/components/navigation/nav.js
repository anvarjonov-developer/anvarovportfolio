import styles from "../../util/styles"
import { NavList } from "../../util/content"
import { useState } from "react"
import close from '../../assets/x.png.png'
import menu from '../../assets/menu.png.png'
import InCode from '../../assets/InCode.png'

import '../../App.css'

function Nav(){
    const [toggleNav, setToggleNav] = useState(false)
    // const [active, setActive] = useState('Home')

    

const toggleMenu =()=>{
setToggleNav((prev)=> !prev)
}

    return(
        <div className={` w-full py-6 ${styles.flexBetween}`}>
     <div className={`${styles.header} ${styles.flexBetween}`}>
       <img src={InCode} alt="Logo" className="w-[160px] h-[45px]" />
        </div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
{
    NavList.map((nav,idx)=>{
        return(
            <li className={`font-normal cursor-pointer text-[16px] text-white hover:text-lightWhite transition-all duration-100`} >
                {nav.title}
            </li>
        )
    })
}
        </ul>
        <div className="sm:hidden flex  justify-end  items-center">
        <img onClick={toggleMenu} src={toggleNav ? close : menu} alt="Menu" className="w-[30px] h-[30px] object-contain" />
        <div className={`${toggleNav ? 'flex' : 'hidden'} p-6 h-full absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient`}>
        <ul className="list-none flex justify-start items-center flex-col gap-10 flex-1">
{
    NavList.map((nav,idx)=>{
        return(
            <li className={` font-normal cursor-pointer text-[20px] text-white hover:text-lightWhite transition-all duration-500`} key={nav.id}>
                {nav.title}
            </li>
        )
    })
}
        </ul>
        </div>


        </div>
  
        </div>
    )
}
export default Nav