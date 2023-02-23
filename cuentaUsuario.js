//cuenta de usuario, consulta de saldo, retiros y depositos


// Creamos la clase "Usuario"
class Usuario {
    constructor (cuenta, password, nombre){ //atributos de la clase
        this.cuenta = cuenta;
        this.password = password;
        this.nombre = nombre;
    }
}
//agregamos usuarios
usuario1 = new Usuario("AZHA01", "pass01", "Juan Sanchez");
usuario2 = new Usuario("IZMA02", "pass02", "Maria Beltran");
usuario3 = new Usuario("VCMB03","pass03", "Karla Ramos");

//impresion datos de usuarios
console.log(usuario1.nombre);
console.log(usuario2.cuenta);
console.log(usuario3);