import { Todo } from '../todos/models/todo.model';

export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pendieng'
}

const state = {
    todos: [],
    filter: Filters.All
}

const initStore = () => {
    loadStore();
}

const loadStore = () => {
    const localState = localStorage.getItem('state');
    if ( !localState ) return;

    const { todos=[], filter=Filters.All } = JSON.parse(localState );
    state.todos = todos
    state.filter = filter
}

const saveToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify( state ));
}

const getTodos = ( filter = Filters.All  ) => {
    switch ( filter ) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Opcion ${filter} no valida.`)
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if (!description) throw new Error('Descripción requerida.')
    state.todos.push( new Todo( description ));
    saveToLocalStorage();
}

const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if ( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo
    })

    saveToLocalStorage();
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
    saveToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done );
    saveToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setSelectedFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
    saveToLocalStorage();
}

const getcurrentFilter = () => {
    return state.filter
}

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setSelectedFilter,
    getcurrentFilter
}
