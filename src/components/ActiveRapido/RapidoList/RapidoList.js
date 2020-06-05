import React from "react";
import classes from './RapidoList.module.sass'

const RapidoList = props => {

    return (
        <div className={classes.RapidoList}>
            {props.choice.map((item,index)=>{
                const out = props.area === 1 ? {fromChoice: 'firstChoice', number: item.value - 1} : {fromChoice: 'secondChoice', number: item.value - 1}
                return (
                    <div
                        className={item.isActive ? classes.RapidoListItem__active : classes.RapidoListItem}
                        key={index + 1}
                        onClick={() => props.onClickNumber(out)}

                    ><p>{item.value}</p></div>
                )
            })}
        </div>
    )
}

export default RapidoList