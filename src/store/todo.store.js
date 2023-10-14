import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pendieng'
}

const state = {
    todos: [
        new Todo(' Msg1'),
        new Todo(' Msg2'),
        new Todo(' Msg3')
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log( state );
    console.log('Init store');
}

const loadStore = () => {
    throw new Error('Not implemented.')
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
}

const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if ( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo
    })
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done );
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setSelectedFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
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
