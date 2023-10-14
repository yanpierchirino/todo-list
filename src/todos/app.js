import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderPending, renderTodos } from './models/use-cases';

const elementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompletedButton: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCount: '#pending-count'
}

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getcurrentFilter() );
        renderTodos( elementIds.TodoList, todos );
        setPendingCount();
    }
    
    const setPendingCount = () => {
        renderPending( elementIds.PendingCount );
    }

    // Inicializar app
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    
        displayTodos();
    })()

    const newDescriptionInput = document.querySelector( elementIds.NewTodoInput );
    const todoListUL = document.querySelector( elementIds.TodoList );
    const clearCompleted = document.querySelector( elementIds.ClearCompletedButton );
    const filtersLI = document.querySelectorAll( elementIds.TodoFilters );
    
    // Eventos
    newDescriptionInput.addEventListener('keyup', (event) => {
        if ( event.keyCode !== 13) return
        
        const value = event.target.value.trim();
        if ( value.length === 0) return;
        
        todoStore.addTodo( value );
        event.target.value = '';
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {
        const elem = event.target.closest('[data-id]');
        const elemId = elem.getAttribute('data-id');
        
        todoStore.toggleTodo( elemId );
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {
        const destroy = event.target.className === 'destroy';
        if ( !destroy ) return;

        const elem = event.target.closest('[data-id]');
        const elemId = elem.getAttribute('data-id');

        todoStore.deleteTodo( elemId );
        displayTodos();
    });

    clearCompleted.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLI.forEach( element => {
        element.addEventListener('click', (element) => {
            filtersLI.forEach( el => el.classList.remove('selected') );
            element.target.classList.add('selected');

            switch ( element.target.text ) {
                case 'Todos':
                    todoStore.setSelectedFilter( Filters.All );
                    break;
                case 'Pendientes':
                    todoStore.setSelectedFilter( Filters.Pending );
                    break;
                case 'Completados':
                    todoStore.setSelectedFilter( Filters.Completed );
                    break;
            }

            displayTodos();
        })
    })
}