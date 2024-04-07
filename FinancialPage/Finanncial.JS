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
    
    var cardNumber = document.getElementById("cardNumber").value;
    var expirationDate = document.getElementById("expirationDate").value;
   
    if (cardNumber.length !== 16 || isNaN(parseInt(cardNumber))) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }
    // Validate expiration date
    var currentDate = new Date();
    if (expirationDate <= currentDate) {
        alert('Please enter a future expiration date.');
        return;
    }

    // Validate CVV
    if (cvv.length !== 3 || isNaN(parseInt(cvv))) {
        alert('Please enter a valid 3-digit CVV.');
        return;
    }

    var maskedCardNumber = cardNumber.replace(/^\d{12}/, function(match) {
        return match.replace(/\d/g, "*");
    });

    // Construct the new card content
    var newCardContent = "<h5>Card Information</h5>" +
                          "<p><strong>Card Number:</strong> " + maskedCardNumber + "</p>" +
                          "<p><strong>Expiration Date:</strong> " + expirationDate + "</p>";

    // Replace the content of the saved card container
    document.getElementById("savedCard").innerHTML = newCardContent;

});

// Set default values for card number, expiration date, and cvv
document.getElementById("cardNumber").value = "**** **** **** 1234";
document.getElementById("expirationDate").value = "02/26";