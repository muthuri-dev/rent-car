import React from "react";

export default function SearchInput(): React.JSX.Element {
    return (
        <div><h2 className="text-center text-gray-400 text-[20px]">Lets Search what you need</h2>
            <div className="flex items-center justify-center bg-gray-100 rounded-full gap-3 divide-x">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>

                <input type="text" placeholder="Location" className="p-2 outline-none bg-transparent"/>
                <div>
                    <input type="date" className="p-2 outline-none bg-transparent"/>
                </div>
            </div>
        </div>
    );
}