function grupo( ){
    let g=[], t=[], u=[], c=0, n=0;
    n = parseInt(prompt("Ingrese el número de grupos que se van a analizar:"));
    while (c<n){
    g = parseInt(prompt("ingrese el número de personas del grupo:"));
    if (g[c]>=100){
        u[c]=5;
        t[c]=g[c]*u[c];
    } 
    else if (g>=50 && g[c]<=99){
        u[c]=6;
        t[c]=g[c]*u[c];
    }
    else if (g[c]>=30 && g[c]<=49){
        u[c]=8;
        t[c]=g[c]*u[c];
    }
    else {
        t[c]=300;
    }
    alert("el precio por usuario es de:" + u[c]);
    alert("el precio total es de:" + t[c]);
}
    debugger
}