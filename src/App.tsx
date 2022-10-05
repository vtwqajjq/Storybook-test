import React, {useReducer, useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {StateType} from "./components/Accordion/Accordion.test";

type ActionType = {
    type: string
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    if (action.type==='TOGGLE-COLLAPSED') {
        return {...state,
                collapsed:true}
    }
    return state
}

function App() {
    /*const [status, setStatus] = useState(false)

    const changeStatus = (newStatus: boolean) => {
        setStatus(newStatus)
    }

    const todoListID_1 = 'qwfqfq-13131-12dd'
    const todoListID_2= 'afggewg-13124-12dd'

    const todoLists = [
        {
            id: todoListID_1,
            title: 'What to learn',
            filter: 'all',
            tasks: [
                {id: 12,title: 'JS', isDone: false},
                {id: 13,title: 'CSS & HTML', isDone: false},
                {id: 14,title: 'React', isDone: false},
            ]
        },
        {
            id: todoListID_2,
            title: 'What to buy',
            filter: 'all',
            tasks: [
                {id: 22,title: 'Beer', isDone: false},
                {id: 23,title: 'Meet', isDone: false},
                {id: 24,title: 'Fish', isDone: false},
            ]
        }
    ]

    const tasks = {
        [todoListID_1] : [
            {id: 12,title: 'JS', isDone: false},
            {id: 13,title: 'CSS & HTML', isDone: false},
            {id: 14,title: 'React', isDone: false},
        ],
        [todoListID_2]: [
            {id: 22,title: 'Beer', isDone: false},
            {id: 23,title: 'Meet', isDone: false},
            {id: 24,title: 'Fish', isDone: false},
        ]
    }

    console.log([...tasks[todoListID_2], {id: 25,title: 'Pomidor', isDone: false}])

    const nums = [2,15,13,22]

    console.log(nums.reduce((acc,el)=> acc > el ? acc : el))

*/

    let [collapsed, dispatch] = useReducer(reducer, {collapsed: false})

    //for Select component:
    /*let [currentSelectValue, setCurrentSelectValue] = useState('')

    const itemsArray = [
        {title: 'Minsk', value: 1},
        {title: 'Moscow', value: 2},
        {title: 'Kiev', value: 3},
    ]

    const selectChanger = (title: string) => {
        setCurrentSelectValue(title)
        setCollapsed(!collapsed)
    }

    const collapseSetter = () => {
        setCollapsed(!collapsed)
    }*/

    const collapseDiv = () => {
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }

    return (
        <div>
            {/*<PageTitle title = 'First page' />
            <PageTitle title = 'surr' />
            <h2>Article 1</h2>
            <Rating rating = {3}/>

            <h2>Article 2</h2>
            <Rating rating = {4} />
            <Rating rating = {1} />
            <Rating rating = {3} />*/}
            {/*<h2>Article 3</h2>
            <OnOff status={status} setStatus={changeStatus}/>
            <h2>Article 4</h2>
            <UncontrolledAccordion name={'Menu'}/>
            <UncontrolledAccordion name={'Vote'} />
            <UncontrolledRating />*/}
            {/*<div>
                <Select status={collapsed} value={currentSelectValue} onChangeHandler={selectChanger}
                        onClickHandler={collapseSetter}
                        items={itemsArray}/>
            </div>*/}
            <Accordion name={'Menu'} collapsed={collapsed} collapseDiv={collapseDiv}/>
        </div>
    );
}

/*type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}*/


export default App;
