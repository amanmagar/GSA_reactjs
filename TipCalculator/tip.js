function CalcTip(inputAmt,) {
    let amt = parseInt(document.getElementById('inputAmt').value);
    let tip = parseInt(document.getElementById('inputTip').value);
       if (tip > 100) {
           alert("Please input the correct value in tip")
       } else {
        let tipamt = parseInt(tip/100 * amt);``
        document.getElementById('tipAmt').innerHTML = "The tip that is provided is: Rs " + tipamt;
       }
}