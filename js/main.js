const doc = document;
const todos = [
    'купити хліб',
    'зробити дз',
    'відпочити',
    '????',
    '...'
];

getTodosData = (todosArr) => {
    return todosArr.map((item) => {
        return {
            id: todosArr.indexOf(item) + 1,
            body: todosArr[todosArr.indexOf(item)],
            complited: false
        };
    });
}

console.log(getTodosData(todos));