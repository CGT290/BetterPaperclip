document.getElementById('addFundsBtn').addEventListener('click',function(){
var fundingInfo = document.getElementById('FundingInfo');

if(fundingInfo.style.display === 'none'){
    fundingInfo.style.display = 'block';

}else{
    fundingInfo.style.display = 'none';
}

});

document.querySelectorAll('input[type="number"]').forEach(input =>{
    input.oninput =() =>{
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    };
});


document.getElementById("addCardBtn").addEventListener("click", function() {
    var cardNumber = document.getElementById("cardNumber").value.trim();
    var expirationDate = document.getElementById("ed").value;
    var cvv = document.getElementById("cvv").value.trim();
    
    var cardNumberRegex = /^[0-9]{16}$/;
    var cvvRegex = /^\d{3}$/;
    var expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    console.log(cardNumber, cvv, expirationDate);

    if (!cardNumberRegex.test(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }

    if (!cvvRegex.test(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return;
    }

    if (!expirationDateRegex.test(expirationDate)) {
        alert('Please enter a valid expiration date in the format MM/YY.');
        return;
    }

    var expirationDateParts = expirationDate.split('/');
    var expirationMonth = parseInt(expirationDateParts[0], 10);
    var expirationYear = parseInt(expirationDateParts[1], 10) + 2000;

    var currentDate = new Date();
    var expirationDateObj = new Date(expirationYear, expirationMonth - 1);
    if (expirationDateObj <= currentDate) {
        alert('Please enter a future expiration date.');
        return;
    }

    var maskedCardNumber = cardNumber.replace(/^\d{12}/, function(match) {
        return match.replace(/\d/g, "*");
    });

    var newCardContent = "<h5>Card Information</h5>" +
                          "<p><strong>Card Number:</strong> " + maskedCardNumber + "</p>" +
                          "<p><strong>Expiration Date:</strong> " + expirationDate + "</p>";

    document.getElementById("savedCard").innerHTML = newCardContent;

    document.getElementById("cardNumber").value = "";
    document.getElementById("expirationDate").value = "";
    document.getElementById("cvv").value = "";
});

