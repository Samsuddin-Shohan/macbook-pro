document.getElementById('memory-1').addEventListener('click',()=>{
    updateIndividualTotal('extra-memory',0)
    updateTotalPrice();
})
document.getElementById('memory-2').addEventListener('click',()=>{
    updateIndividualTotal('extra-memory',180)
    updateTotalPrice();
})

document.getElementById('storage-1').addEventListener('click',()=>{
    updateIndividualTotal('extra-storage',0)
    updateTotalPrice();
})
document.getElementById('storage-2').addEventListener('click',()=>{
    updateIndividualTotal('extra-storage',100)
    updateTotalPrice();
})
document.getElementById('storage-3').addEventListener('click',()=>{
    updateIndividualTotal('extra-storage',180)
    updateTotalPrice();
})

document.getElementById('delivary-1').addEventListener('click',()=>{
    updateIndividualTotal('extra-delivary',0)
    updateTotalPrice();
})
document.getElementById('delivary-2').addEventListener('click',()=>{
    updateIndividualTotal('extra-delivary',20)
    updateTotalPrice();
})
document.getElementById('basic-addon1').addEventListener('click',()=>{
    const promoInputField = document.getElementById('promo-input');
    const promoValue = promoInputField.value;
    promoInputField.value = '';
    if(promoValue==='shohan'){
        const totalText =  document.getElementById('total').innerText;
        let total = parseFloat(totalText);
        total = total - (total*.1);
        total = total.toFixed(2);
        document.getElementById('total').innerText = total;

    }
})
const updateIndividualTotal = (inputId,extra) =>{
    const extraDeviceField = document.getElementById(inputId);
    extraDeviceField.innerText = extra;
}
const updateTotalPrice = ()=>{
    const bestPriceText=document.getElementById('best-price').innerText;
    const bestPrice = parseInt(bestPriceText);
    const memoryPriceText=document.getElementById('extra-memory').innerText;
    const memoryPrice = parseInt(memoryPriceText);
    const storagePriceText=document.getElementById('extra-storage').innerText;
    const storagePrice = parseInt(storagePriceText);
    const delivaryPriceText=document.getElementById('extra-delivary').innerText;
    const delivaryPrice = parseInt(delivaryPriceText);
    const total = bestPrice+memoryPrice+storagePrice+delivaryPrice;
    document.getElementById('total-price').innerText = total;
    document.getElementById('total').innerText = total;
}

