import React from "react";

export default function CarsList(props:any){
    return(
        <div>
            {props.carsList.map((car:any)=>{
                return(
                    <div>{car.carBrand}</div>
                )
            })}
        </div>
    )
}