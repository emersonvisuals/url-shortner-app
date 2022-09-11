function warning() {
    const link = document.querySelector('input.textBox');
    const errorMessage = document.querySelector('.warning');
    const linkPlaceholder = document.querySelector('input.textBox::placeholder');

    if (link.value === '') {
        link.classList.add('active')
        errorMessage.classList.add('active')
        linkPlaceholder.classList.add('active');
    } else {
        link.classList.remove('active');
        errorMessage.classList.remove('active');
        linkPlaceholder.classList.remove('active');
    }
}

export default warning