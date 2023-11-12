import React from "react";

export default function CarFilter(): React.JSX.Element {
    return (
        <div className="mb-10">
            <h2 className="text-[30px] font-bold">Cars Catalogue</h2>
            <h2>Explore our cars you might like</h2>
            <div>
                <select className="select select-accent w-full max-w-xs">
                    <option disabled selected>Price</option>
                    <option>Auto</option>
                    <option>Dark mode</option>
                    <option>Light mode</option>
                </select>
            </div>
        </div>
    )
}