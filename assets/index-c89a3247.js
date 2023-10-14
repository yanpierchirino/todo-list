(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();let a;const g=new Uint8Array(16);function f(){if(!a&&(a=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(g)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function y(e,t=0){return s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]}const w=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),m={randomUUID:w};function b(e,t,n){if(m.randomUUID&&!t&&!e)return m.randomUUID();e=e||{};const i=e.random||(e.rng||f)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){n=n||0;for(let o=0;o<16;++o)t[n+o]=i[o];return t}return y(i)}class u{constructor(t){this.id=b(),this.done=!1,this.createdAt=new Date,this.description=t}}const d={All:"all",Completed:"completed",Pending:"pendieng"},r={todos:[new u(" Msg1"),new u(" Msg2"),new u(" Msg3")],filter:d.All},T=()=>{console.log(r),console.log("Init store")},v=()=>{throw new Error("Not implemented.")},S=(e=d.All)=>{switch(e){case d.All:return[...r.todos];case d.Completed:return r.todos.filter(t=>t.done);case d.Pending:return r.todos.filter(t=>!t.done);default:throw new Error(`Opcion ${e} no valida.`)}},C=e=>{if(!e)throw new Error("Descripción requerida.");r.todos.push(new u(e))},L=e=>{r.todos=r.todos.map(t=>(t.id===e&&(t.done=!t.done),t))},E=e=>{r.todos=r.todos.filter(t=>t.id!==e)},M=()=>{r.todos=r.todos.filter(e=>!e.done)},U=(e=d.All)=>{r.filter=e},x=()=>r.filter,h={initStore:T,loadStore:v,getTodos:S,addTodo:C,toggleTodo:L,deleteTodo:E,deleteCompleted:M,setSelectedFilter:U,getcurrentFilter:x},A=`<section class="todoapp">
    <header class="header">
        <h1>Tareas</h1>
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>
    </header>
    
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
            <!-- <li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li> -->
            <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li> -->
        </ul>
    </section>

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
        <!-- This should be "0 items left" by default -->
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <a class="selected filtro" class="selected" href="#/">Todos</a>
            </li>
            <li>
                <a class="filtro" href="#/active">Pendientes</a>
            </li>
            <li>
                <a class="filtro" href="#/completed">Completados</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Borrar completados</button>
    </footer>
</section>


<footer class="info">
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Creado por <a href="http://yanchirino.com">Yan Chirino</a></p>
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`,P=e=>{if(!e)throw new Error("ToDo es requerido.");const t=`
        <div class="view">
            <input class="toggle" type="checkbox" ${e.done?"checked":""}>
            <label>${e.description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        `,n=document.createElement("li");return n.setAttribute("data-id",e.id),n.innerHTML=t,e.done&&n.classList.add("completed"),n};let c;const D=(e,t=[])=>{if(c||(c=document.querySelector(e)),!c)throw new Error(`El elemento ${e}, no se encontro en la vista html.`);c.innerHTML="",t.forEach(n=>{c.append(P(n))}),console.log({elementId:e,todos:t})},O={TodoList:".todo-list"},V=e=>{const t=()=>{const n=h.getTodos(h.getcurrentFilter());D(O.TodoList,n)};(()=>{const n=document.createElement("div");n.innerHTML=A,document.querySelector(e).append(n),t()})()};h.initStore();V("#app");
