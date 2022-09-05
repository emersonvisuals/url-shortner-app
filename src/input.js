const shortenItBtn = document.querySelector('button.shortenIt');
const inputResultWrapper = document.querySelector('.inputResultContainer');

// defining structure for URl clicks
shortenItBtn.addEventListener('click', () => {
    const ul = inputResultWrapper.appendChild(document.createElement('ul'));
    ul.classList.add('inputUl');
    const li = ul.appendChild(document.createElement('li'));
    li.classList.add('inputLi');
    const pOne = li.appendChild(document.createElement('p'));
    pOne.classList.add('inputValue');
    pOne.innerText = 'https//www.frontendmentor.io';
    const div = li.appendChild(document.createElement('div'));
    div.classList.add('inputContents');
    const result = div.appendChild(document.createElement('p'));
    result.classList.add('result');
    result.innerText = 'https://relink/k4lKyk';
    const btnResult = div.appendChild(document.createElement('button'));
    btnResult.classList.add('btnResult');
    btnResult.innerText = 'copy';

    // btn copied functionality 
    const copyAllBtns = document.querySelectorAll('.btnResult');

    copyAllBtns.forEach(item => {
        item.addEventListener('click', () => {
            console.log('clicked');
            item.innerHTML = 'Clicked!';
            item.classList.add('active');
        })
    });
})
