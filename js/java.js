window.onscroll = function(){

    if(document.documentElement.scrollTop){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
    

}

function validacion(){
    var nombre, email, fono, fechan,contra, direccion;
    nombre= document.getElementById('nombre').value;
    email = document.getElementById('email').value; 
    fono = document.getElementById('telefono').value;
    fechan = document.getElementById('fechan').value;
    contra = document.getElementById('contra').value;
    direccion =document.getElementById('direccion').value;
   
    expresion= /\w+@\.+[a-z]/;

    if(nombre === "" || email === "" || fono === "" || fechan === "" || contra === "" || direccion === ""){
        alert("Todos los campos son obligatorio");
        return false
    }
    else if(nombre.length>70){
        alert("El nombre es muy largo");
        return false
    }
    else if(email.length>40){
        alert("El email es muy largo")
    }
    else if(fono.length>10){
        alert("El telefono es muy largo")
    }
    else if(!expresion.test(correo)){
        alert("El correo no es válido")
    }

    else if(contra.length<6){
        alert("No puede tener menos de 6 caracteres")
    }
    else if(direccion.length>40){
        alert("Direccion muy larga")
    }
    else if(isNaN(fono)){
        alert("El teléfono ingresado no es un número")
    }
    return false

}

function validacion2(){
    var nombre, email, fono,  direccion, mensaje;
    nombre= document.getElementById('nombre').value;
    email = document.getElementById('email').value; 
    fono = document.getElementById('telefono').value;
    direccion =document.getElementById('direccion').value;
    mensaje = document.getElementById('mensaje').value;

    if(nom === "" || email === "" || fono === "" ||  direccion === "" || mensaje === ""){
        alert("Todos los campos son obligatorio");
        return false
    }
    else if(nombre.length>70){
        alert("El nombre es muy largo");
        return false
    }
    else if(email.length>40){
        alert("El email es muy largo")
    }
    else if(!expresion.test(correo)){
        alert("El correo no es válido")
    }
    else if(fono.length>10){
        alert("El telefono es muy largo")
    }
    else if(isNaN(fono)){
        alert("El teléfono ingresado no es un número")
    }
    else if(direccion.length>40){
        alert("Direccion muy larga")
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
