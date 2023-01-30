const initialState = {
    todos: []
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD': {
            return {
                ...state,
                todos: [...state.todos, {text: action.text,
                    id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1
                }],
            }
        }
        case 'DELETE': {
            return {
                ...state,
                todos: [...state.todos.filter((item, index) => index !== action.p)]
            }
        }
        case 'TOGGLE': {
            const {id} = action.id
            return {
                ...state,
                todos: [...state.todos, {text: action.text,
                    id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1
                }],
            }
        }
        default: return state
    }
}

export const addTodo = (text) => {
    return(dispatch) => {
        return dispatch({type: 'ADD', text: text})
    }
}

export const deleteTodo = (index) => {
    return(dispatch) => {
        return dispatch({type: 'DELETE', p: index})
    }
}