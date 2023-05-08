const card = document.querySelector(".card"),
    qrInput = card.querySelector('.form input'),
    generateBtn =  card.querySelector(".form button"),
    qrImg = card.querySelector('.qr-code img');

generateBtn.addEventListener('click', ()=>{

    let qrValue = qrInput.value;

    if(!qrValue) return;

    generateBtn.innerText = 'Generating QR Code...'

    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&size=170x170&bgcolor=ADE4DB`;

    qrImg.addEventListener('load', ()=>{
        card.classList.add("active");
        generateBtn.innerText = 'Generate QR Code'
    })
});

qrInput.addEventListener('keyup', () =>{
    if(!qrInput.value) card.classList.remove('active');
});
