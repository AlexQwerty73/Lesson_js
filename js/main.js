const doc = document;
const todos = [
    'купити хліб',
    'зробити дз',
    'відпочити',
    '????',
    '...'
];

getTodosData=(todosArr)=>{
    const todosArrObj = [];

    for (let item of todosArr) {
        todosArrObj.push(
            {
                id: todosArr.indexOf(item) + 1,
                body: todosArr[todosArr.indexOf(item)],
                complited: false
            }
        );
    }

    return todosArrObj;
}

console.log(getTodosData(todos));