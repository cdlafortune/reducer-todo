import React from "react";
import Todo from "./Todo";


const TodoList = props => {
    return (
        <div className="todo-list">
            {props.tasks.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={props.clearDone} >
                Clear Done
            </button>

        </div>
    );
};

export default TodoList;