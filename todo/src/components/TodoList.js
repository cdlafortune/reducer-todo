import React, {useReducer} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo"
import {initialState, reducer} from "../reducers/TodoReducer";

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearDone = e => {
        e.preventDefault();
        // if item is done (item.done is true) then filter out
        dispatch({type: 'CLEAR'});
      };
    

    return (
        <div className="todo-list">
            <TodoForm dispatch={dispatch}/>
            {state.map(item => (
                <Todo key={item.id} item={item} onClick={()=> dispatch({type: 'EDIT_TASK', payload: item.id}) } />
            ))}
            <button className="clear-btn" onClick={clearDone}>
                Clear Done
            </button>

        </div>
    );
};

export default TodoList;