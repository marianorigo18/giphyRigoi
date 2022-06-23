const navSwitch = document.querySelector('#nav__switch');

navSwitch.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    if(document.body.classList.contains('darkmode')){
        localStorage.setItem('dark-mode', 'true')
    }else{
        localStorage.setItem('dark-mode', 'false')
    }
})

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('darkmode');
}else{
    document.body.classList.remove('darkmode');
}
