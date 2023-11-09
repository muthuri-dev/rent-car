import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h2 className="text-[40px] md:text-[60px] font-bold">Premium Car Rental in Your Area</h2>
                <h2 className="text-[20px] ">Book the selected car effortlessly, Pay for driving only, Book the Car
                    Now</h2>
                <button className="p-2 mt-5 bg-blue-500 px-4 rounded-full hover:scale-105 transition-all">Explore Cars
                </button>
            </div>
            <div className="">
                <Image src="/car.png" alt="Hero Image" width={500} height={500}
                       className="w-full object-center align-middle"/>
            </div>
        </div>
    );
}