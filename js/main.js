const doc = document;

const forms = doc.forms.addTodoForm;
const formsEls = forms.elements;
const addTodoInput = forms.addTodoInput;
const addTodoBtn = forms.addTodoBtn;

const todoListEl = doc.querySelector('.todo-list');

const todos = [];


addTodoBtn.onclick = function (e) {
    e.preventDefault();
    const text = addTodoInput.value.trim();
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;

    if (!text) {
        addTodoInput.value = '';
        return;
    }

    todos.push(createTodoObj(id, text));
    renderTodoList(todos);

    addTodoInput.value = '';
};

doc.querySelector('#checkBox1').addEventListener('change', () => {
    renderTodoList(todos);
});
doc.querySelector('#checkBox2').addEventListener('change', () => {
    renderTodoList(todos);
});

todoListEl.addEventListener('change', function (e) {
    if (e.target.tagName === 'INPUT') {
        const checkbox = e.target;
        const todoItem = checkbox.closest('.todo-item');
        const todoItemId = parseInt(todoItem.dataset.id);

        todos[todoItemId - 1].completed = checkbox.checked;

        renderTodoList(todos);
    }
});
todoListEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('action-btn_del')) {
        const todoItem = e.target.closest('.todo-item');
        const todoItemId = parseInt(todoItem.dataset.id);

        todos.splice(todoItemId - 1, 1);

        todos.forEach((item, index) => {
            item.id = index + 1;
        });

        renderTodoList(todos);
    }
});


function renderTodoList(todoList) {
    const checkBox1 = doc.querySelector('#checkBox1');
    const checkBox2 = doc.querySelector('#checkBox2');
    const sortTodoList = checkBox1.checked ? [...todoList].sort((a, b) => a.completed - b.completed) : todoList;

    let visTodoList = sortTodoList;
    if (checkBox2.checked) {
        visTodoList = sortTodoList.filter((item) => !item.completed);
    }

    const todoItemEls = visTodoList.map((item, index) =>
        `<li class="todo-item" data-id="${item.id}">
        <span class="todo-item__index">${index + 1}</span>
        <label class="todo-item__input">
          <input type="checkbox" name="completed" ${item.completed ? 'checked' : ''}>
        </label>
        <p class="todo-item__text ${item.completed ? 'line-through' : ''}">${item.text}</p>
        <div class="todo-item__btns">
          <button class="action-btn action-btn_del">x</button>
        </div>
      </li>`
    ).join('');

    todoListEl.innerHTML = todoItemEls;
}

function createTodoObj(id, text) {
    const todoObj = {
        id: id,
        text: text,
        completed: false,
    };

    return todoObj;
}
