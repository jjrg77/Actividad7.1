let op, num1, num2;

calculadora = (n1,n2) => {
    let result;
    switch (op) {
        case '+': result = n1 + n2;
         break;
        case '-': result = n1 - n2;
         break;
        case '*': result = n1 * n2;
         break;
        default: 
         return;
    }
    document.write(`<p>El resultado es: ${result}</p>`);
}

op = prompt("escribe la operación a realizar: +, -, *");
if (op == '*' || op == '+' || op == '-'){
    num1 = prompt("escribe número 1");
    num2 = prompt("escribe número 2");
    //pasamos a INT, ya que en prompt se introduce siempre STRINGS, y llamamos a la función
    calculadora(parseInt(num1), parseInt(num2));
}
else { document.write(`<p>la operación <strong>${op}</strong> no se puede realizar</p>`); }


    
    





