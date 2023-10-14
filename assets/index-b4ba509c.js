(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function s(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(o){if(o.ep)return;o.ep=!0;const d=s(o);fetch(o.href,d)}})();let y;const S=new Uint8Array(16);function L(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(S)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function C(e,t=0){return n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:E};function P(e,t,s){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const i=e.random||(e.rng||L)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){s=s||0;for(let o=0;o<16;++o)t[s+o]=i[o];return t}return C(i)}class A{constructor(t){this.id=P(),this.done=!1,this.createdAt=new Date,this.description=t}}const a={All:"all",Completed:"completed",Pending:"pendieng"},l={todos:[],filter:a.All},I=()=>{w()},w=()=>{const e=localStorage.getItem("state");if(!e)return;const{todos:t=[],filter:s=a.All}=JSON.parse(e);l.todos=t,l.filter=s},g=()=>{localStorage.setItem("state",JSON.stringify(l))},k=(e=a.All)=>{switch(e){case a.All:return[...l.todos];case a.Completed:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Opcion ${e} no valida.`)}},U=e=>{if(!e)throw new Error("Descripción requerida.");l.todos.push(new A(e)),g()},x=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),g()},q=e=>{l.todos=l.todos.filter(t=>t.id!==e),g()},F=()=>{l.todos=l.todos.filter(e=>!e.done),g()},M=(e=a.All)=>{l.filter=e,g()},D=()=>l.filter,c={initStore:I,loadStore:w,getTodos:k,addTodo:U,toggleTodo:x,deleteTodo:q,deleteCompleted:F,setSelectedFilter:M,getcurrentFilter:D},O=`<section class="todoapp">
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
            <!-- selected -->
            <li>
                <a class="filtro" class="selected" href="#/">Todos</a>
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
</footer>`,N=e=>{if(!e)throw new Error("ToDo es requerido.");const t=`
        <div class="view">
            <input class="toggle" type="checkbox" ${e.done?"checked":""}>
            <label>${e.description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        `,s=document.createElement("li");return s.setAttribute("data-id",e.id),s.innerHTML=t,e.done&&s.classList.add("completed"),s};let h;const H=(e,t=[])=>{if(h||(h=document.querySelector(e)),!h)throw new Error(`El elemento ${e}, no se encontro en la vista html.`);h.innerHTML="",t.forEach(s=>{h.append(N(s))})};let T;const V=e=>{if(T||(T=document.querySelector(e)),!T)throw new Error(`Elemento ${e} no se encontro.`);T.innerHTML=c.getTodos(a.Pending).length},m={TodoList:".todo-list",NewTodoInput:"#new-todo-input",ClearCompletedButton:".clear-completed",TodoFilters:".filtro",PendingCount:"#pending-count"},R=e=>{const t=()=>{const r=c.getTodos(c.getcurrentFilter());H(m.TodoList,r),s()},s=()=>{V(m.PendingCount)};(()=>{const r=document.createElement("div");r.innerHTML=O,document.querySelector(e).append(r),t()})();const i=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),d=document.querySelector(m.ClearCompletedButton),p=document.querySelectorAll(m.TodoFilters);i.addEventListener("keyup",r=>{if(r.keyCode!==13)return;const u=r.target.value.trim();u.length!==0&&(c.addTodo(u),r.target.value="",t())}),o.addEventListener("click",r=>{const f=r.target.closest("[data-id]").getAttribute("data-id");c.toggleTodo(f),t()}),o.addEventListener("click",r=>{if(!(r.target.className==="destroy"))return;const v=r.target.closest("[data-id]").getAttribute("data-id");c.deleteTodo(v),t()}),d.addEventListener("click",()=>{c.deleteCompleted(),t()}),p.forEach(r=>{r.addEventListener("click",u=>{switch(p.forEach(f=>f.classList.remove("selected")),u.target.classList.add("selected"),u.target.text){case"Todos":c.setSelectedFilter(a.All);break;case"Pendientes":c.setSelectedFilter(a.Pending);break;case"Completados":c.setSelectedFilter(a.Completed);break}t()})})};c.initStore();R("#app");
