import React, {useState} from "react";

const TodoForm = props =>  {
    const [task, setTask] = useState("");

    const handleChanges = e => {
        setTask(e.target.value);
    };

    const submitTask = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={submitTask}>
            <input
                type="text"
                value={task}
                name="add"
                onChange={handleChanges}
            />

            <button className="add-btn" onClick={() => {
                props.dispatch({type: 'ADD_TASK', payload: task})
            }}>
                Add
            </button>

        </form>
    )
}

export default TodoForm;