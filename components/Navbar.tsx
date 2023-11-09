import React from 'react';
import Image from 'next/image'
import {UserButton} from "@clerk/nextjs";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-1 shadow-md border-b-[1px] px-5 sticky">
            <Image
                src="/car.png"
                alt="Logo" width={100} height={100}/>
            <div className="flex gap-5 hidden md:flex">
                <a href="/" className="hover:bg-blue-400 p-2 rounded-full px-5 hover:text-white cursor-pointer">Home</a>
                <a href="/about" className="hover:bg-blue-400 p-2 rounded-full px-5 hover:text-white cursor-pointer">About</a>
                <a href="/contact" className="hover:bg-blue-400 p-2 rounded-full px-5 hover:text-white cursor-pointer">Contact</a>
            </div>
            <UserButton/>
        </div>
    );
}