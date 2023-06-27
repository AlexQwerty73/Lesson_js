const doc = document;

const
    forms = doc.forms.addTodoForm,
    formsEls = forms.elements,
    addTodoInput = forms.addTodoInput,
    addTodoBtn = forms.addTodoBtn;

forms.onsubmit = (e) => {
    e.preventDefault();

    // forms.submit()
}