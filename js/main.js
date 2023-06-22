const doc = document;

const
    forms = doc.forms.addTodoForm,
    formsEls = forms.elements,
    addTodoInput = forms.addTodoInput,
    addTodoBtn = forms.addTodoBtn;

const todoListEl = doc.querySelector('.todo-list');

const todos = [];

renderTodoList(todos);

addTodoBtn.onclick = function (e) {
    e.preventDefault();
    const text = addTodoInput.value.trim();
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1

    if (!text) {
        addTodoInput.value = '';
        return;
    }

    todos.push(createTodoObj(id, text));
    renderTodoList(todos);

    addTodoInput.value = '';
}

$('.todo-list').on('click', '.action-btn_del', (e) => {
    const liElem = e.target.parentNode.parentNode;
    const liElemIndex = liElem.dataset.id - 1;

    todos.splice(liElemIndex, 1)

    for (let i = 0; i < todos.length; i++) {
        todos[i].id = i + 1;
    }

    renderTodoList(todos);
});

$('.todo-list').on('change', 'input', (e) => {
    const text = e.target.parentNode.parentNode.children[2];

    if(text.classList.contains('line-through')){
        text.classList.remove('line-through');
    }else{
        text.classList.add('line-through');
    }
});


function renderTodoList(todoList) {
    const todoItemEls = todoList.map((item, index) => `
    <li class="todo-item" data-id="${item.id}">
      <span class="todo-item__index">${index + 1}</span>
      <label class="todo-item__input">
        <input type="checkbox" name="completed">
      </label>
      <p class="todo-item__text">${item.text}</p>
      <div class="todo-item__btns">
        <button class="action-btn action-btn_del">x</button>
      </div>
    </li>
  `).join('');

    todoListEl.innerHTML = todoItemEls;
}

function createTodoObj(id, text) {
    const todoObj = {
        id: id,
        text: text,
        completed: false
    }

    return todoObj;
}