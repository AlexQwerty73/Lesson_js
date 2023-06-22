const doc = document;
const todos = [
    'купити хліб',
    'зробити дз',
    'відпочити',
    '????',
    '...'
];

getTodosData = (todosArr) => {
    return todosArr.map((item, index) => {
        return {
            id: index + 1,
            body: item,
            complited: false
        };
    });
}

console.log(getTodosData(todos));
