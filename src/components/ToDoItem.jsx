import React from "react";

function ToDoItem(props) {

    return (
        <div onClick={() => {
            props.onChecked(props.id);
        }}
        >
            <li>{props.text}</li>
        </div>
    );

//if you do not want to delete the item, but only add "line-through", delete the return above and make chenges in App.js
/*
    const [isDone, setIsDone] = React.useState(false);

    function handleClick() {
        setIsDone(prevValue => {
            return !prevValue;
        });
    }

    return (
        <div onClick={handleClick}>
            <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
        </div>
    );
    */
}

export default ToDoItem;