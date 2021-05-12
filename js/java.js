function validacion(){
    var nom, email, fono, contra, contra2, direccion, fechan;
    nom= document.getElementById('nombre').value;
    email = document.getElementById('email').value; 
    fono = document.getElementById('telefono').value;
    fechan = document.getElementById('fechan').value;
    contra = document.getElementById('contra').value;
    direccion =document.getElementById('direccion').value;
   

    if(nom === "" || email === "" || fono === "" || contra === "" || direccion === "" || fechan === ""){
        alert("Todos los campos son obligatorio");
        return false
    }
    else if(nombre.length>50){
        alert("El nombre es muy largo");
        return false
    }
    return false
}

function validacion2(){
    var nom, email, fono,  direccion, mensaje;
    nom= document.getElementById('nombre').value;
    email = document.getElementById('email').value; 
    fono = document.getElementById('telefono').value;
    direccion =document.getElementById('direccion').value;
    mensaje = document.getElementById('mensaje').value;

    if(nom === "" || email === "" || fono === "" ||  direccion === "" || mensaje === ""){
        alert("Todos los campos son obligatorio");
        return false
    }
    else if(nombre.length>50){
        alert("El nombre es muy largo");
        return false
    }


}