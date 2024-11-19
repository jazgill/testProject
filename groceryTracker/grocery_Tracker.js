let grocerAmount1;
let grocerAmount2;
let grocerAmount3;

function amountTotal(){
    grocerAmount1 = parseFloat(document.getElementById('grocery1').value);
    grocerAmount2 = parseFloat(document.getElementById('grocery2').value);
    grocerAmount3 = parseFloat(document.getElementById('grocery3').value);

    let totalAmount = grocerAmount1 + grocerAmount2 + grocerAmount3;
    document.getElementById('result').innerText=`The total amount is:$ ${totalAmount}`;
}
