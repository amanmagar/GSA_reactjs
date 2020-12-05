function circumOfCircle() {
    let rad = parseFloat(document.getElementById('txtRadius').value)
    let circum = rad * Math.PI *2
    document.getElementById("result").innerHTML = "The cicrumference of the circle is " + circum;
}