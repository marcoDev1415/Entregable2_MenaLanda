import { add_user } from '../service/add_user.js'

const ButtonForm = document.getElementById('Submit');
let usuarios = [];

ButtonForm.addEventListener('click', (e) =>{
    e.preventDefault();
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);


    add_user(firstName,lastName,email,password,confirmPassword)


    document.getElementById('first_name').value = '';
    document.getElementById('last_name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm_password').value = '';


})

