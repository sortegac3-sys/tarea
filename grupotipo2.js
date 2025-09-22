function grupo( ){
    let g=0, t=0, u=0, c=0, n=0;
    n = parseInt(prompt("Ingrese el número de grupos que se van a analizar:"));
    while (c<n){
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
}
    debugger
}