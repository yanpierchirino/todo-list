import { Todo } from "../todo.model"

/**
 * 
 * @param {Todo} todo 
 * @returns {HTMLElement}
 */
export const createTodoHTML = ( todo ) => {
    if ( !todo ) throw new Error('ToDo es requerido.');

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${ todo.done ? 'checked' : ''}>
            <label>${ todo.description }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        `;

    const liElement = document.createElement('li');
    liElement.setAttribute('data-id', todo.id);
    liElement.innerHTML = html;

    if ( todo.done ) liElement.classList.add('completed')

    return liElement
}
