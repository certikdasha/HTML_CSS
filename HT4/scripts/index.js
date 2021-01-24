//1
//
let letters = [];
let str = 'Backend As A Service';
let line = str.split(' ');
let allLeter = '';

line.forEach(function(item, index){
    letters[index] = item[0]
})

console.log(letters);

letters.forEach(function(item){
    allLeter += item; 
})

console.log(allLeter);


//2
//
var today = new Date().toLocaleString();

function dataType(index){
    if (isNaN(index)){
        console.log('Неверный тип данных');
    } else {
        console.log(today);
    }
}

dataType('xcvbnm,');
dataType(98);

//3
//
function consolePrint(){
    console.log(consolePrint);
    console.log(arguments);
}
consolePrint(10, false, "google");

//4
//

function userInfo(){
    if (this.registered){
        return 'Дата регистрации: ' + this.data;
    } else {
        return 'Незарегистрированный пользователь: ' + this.name; 
    }
}

let userOne = {
    name: 'Daria', 
    registered: true,
    data: '01.01.21',
    getInfo:userInfo,
}

let userTwo = {
    name: 'Daniil', 
    registered: false,
    data: '-',
    getInfo: userInfo,
}

const infoOne = userOne.getInfo();
console.log(infoOne);

const infoTwo = userTwo.getInfo();
console.log(infoTwo);


//5
//

var users = {
    14587: {
            name: "Ivan",
            email: "ivan78@gmail.com"
    },
    28419: {
            name: "Georg",
            email: "georg.klep@gmail.com"
    },
    41457: {
            name: "Stephan",
            email: "stephan.borg@gmail.com"
    }
}
var posts = {
    7891451: {
            author: 14587,
            text: "Imagine we can encapsulate these secondary responsibilities in functions"
    },
    7891452: {
            author: 28419,
            text: `В конструкторе ключевое слово super используется как функция, вызывающая родительский конструктор. 
                    Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора. 
                    Ключевое слово super также может быть использовано для вызова функций родительского объекта`
    },
    7891453: {
            author: 28419,
            text: `DOM не обрабатывает или не вынуждает проверять пространство имен как таковое. 
                    Префикс пространства имен, когда он связан с конкретным узлом, не может быть изменен`
    },
    7891454: {
            author: 14587,
            text: "Ключевое слово super используется для вызова функций, принадлежащих родителю объекта"
    }
}
var comments = {
    91078454: {
            postId: 7891451,
            author: 28419,
            text: `The static String.fromCharCode() method returns a string created 
                    from the specified sequence of UTF-16 code units`
    },
    91078455: {
            postId: 7891451,
            author: 41457,
            text: `HTML элемент <template> — это механизм для отложенного рендера клиентского контента, 
                    который не отображается во время загрузки, но может быть инициализирован при помощи JavaScript`
    },
    91078457: {
            postId: 7891452,
            author: 41457,
            text: "Глобальный объект String является конструктором строк, или, последовательностей символов"
    },
    91078458: {
            postId: 7891452,
            author: 14587,
            text: `The Element.namespaceURI read-only property returns the namespace URI of the element, 
                    or null if the element is not in a namespace`
    }
}

function getCurrentPostComments ( postId ) {
    var res = []

    for (let key in comments){
        if (comments[key].postId == postId) {
            let authorId = comments[key].author
            for (let n in users){
                if (n == authorId) {
                    res.push({
                        name: users[n].name,
                        text: comments[key].text,
                    })
                }
            }
        }
    }
    return res
}


console.log ( getCurrentPostComments ( 7891451 ) );