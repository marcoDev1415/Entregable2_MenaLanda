function validator(email, password, password_two) {
    if (password !== password_two) {
        alert("La contraseña no es la misma");
        return false;
    }
    if (email.indexOf('@') === -1) {
        alert("Email no válido");
        return false;
    } if(email === null){
        alert("Email vacio");
        return false;
    }
    return true;
}



export function add_user(first_name,last_name,email,password,confirm_password){
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    if (validator(email, password, confirm_password)) { 


        usuarios.push(
            { firstName: first_name,
              lastName: last_name,
              email: email,
              password:password }
        );

        localStorage.setItem('usuarios',JSON.stringify(usuarios))
        console.log("Se agrego el usuario")
        alert("Usuario agregado correctamente");

    }
}
