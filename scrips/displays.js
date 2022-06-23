const targets = document.querySelectorAll('[data-target');
const content = document.querySelectorAll('[data-content]');

targets.forEach(target => {


    target.addEventListener('click', () => {

        content.forEach(c => {
            c.classList.remove('data-active');
        })

        const t = document.querySelector(target.dataset.target)
        t.classList.add('data-active')
    })
})