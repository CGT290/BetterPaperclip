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