let person = prompt("Хто ти?");

// if (person == "admin") {
//     console.log('admin');
// } else if (person == "user") {
//     console.log('user');
// }

switch(person){
    case "admin":
        console.log('admin');
        break;
    case "user":
        console.log('user');
        break;
    default:
        console.log('?????');
        break
}