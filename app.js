function updateProductNumber(product,isIncreasing,price){
const productInput = document.getElementById(product+'-input');
const productNumber = parseInt(productInput.value);
if(isIncreasing){
 productInput.value = productNumber + 1;
}else if(productNumber > 0){
 productInput.value = productNumber - 1;
}
const noOfproduct = productInput.value;
const productsPrice = document.getElementById(product+'-total');
productsPrice.innerText = noOfproduct * price;
calculate();
}
function getInputValue(product){
const productInputNumber = document.getElementById(product+'-input').value;
const noOfproduct = parseInt(productInputNumber)
return noOfproduct;
}
function calculate(){
const phoneTotal = getInputValue('phone') * 1219;
const caseTotal = getInputValue('case') * 59;
const subTotal = phoneTotal + caseTotal;
const tax = subTotal/10;
const totalPrice = subTotal + tax;
document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax-amount').innerText = tax;
document.getElementById('total-price').innerText = totalPrice;
}
document.getElementById('phone-plus').addEventListener('click',function(){
 updateProductNumber('phone',true,1219);
})
document.getElementById('phone-minus').addEventListener('click',function(){
updateProductNumber("phone",false,1219);
})
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", true, 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", false, 59);
});