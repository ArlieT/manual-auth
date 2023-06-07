'use client'
import { useEffect } from "react";
import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import { useSession } from "next-auth/react";
import CategoryNav from "../CategoryNav";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useUpdate from "@/lib/State";


function NavBar() {

const {firstName:name,lastName,updateFirstName}= useUpdate();
  
  return (
    <nav className="sticky z-50 top-0 w-full h-[80px] border bg-white">
        <div className="w-full h-full py-4  border-b-[1px]">
            <Container>
                   <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <Logo/>
                    <Search/>
                    <UserMenu/>
                   </div>
            </Container>
        </div>
    </nav>
  )
}

export default NavBar