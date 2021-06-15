window.onscroll = function() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    } else {
        (document.documentElement.scrollTop > 100)
        document.querySelector('.go-top-container').classList.remove('show');
    }

}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function validacion(){
    var nombre, email, fono, fechan,contra, direccion;
    nombre= document.getElementById('nombre').value;
    email = document.getElementById('email').value; 
    fono = document.getElementById('fono').value;
    fechan = document.getElementById('fechan').value;
    contra = document.getElementById('contra').value;
    direccion =document.getElementById('direccion').value;
   
    var emailR = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(nombre === ""){
        alert("Ingrese su nombre");
        return false
    }
    if( email === ""){
        alert("Ingrese su email");
        return false
    }
    if(!emailR.test(email)){
        alert("El correo no es válido");
        return false
    }
    
    if(fono === ""){
        alert("Ingrese su telefono");
        return false
    }
    if(fono.length<9){
        alert("Minimo 9 caracteres");
        return false
    }
    if(fono.length>9){
        alert("Max 9 caracteres");
        return false
    }
    if(isNaN(fono)){
        alert("El teléfono ingresado no es un número");
        return false
    }
    if(fechan === "" ){
        alert("Ingrese su fecha de nacimiento");
        return false
    }
    if( contra === ""){
        alert("Ingrese contraseña");
        return false  
    }
    if(contra.length<6){
        alert("Minimo 6 caracteres");
        return false
    }
    if( direccion === ""){
        alert("Ingrese su direccion");
        return false
    }
 

}

function validacion2(){
    var zapa,talla, email, fono,envio,  direccion, motivo ;
    zapa= document.getElementById('zapatilla').value;
    talla= document.getElementById('talla').value;
    email = document.getElementById('email').value; 
    fono = document.getElementById('telefono').value;
    envio = document.getElementById('envio').value; 
    direccion =document.getElementById('direccion').value;
    motivo = document.getElementById('motivo').value;
    
    

    var emailR = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(zapa === ""){
        alert("Ingrese modelo de zapatilla");
        return false
    }
    if(talla === ""){
        alert("Ingrese la talla de su zapatilla");
        return false
    }
    if(talla!="8" && talla!="8.5" && talla!="9" && talla!="9.5" && talla!="10" && talla!="10.5" && talla!="11" && talla!="11.5" && talla!="12"){
        alert("Solo pueden ser 8 /8,5 /9 /9,5 /10 /10,5 /11 /11,5 /12");
        return false

    }
    if( email === ""){
        alert("Ingrese su email");
        return false
    }
    if(!emailR.test(email)){
        alert("El correo no es válido");
        return false
    }
    
    if(fono === ""){
        alert("Ingrese su telefono");
        return false
    }
    if(fono.length<9){
        alert("Minimo 9 caracteres");
        return false
    }
    if(fono.length>9){
        alert("Max 9 caracteres");
        return false
    }
    if(isNaN(fono)){
        alert("El teléfono ingresado no es un número");
        return false
    }
    if(envio === ""){
        alert("Ingrese su codigo de envio")
        return false
    }
    if(envio.length<10){
        alert("Codigo de envio no valido minimo 10 caracteres");
        return false
    }
    
    if( direccion === ""){
        alert("Ingrese su direccion");
        return false
    }
    if(motivo === ""){
        alert("Ingrese el motivo de su devolucion")
        return false
    }
    

}

function iniciarMap(){
    var coord = {lat:-33.4179935 ,lng: -70.6085841};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
