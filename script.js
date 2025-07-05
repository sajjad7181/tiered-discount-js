function discountPrice() {

    let inputPrice = parseFloat(document.getElementById('totalPrice').value);
    let resultDiv = document.getElementById('result');

    const minPrice = 100;
    const maxDiscount = 25;
    const discountStep = 3;

    if (isNaN(inputPrice)) {
        resultDiv.innerText = "Please select a valid number";
        return;
    }

    if (inputPrice < minPrice + 10) {
        resultDiv.innerText = " No discount";
        return;
    }

    const discount = Math.floor((inputPrice - minPrice) / 10) * discountStep;
    if (discount > maxDiscount) {
        resultDiv.innerText = "Your discount is: " + maxDiscount + "%";
        return;
    }


    resultDiv.innerText = "Your discount is: " + discount + "%";
    return;
}

