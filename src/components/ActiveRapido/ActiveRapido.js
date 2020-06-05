import React from "react";
import classes from './ActiveRapido.module.sass'
import RapidoItem from "./RapidoItem/RapidoItem";

const ActiveRapido = props => {
    const cls = ["fas", 'fa-magic']
    cls.push(classes.icon__position)

    return (
        <div className={classes.ActiveRapido}>
            <h1>Билет 1</h1>

            {props.answerOptions.isGame ? (<div className={classes.ActiveRapido__area}>
                    <i
                        className={cls.join(' ')}
                        onClick={props.onClickRandom}
                    />
                    <RapidoItem
                    choice={props.answerOptions.firstChoice.numbers}
                    onClickNumber={props.onClickNumber}
                    area={1}
                />
                <RapidoItem
                    choice={props.answerOptions.secondChoice.numbers}
                    onClickNumber={props.onClickNumber}
                    area={2}
                />

                <button
                className={classes.Button}
                onClick={props.onClickButton}
                >Показать результат</button>
            </div>)
                :
                (props.answerOptions.isTicketWon) ? (<p>Ого, вы выиграли! Поздравляем!</p>) : (<p>К сожалению, но вы проиграли(</p>)

            }
            {/*<RapidoItem
                choice={props.answerOptions.firstChoice.numbers}
                onClickNumber={props.onClickNumber}
                area={1}
            />
            <RapidoItem
                choice={props.answerOptions.secondChoice.numbers}
                onClickNumber={props.onClickNumber}
                area={2}
            />

            <button
                className={classes.Button}
                onClick={props.onClickButton}
            >Показать результат</button>*/}
        </div>
    )
}

export default ActiveRapido