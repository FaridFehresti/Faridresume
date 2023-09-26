




document.querySelector('.card__number__input').oninput = () => {
    const cardNumberInput = document.querySelector('.card__number__input');
    const cardNumberBox = document.querySelector('.card__number__box');
    const cardNumber = cardNumberInput.value;

    
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');

    
    const formattedCardNumber = cleanedCardNumber.replace(/(.{4})/g, '$1 ');

    cardNumberBox.innerText = formattedCardNumber;
};



document.querySelector('.card__holder__input').oninput = () => {
    document.querySelector('.card__holder__name').innerText = document.querySelector('.card__holder__input').value;
};

document.querySelector('.month__input').oninput = () => {
    document.querySelector('.exp__month').innerText = document.querySelector('.month__input').value;
};

document.querySelector('.year__input').oninput = () => {
    document.querySelector('.exp__year').innerText = document.querySelector('.year__input').value;
};

document.querySelector('.cvv__input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
};

document.querySelector('.cvv__input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
};

document.querySelector('.cvv__input').oninput = () => {
    document.querySelector('.cvv__box').innerText = document.querySelector('.cvv__input').value;
};

document.querySelector('.submit__btn').onclick = (event) => {
    event.preventDefault(); 

    const cardNumber = document.querySelector('.card__number__input').value;
    const cardHolder = document.querySelector('.card__holder__input').value;
    const expirationMonth = document.querySelector('.month__input').value;
    const expirationYear = document.querySelector('.year__input').value;
    const cvv = document.querySelector('.cvv__input').value;

    
    localStorage.setItem('cardNumber', cardNumber);
    localStorage.setItem('cardHolder', cardHolder);
    localStorage.setItem('expirationMonth', expirationMonth);
    localStorage.setItem('expirationYear', expirationYear);
    localStorage.setItem('cvv', cvv);

    
    document.querySelector('form').reset();
};
//mobile
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
