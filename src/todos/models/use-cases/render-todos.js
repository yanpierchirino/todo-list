import { createTodoHTML } from "./create-todo-html";

let element;

/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
 * @returns 
 */
export const renderTodos = ( elementId, todos = [] ) => {
    if ( !element ) {
        element = document.querySelector(elementId)
    }

    if ( !element ) {
        throw new Error(`El elemento ${ elementId }, no se encontro en la vista html.`)
    }

    element.innerHTML = '';
    todos.forEach(todo => {
        element.append( createTodoHTML( todo ) );
    });

}