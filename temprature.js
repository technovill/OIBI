document.addEventListener('DOMContentLoaded', function () {
    const farenheitInput = document.getElementById('farenhite');
    const centigradeInput = document.getElementById('centigrade');
    const kelvinInput = document.getElementById('kelvin');
    const resetButton = document.getElementById('reset');

    // Add input event listeners
    farenheitInput.addEventListener('input', convertFromFarenheit);
    centigradeInput.addEventListener('input', convertFromCentigrade);
    kelvinInput.addEventListener('input', convertFromKelvin);

    // Add reset button click event listener
    resetButton.addEventListener('click', resetInputs);

    function convertFromFarenheit() {
        const farenheitTemp = parseFloat(farenheitInput.value);
        const centigradeTemp = (farenheitTemp - 32) * (5 / 9);
        const kelvinTemp = centigradeTemp + 273.15;

        centigradeInput.value = centigradeTemp.toFixed(2);
        kelvinInput.value = kelvinTemp.toFixed(2);
    }

    function convertFromCentigrade() {
        const centigradeTemp = parseFloat(centigradeInput.value);
        const farenheitTemp = (centigradeTemp * 9 / 5) + 32;
        const kelvinTemp = centigradeTemp + 273.15;

        farenheitInput.value = farenheitTemp.toFixed(2);
        kelvinInput.value = kelvinTemp.toFixed(2);
    }

    function convertFromKelvin() {
        const kelvinTemp = parseFloat(kelvinInput.value);
        const centigradeTemp = kelvinTemp - 273.15;
        const farenheitTemp = (centigradeTemp * 9 / 5) + 32;

        centigradeInput.value = centigradeTemp.toFixed(2);
        farenheitInput.value = farenheitTemp.toFixed(2);
    }

    function resetInputs() {
        farenheitInput.value = '';
        centigradeInput.value = '';
        kelvinInput.value = '';
    }
});
