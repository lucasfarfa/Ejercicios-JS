function showTime() {
    /** Hora del sistema **/
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // Agrega el 0 adelante
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = `${h}:${m}:${s}`;
    document.querySelector('.clock').innerText = time;
    document.querySelector('.clock').innerHTML = time;
    setTimeout(showTime, 1000); // Cada 1 segundo imprime la funcion

}
showTime();
