import React, {useState} from "react";

type StarPropsType = {
    selected : boolean
}

function UncontrolledRating() {
    const [rating, setRating] = useState(0)
    function onClickHandler(value:number) {
        setRating(value)
    }

    return (
        <div>
            <Star selected={rating > 0}/><button onClick={()=>onClickHandler(1)}>1</button>
            <Star selected={rating > 1}/><button onClick={()=>onClickHandler(2)}>2</button>
            <Star selected={rating > 2}/><button onClick={()=>onClickHandler(3)}>3</button>
            <Star selected={rating > 3}/><button onClick={()=>onClickHandler(4)}>4</button>
            <Star selected={rating > 4}/><button onClick={()=>onClickHandler(5)}>5</button>
        </div>
    )
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b> star </b></span>
    } else {
        return <span> star </span>
    }

}

export default UncontrolledRating;