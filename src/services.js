export function somar(a,b) {
    return a + b;
}

export function dobro(n) {
    return n * 2;
}

export function media(n1,n2,n3){
    return (n1+n2+n3) /3;
}

export function temperatura(temp){
    let msg = true;
    if(temp >= 38)
    {
        msg = true;
    }
    else{
        msg = false;
    }
    return msg;
}

