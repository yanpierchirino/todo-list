import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './models/use-cases';

const elementIds = {
    TodoList: '.todo-list'
}

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getcurrentFilter() );
        renderTodos( elementIds.TodoList, todos )
    }

    // Inicializar app
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    
        displayTodos();
    })()
}