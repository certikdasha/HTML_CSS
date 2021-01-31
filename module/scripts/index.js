// console.log(1)

// setTimeout(
//     function(){
//         console.log(3)  
//     },
//     2000
// )

// setInterval(

// )
// console.log(2)

const url = 'https://jsonplaceholder.typicode.com';//ссылка к серверу

const usersURL = url + '/users'; //ссылка на юзеров

// const getUsersReq = fetch(usersURL);

// getUsersReq.then(
//     function(res){
//         res.json().then(
//             function(parsedRes) {
//                 console.log(parsedRes)
//             }
//         )
//     }
// )
let users = [];//список юзеров

const getUsers = async () => {
    const getUsersReq = await fetch(usersURL);  // http запрос с ожиданием получим ответ
    const data = await getUsersReq.json();  // преобразование данных
    users = data;  // заносим юзеров в массив
    // getUsersReq
    // .then((res) => {
    //         res.json()
    //         .then((parsedRes) => {
    //                 console.log(parsedRes)
    //         })
    // })
}

const userListElem = document.getElementById('user-list');  // генерируем список элементов юзеров с сервера
const start = async () => {
    await getUsers();  // ожидание получения функции

    showUsers(users);  // вызов ф-ции показа юзеров с передачей пользователей
    addNewUserButtonHandler();  // добавление кнопки

    // const element = document.getElementById('test-id');
    // const spanElements = document.getElementsByClassName('text');
    // console.log(element, spanElements);
}

start();
//замыкание

    // function getNumber(){
    //     let number = 0;

    //     return () => {
    //         return ++number;
    //     }
    // }
    // const newFunc = getNumber();

    // let newNumb = newFunc();
    
    // console.log(newNumb);  // 1

    // let newNumb = newFunc();

    // console.log(newNumb);  // 2


