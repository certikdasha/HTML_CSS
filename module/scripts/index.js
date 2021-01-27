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

const url = 'https://jsonplaceholder.typicode.com';

const usersURL = url + '/users';

const getUsersReq = fetch(usersURL);

// getUsersReq.then(
//     function(res){
//         res.json().then(
//             function(parsedRes) {
//                 console.log(parsedRes)
//             }
//         )
//     }
// )
let users = [];

const getUsers = async () => {
    const getUsersReq = await fetch(usersURL);
    const data = await getUsersReq.json();
    users = data;
    // getUsersReq
    // .then((res) => {
    //         res.json()
    //         .then((parsedRes) => {
    //                 console.log(parsedRes)
    //         })
    // })
}
const userListElem = document.getElementById('user-list')
const start = async () => {
    await getUsers();

    showUsers(users);
    addNewUserButtonHandler();

    // const element = document.getElementById('test-id');
    // const spanElements = document.getElementsByClassName('text');
    // console.log(element, spanElements);
}

//замыкание

    // function getNumber(){
    //     let number = 0;

    //     return () => {
    //         return ++number;
    //     }
    // }
    // const newFunc = getNumber();

    // let newNumb = newFunc();
    
    // console.log(newNumb);//1

    // let newNumb = newFunc();

    // console.log(newNumb);//2


start();