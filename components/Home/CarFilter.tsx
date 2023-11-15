import React from "react";

export default function CarFilter(): React.JSX.Element {
    return (
        <div className="mb-10 flex items-center justify-between">
            <div>
                <h2 className="text-[30px] font-bold">Cars Catalogue</h2>
                <h2>Explore our cars you might like</h2>
            </div>
            <div className="flex gap-5 ">
                <select className="select select-accent w-full max-w-xs ">
                    <option disabled selected>Price</option>
                    <option>min to max</option>
                    <option>max to min</option>
                </select>
                <select className="select select-accent w-full max-w-xs hidden md:block">
                    <option disabled selected>Manufacturer</option>
                    <option>Tesla</option>
                    <option>Toyota</option>
                    <option>Land rover</option>
                    <option>Mercedes</option>
                    <option>BMW</option>
                    <option>Volvo</option>
                </select>
            </div>
        </div>
    )
}