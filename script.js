function relogioDigital() { 
    var display = document.querySelector('.display');

    var hour = new Date();

    var horario = hour.getHours() + ':' + hour.getMinutes() + ':' + hour.getSeconds();

    display.textContent = horario;

}

setInterval(relogioDigital, 1000);





console.log(horario);