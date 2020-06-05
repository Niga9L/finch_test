import React from "react";
import classes from './Rapido.module.sass'
import ActiveRapido from "../../components/ActiveRapido/ActiveRapido";
import _ from 'lodash'


class Rapido extends React.Component {
    state ={
        answerOptions:{
            isGame: true,
            isTicketWon: false,
            firstChoice: {
                numbers:[{value: 1, isActive: false}, {value: 2, isActive: false}, {value: 3, isActive: false},
                        {value: 4, isActive: false}, {value: 5, isActive: false}, {value: 6, isActive: false},
                        {value: 7, isActive: false}, {value: 8, isActive: false}, {value: 9, isActive: false},
                        {value: 10, isActive: false}, {value: 11, isActive: false}, {value: 12, isActive: false},
                        {value: 13, isActive: false}, {value: 14, isActive: false}, {value: 15, isActive: false},
                        {value: 16, isActive: false}, {value: 17, isActive: false}, {value: 18, isActive: false},
                        {value: 19, isActive: false}],
                maxChoice: 8,
                nowChoice: 0,
            },
            secondChoice: {
                numbers:[{value: 1, isActive: false}, {value: 2, isActive: false}],
                maxChoice: 1,
                nowChoice: 0,
            }
        }
    }

    componentDidMount() {
        const answerOptions = this.state.answerOptions
        const trueAnswerFirst = _.shuffle(_.range(1,19)).slice(0,8).sort(function(a, b){return a - b})
        const trueAnswerSecond = []

        trueAnswerSecond.push(Math.floor(Math.random()* 2 + 1))
        answerOptions.trueAnswerFirst = trueAnswerFirst
        answerOptions.trueAnswerSecond = trueAnswerSecond

        this.setState({
            answerOptions
        })
    }

    onClickNumber = item => {
        const answerOptions = this.state.answerOptions

        if (answerOptions[item.fromChoice].nowChoice < answerOptions[item.fromChoice].maxChoice) {
            answerOptions[item.fromChoice].numbers[item.number].isActive === true ?  answerOptions[item.fromChoice].nowChoice -= 1 : answerOptions[item.fromChoice].nowChoice += 1
            answerOptions[item.fromChoice].numbers[item.number].isActive = !answerOptions[item.fromChoice].numbers[item.number].isActive
            this.setState({
                answerOptions,
            })
        } else if (answerOptions[item.fromChoice].numbers[item.number].isActive === true) {
            answerOptions[item.fromChoice].numbers[item.number].isActive = !answerOptions[item.fromChoice].numbers[item.number].isActive
            answerOptions[item.fromChoice].nowChoice -= 1
            this.setState({
                answerOptions,
            })
        } else {
            console.log('максимальное количество чисел')
        }
    }

    isTicketWon() {

        const answerOptions = this.state.answerOptions
        const intersection = answerOptions.selectedNumber.firstField.filter(item => answerOptions.trueAnswerFirst.includes(item))
        if (intersection.length >= 4) {
            answerOptions.isTicketWon = true
            answerOptions.isGame = false
        } else if ((intersection.length >= 3) && (answerOptions.selectedNumber.secondField[0] === answerOptions.trueAnswerSecond[0])) {
            answerOptions.isTicketWon = true
            answerOptions.isGame = false
        } else {
            answerOptions.isGame = false
        }

    }

    onClickButton = () => {
        const answerOptions = this.state.answerOptions

        const answerFirstField = answerOptions.firstChoice.numbers.map(item => {
            if (item.isActive === true) {
                return item.value
            }
            return undefined
        }).filter(item => item !== undefined)

        const answerSecondField = answerOptions.secondChoice.numbers.map(item => {
            if (item.isActive === true) {
                return item.value
            }
            return undefined
        }).filter(item => item !== undefined)

        answerOptions.selectedNumber = {
            firstField: answerFirstField,
            secondField: answerSecondField,
        }

        this.setState({
            answerOptions
        })

        this.isTicketWon()

    }

    onClickRandom = () => {
        const answerOptions = this.state.answerOptions
        answerOptions.firstChoice.numbers.forEach(item => item.isActive = false)
        answerOptions.secondChoice.numbers.forEach(item => item.isActive = false)

        const getRandomFirstNumbers = _.shuffle(_.range(1,19)).slice(0,8).sort(function(a, b){return a - b})

        getRandomFirstNumbers.forEach(index => {
            answerOptions.firstChoice.numbers[index - 1].isActive = true
        })

        const getRandomSecondNumbers =  []
        getRandomSecondNumbers.push(Math.floor(Math.random()* 2 + 1))

        getRandomSecondNumbers.forEach(index => {
            answerOptions.secondChoice.numbers[index - 1].isActive = true
        })

        this.setState({
            answerOptions
        })

    }

    render() {
        return (
            <div className={classes.Rapido}>
                <ActiveRapido
                    answerOptions={this.state.answerOptions}
                    onClickNumber={this.onClickNumber}
                    onClickButton={this.onClickButton}
                    onClickRandom={this.onClickRandom}
                />
            </div>
        )
    }

}

export default Rapido