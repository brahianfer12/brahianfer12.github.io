function cargarReloj(){
 
    
    var fechahora = new Date();
    var hora = fechahora.getHours(); 
    var minuto = fechahora.getMinutes(); 
    var segundo = fechahora.getSeconds(); 
 
   
    var meridiano = "AM";
    
    
  
    if(hora == 0){
 
        hora = 12;
        
    }
    
    
    if(hora > 12) {
 
        hora = hora - 12;
 
       
        meridiano = "PM";
 
    }
    
   
    hora = (hora < 10) ? "0" + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;
    
    
    var tiempo = hora + ":" + minuto + ":" + segundo + " " + meridiano;    
    document.getElementById("relojnumerico").innerText = tiempo;
    document.getElementById("relojnumerico").textContent = tiempo;
 
    
    setTimeout(cargarReloj, 500);
    
}
 

cargarReloj();

function validacionform(event){
    event.preventDefault()
    var nombreRegex = /^[A-Za-záéíúó\s]+$/;
    var apellidoRegex = /^[A-Za-záéíúó\s]+$/;
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telefonoRegex = /^[0-9+-]+$/;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;

    if (!nombreRegex.test(nombre)) {
        document.getElementById("nombre").classList.add("validar");
        return;
      } else {
        document.getElementById("nombre").classList.remove("validar");
      }
    
      if (!apellidoRegex.test(apellidos)) {
        document.getElementById("apellidos").classList.add("validar");
        return;
      } else {
        document.getElementById("apellidos").classList.remove("validar");
      }
    
      if (!correoRegex.test(correo)) {
        document.getElementById("correo").classList.add("validar");
        return;
      } else {
        document.getElementById("correo").classList.remove("validar");
      }
    
      if (!telefonoRegex.test(telefono)) {
        document.getElementById("telefono").classList.add("validar");
        return;
      } else {
        document.getElementById("telefono").classList.remove("validar");
      }
    alert("Formulario enviado:\n\nnombre: "+ nombre +" \napellido: "+apellidos+" \ncorreo:"+ correo +" \ntelefono :" +telefono);
}



