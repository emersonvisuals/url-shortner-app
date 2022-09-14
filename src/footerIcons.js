function footerIcons() {
    const instagramIcon = document.querySelector('.instagram');
    const facebookIcon = document.querySelector('.facebook');
    const twitterIcon = document.querySelector('.twitter');
    const pinterestIcon = document.querySelector('.pinterest');

    instagramIcon.addEventListener('click', () => {
        instagramIcon.classList.toggle('active');
        facebookIcon.classList.remove('active');
        twitterIcon.classList.remove('active');
        pinterestIcon.classList.remove('active');
    })

    facebookIcon.addEventListener('click', () => {
        instagramIcon.classList.remove('active');
        facebookIcon.classList.toggle('active');
        twitterIcon.classList.remove('active');
        pinterestIcon.classList.remove('active');
    })

    twitterIcon.addEventListener('click', () => {
        instagramIcon.classList.remove('active');
        facebookIcon.classList.remove('active');
        twitterIcon.classList.toggle('active');
        pinterestIcon.classList.remove('active');
    })

    pinterestIcon.addEventListener('click', () => {
        instagramIcon.classList.remove('active');
        facebookIcon.classList.remove('active');
        twitterIcon.classList.remove('active');
        pinterestIcon.classList.toggle('active');
    })
}
footerIcons();