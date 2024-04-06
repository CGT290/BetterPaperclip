document.getElementById('addFundsBtn').addEventListener('click',function(){
var fundingInfo = document.getElementById('FundingInfo');

if(fundingInfo.style.display === 'none'){
    fundingInfo.style.display = 'block';

}else{
    fundingInfo.style.display = 'none';
}

});