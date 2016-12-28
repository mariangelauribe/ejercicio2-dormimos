function calcular()
{
    var weekday = parseInt(document.getElementById("weekday").value);
    var vacation = document.getElementById("vacation").value;
    
    var salida = document.getElementById("salida");
    var salida2 = document.getElementById("salida2");
    var isVacation = false;
    var isWeekday = false;
    
	if (vacation == "1") {
        isVacation = true;
    }
    if (weekday < 6) {
        isWeekday = true;
    }

	if (isVacation) {
        salida.innerHTML = "1";
        salida2.innerHTML = "¡Hoy puedes dormir!"
    } else {
        if (isWeekday) {
            salida.innerHTML = "0";
            salida2.innerHTML = "¡Hoy no puedes dormir!"
        }
        else {
            salida.innerHTML = "1";
            salida2.innerHTML = "¡Hoy puedes dormir!"
        }
    }
}