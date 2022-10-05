import React from 'react';
import s from './Select.module.css'

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    status: boolean
    value: string
    onChangeHandler: (title: string) => void
    onClickHandler: () => void
    items: ItemsType[]
}

export const Select = (props: SelectPropsType) => {
    return (
        <div className={s.container}>
            <div className={s.mainOption}>{props.value}
                <button onClick={props.onClickHandler}>{!props.status ? <>&#9660;</> : <>&#9650;</>}</button>
            </div>
            {props.status && <div >{props.items.map((o,index) =>
                <div key={index} className={s.selectItem} onClick={()=>props.onChangeHandler(o.title)}>
                    {o.title}
                </div>
            )}</div>}
        </div>
    );
};


