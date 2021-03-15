let nota = prompt('Dime tu nota');

if (nota >= 5 && nota <6) {
    alert(`Has aprobado por los pelos, tu nota ha sido ${nota}`);
}
else if (nota >= 6 && nota <7) {
    alert(`Has aprobado, tu nota ha sido ${nota}`);
}
else if (nota >= 7 && nota <9) {
    alert(`Enhorabuena, has conseguido un notable (tu nota ha sido ${nota})`);
}
else if (nota >= 9 && nota <= 10) {
    alert(`Sobresaliente!!!, tu nota ha sido ¡${nota}!`);
}
else if (nota < 5) {
    
    alert(`Has suspendido, tu nota ha sido ${nota}`);
}
else{
    alert(`entrada no válida`);
}
