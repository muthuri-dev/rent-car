"use client"
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import CarFilter from "@/components/Home/CarFilter";
import React, {useEffect, useState} from "react";
import {getCarsList} from "@/services";
import CarsList from "@/components/Home/CarsList";

export default function Home() {
    const [carList, setCarList] = useState([]);
    useEffect(() => {
        getCarList();
    }, []);
    const getCarList = async () => {
        const result: any = await getCarsList();
        setCarList(result?.carLists);
        console.log(result)
    }
    return (
        <main className="p-5 sm:px-10 md:px-20">
            <Hero/>
            <SearchInput/>
            <CarFilter/>
            <CarsList carsList = {carList}/>
        </main>
    )
}
