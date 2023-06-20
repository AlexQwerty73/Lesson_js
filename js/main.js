const doc = document;

const form = doc.forms.addTodo;
const formsEls = form.elements
const addTodoInput = form.addTodoInput;
const addTodoBtn = form.addTodoBtn;

const todos = [
    // { id: 1, text: '1', completed: false },
    // { id: 2, text: '2', completed: false },
    // { id: 3, text: '3', completed: false },
];

addTodoBtn.onclick = function (e) {
    e.preventDefault();
    const text = addTodoInput.value;
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;

    if (!text.trim()) {
        addTodoInput.value = '';
        return;
    }

    todos.push(createTodoObj(id, text));

    addTodoInput.value = '';

    renderToTodoList(todos[todos.length - 1]);
}

function createTodoObj(id, text) {
    const todoObj = {
        id: id,
        text: text,
        completed: false
    };

    return todoObj;
}

function renderToTodoList(todoList) {
    doc.querySelector('.todo-list').innerHTML +=
        `<li id='${todoList.id}' class="todo-item">
            <label for="todo-item__input">
                <input type="checkbox" name="${todoList.com}">
            </label>
            <p class="todo-item__text">${todoList.text}</p>
            <button class="action-btn_del">X</button>
        </li>`;
}