function VerContra(){
        var usuario = document.getElementById("txtContraseña");
        if (usuario.type === "password") {
            usuario.type = "text";  
        } else {
            usuario.type = "password";  
        }
    }
    