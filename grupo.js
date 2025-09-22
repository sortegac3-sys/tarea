//Una licación de streamin que cobra segun estos numeros de usuarrios
//>=100->5 c/u
//50-99->6 c/u
//30-49->8 c/u
//<30->300 fijo
//calcular el costo total y el costo por usuario para un grupo
function grupo( ){
    let g=0, t=0, u=0;
    g = parseInt(prompt("ingrese el número de personas del grupo:"));
    if (g>=100){
        u=5;
        t=g*u;
    } 
    else if (g>=50 && g<=99){
        u=6;
        t=g*u;
    }
    else if (g>=30 && g<=49){
        u=8;
        t=g*u;
    }
    else {
        t=300;
    }
    alert("el precio por usuario es de:" + u);
    alert("el precio total es de:" + t);
    debugger
}