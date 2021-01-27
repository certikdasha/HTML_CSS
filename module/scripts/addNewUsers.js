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

    console.log(newUser);
}

function onButtonClik(event){
    const form = document.createElement('form');

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


function addNewUserButtonHandler (){
    const buttonElement = document.getElementById('add-new-user');

    buttonElement.onclick = onButtonClik;
}