//для onButtonClik данные
function cerateFormField(config){
    const{
        name, 
        text, 
        placeholder 
    } = config;

    const lable = document.createElement('div');
    lable.textContent = text;
    lable.className = 'label';
    
    const input = document.createElement('input');
    input.name = name;
    input.placeholder = placeholder;

    const wrapper = document.createElement('div');
    wrapper.className = 'form-field';

    wrapper.appendChild(lable);
    wrapper.appendChild(input);
    
    return wrapper;
}
//for form generation
const FORM_CONFIG = [
    {
        name: 'name',
        text: 'Name',
        placeholder: 'Enter your user name',
    },
    {
        name: 'email',
        text: 'Email',
        placeholder: 'Enter your user email',
    },
    {
        name: 'website',
        text: 'Website',
        placeholder: 'Enter your user website',
    },

]
//for buttons in form
const BUTTON_CONFIG = [
    {
        type: 'button',
        text: 'Cancel',
        color: 'danger',
    },
    {
        type: 'submit',
        text: 'Save',
        color: 'success',
    },
]

function createButton (config) {
    const {
        type,
        text,
        color
    } = config

    const button = document.createElement('button')
    button.type = type;
    button.textContent = text;
    button.className = `button-${color}`

    return button
}

// function checkForm(warning) {
//     const errorPrint = document.createElement('div');
//     errorPrint.className = 'error-enter'
//
//     const warningText = document.createElement('div');
//     warningText.textContent = `Your ${warning} smaller 4 elements`;
//
//     errorPrint.appendChild(warningText);
//
// }
let newUserInfo = {}

//ввод с формы
function onSubmit(event){
    event.preventDefault()

    const elements = event.target.elements
    // const {
    //     target:{
    //         elements
    //     }
    // } = event

    const newUser = {
        name: elements.name.value,
        email: elements.email.value,
        website: elements.website.value,
        id: Math.random(),
    }
/////////////////////////////////////////////////////////////
// проверка значений в форме
    const forma = document.getElementById('form-to-add');
    if (newUser.name.length < 4 || newUser.email.length < 4 || newUser.website.length < 4) {  // проверка на длину строк в форме
        if (newUser.name.length == 0 || newUser.email.length == 0 || newUser.website.length == 0){  // проверка на наличие --//--

            const warning = document.createElement('div');
            warning.textContent = 'Not all fields are filled';
            warning.className = 'warning-form';

            forma.appendChild(warning);
            forma.prepend(warning);
        }
    }else{
        newUserCard(newUser);
        forma.remove();

    }


}



//нажатие кнопки
function onButtonClik(event){
    const forma = document.getElementById('form-to-add');

    if (forma){
        return
    }else{

        const form = document.createElement('form');
        form.id = 'form-to-add'

        FORM_CONFIG.forEach(config => {
            const formField = cerateFormField(config);

            form.appendChild(formField);
        })
        const addUserButton = event.currentTarget;

        const buttonsWrapper = document.createElement('div');
        buttonsWrapper.className = 'buttons-wrapper';

        BUTTON_CONFIG.forEach(config => {
            const button = createButton(config);

            if (config.type === 'button'){
                button.onclick = () => {
                    form.remove()
                }
            }

            buttonsWrapper.appendChild(button);
        })


        form.appendChild(buttonsWrapper)

        form.onsubmit = onSubmit

        addUserButton.after(form);
    }
}

//работа с кнопкой
function addNewUserButtonHandler (){
    const buttonElement = document.getElementById('add-new-user');


    buttonElement.onclick = onButtonClik;



}
