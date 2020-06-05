import React from "react";
import classes from './RapidoItem.module.sass'
import RapidoList from "../RapidoList/RapidoList";

const RapidoItem = props => {
    return (
        <div className={classes.RapidoItem}>
            <p><span>Поле {props.area}</span> Отметьте {props.area === 1 ? "8 чисел.":"1 число."}</p>
            <RapidoList
                choice={props.choice}
                area={props.area}
                onClickNumber={props.onClickNumber}
            />
        </div>
    )
}

export default RapidoItem