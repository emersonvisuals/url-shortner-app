function enter() {
    // button variables
    let inputResultWrapper = document.querySelector('.inputResultContainer');

    // textbox & warning variables 
    let textInput = document.querySelector('input.textBox')
    let link = document.querySelector('input.textBox');
    let errorMessage = document.querySelector('.warning')
    let errorMessageP = document.querySelector('.warningMessage')

    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            console.log('enter');
    
            // removing warning message 
            link.classList.remove('active')
            errorMessage.classList.remove('active')
    
            // api request
            function fetchRequest() {
                fetch(`https://api.shrtco.de/v2/shorten?url=${textInput.value}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.result.short_link)
        
                    // defining structure for URl clicks
                    const ul = inputResultWrapper.appendChild(document.createElement('ul'));
                    ul.classList.add('inputUl');
                    const li = ul.appendChild(document.createElement('li'));
                    li.classList.add('inputLi');
                    const pOne = li.appendChild(document.createElement('p'));
                    pOne.classList.add('inputValue');
                    pOne.innerText = `${textInput.value}`;
                    const div = li.appendChild(document.createElement('div'));
                    div.classList.add('inputContents');
                    const result = div.appendChild(document.createElement('p'));
                    result.classList.add('result');
                    result.innerText = `${data.result.short_link}`;
                    const btnResult = div.appendChild(document.createElement('button'));
                    btnResult.classList.add('btnResult');
                    btnResult.innerText = 'copy';
        
                    // clicked btn style functionality 
                    const copyAllBtns = document.querySelectorAll('.btnResult');
                    let finalOutcome = `${data.result.short_link}`
        
                    copyAllBtns.forEach(item => {
                        item.addEventListener('click', () => {
                            console.log('clicked');
                            item.innerHTML = 'Clicked!';
                            item.classList.add('active');
        
                            navigator.clipboard.writeText(finalOutcome);
                        })
                    });
    
                    // removing warning errors
                    link.classList.remove('active')
                    errorMessage.classList.remove('active')
    
                    // input set to nothing once callback achieved 
                    textInput.value = '';
                })
                .catch(err => {
                    textInput.value = '';
                    console.log(err);
                    console.error('failed to log link');
            
                    errorMessageP.innerHTML = 'Please enter a valid link';
        
                    link.classList.add('active')
                    errorMessage.classList.add('active')
                    linkPlaceholder.classList.add('active');
                });
            }
            fetchRequest();
        } 
    })
}

export default enter