const link = document.querySelector('input.textBox');
const errorMessage = document.querySelector('.warning')
const btn = document.querySelector('button.shortenIt');

btn.addEventListener('click', () => {
    let linkPlaceholder = document.querySelector('input.textBox::placeholder')

    if (link.value === '') {
        link.classList.add('active')
        errorMessage.classList.add('active')
        linkPlaceholder.classList.add('active');
    } else {
        link.classList.remove('active');
        errorMessage.classList.remove('active');
        linkPlaceholder.classList.remove('active');
    }
})