(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();let m;const T=new Uint8Array(16);function w(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(T)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function v(e,t=0){return s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),f={randomUUID:S};function L(e,t,r){if(f.randomUUID&&!t&&!e)return f.randomUUID();e=e||{};const d=e.random||(e.rng||w)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){r=r||0;for(let n=0;n<16;++n)t[r+n]=d[n];return t}return v(d)}class C{constructor(t){this.id=L(),this.done=!1,this.createdAt=new Date,this.description=t}}const a={All:"all",Completed:"completed",Pending:"pendieng"},l={todos:[],filter:a.All},E=()=>{y()},y=()=>{const e=localStorage.getItem("state");if(!e)return;const{todos:t=[],filter:r=a.All}=JSON.parse(e);l.todos=t,l.filter=r},p=()=>{localStorage.setItem("state",JSON.stringify(l))},A=(e=a.All)=>{switch(e){case a.All:return[...l.todos];case a.Completed:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Opcion ${e} no valida.`)}},I=e=>{if(!e)throw new Error("Descripción requerida.");l.todos.push(new C(e)),p()},U=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),p()},x=e=>{l.todos=l.todos.filter(t=>t.id!==e),p()},D=()=>{l.todos=l.todos.filter(e=>!e.done),p()},M=(e=a.All)=>{l.filter=e,p()},O=()=>l.filter,c={initStore:E,loadStore:y,getTodos:A,addTodo:I,toggleTodo:U,deleteTodo:x,deleteCompleted:D,setSelectedFilter:M,getcurrentFilter:O},P=`<section class="todoapp">
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
</footer>`,k=e=>{if(!e)throw new Error("ToDo es requerido.");const t=`
        <div class="view">
            <input class="toggle" type="checkbox" ${e.done?"checked":""}>
            <label>${e.description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        `,r=document.createElement("li");return r.setAttribute("data-id",e.id),r.innerHTML=t,e.done&&r.classList.add("completed"),r};let u;const q=(e,t=[])=>{if(u||(u=document.querySelector(e)),!u)throw new Error(`El elemento ${e}, no se encontro en la vista html.`);u.innerHTML="",t.forEach(r=>{u.append(k(r))})},h={TodoList:".todo-list",NewTodoInput:"#new-todo-input",ClearCompletedButton:".clear-completed"},N=e=>{const t=()=>{const o=c.getTodos(c.getcurrentFilter());q(h.TodoList,o)};(()=>{const o=document.createElement("div");o.innerHTML=P,document.querySelector(e).append(o),t()})();const r=document.querySelector(h.NewTodoInput),d=document.querySelector(h.TodoList),n=document.querySelector(h.ClearCompletedButton);r.addEventListener("keyup",o=>{if(o.keyCode!==13)return;const i=o.target.value.trim();i.length!==0&&(c.addTodo(i),t(),o.target.value="")}),d.addEventListener("click",o=>{const g=o.target.closest("[data-id]").getAttribute("data-id");c.toggleTodo(g),t()}),d.addEventListener("click",o=>{if(!(o.target.className==="destroy"))return;const b=o.target.closest("[data-id]").getAttribute("data-id");c.deleteTodo(b),t()}),n.addEventListener("click",()=>{c.deleteCompleted(),t()})};c.initStore();N("#app");
