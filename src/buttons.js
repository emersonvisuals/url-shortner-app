const copyBtn = document.querySelectorAll('.btnResult');

copyBtn.forEach(item => {
    item.addEventListener('click', () => {
        console.log('clicked');
        item.innerHTML = 'Clicked!';
        item.classList.add('active');
    })
})

