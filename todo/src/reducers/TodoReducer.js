
export const initialState = [
  {
    name: "Code",
    id: 1,
    done: false
  },
  {
    name: "Eat",
    id: 2,
    done: false
  },
  {
    name: "Sleep",
    id: 3,
    done: false
  }
];

export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TASK': 
            const newTask = {
                name: action.payload,
                done: false,
                id: Date.now(),
            };
            console.log("state:", state);
            return [...state, newTask];

        case 'EDIT_TASK':
            // const item = state.find(el => el.id===action.payload);
            // const otherItems = state.filter(el => el.id !== action.payload)
            return state.map(item => {
                if (item.id !== action.payload) return item;
                return {...item, done: !item.done}
            });

        case 'CLEAR': 
            return state.filter(item => !item.done);
            
        default: 
            return state;
    }
};