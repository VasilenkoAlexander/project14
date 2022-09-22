"use strict"

/* Анимация блока about__achivment */
const elementsBlock = document.querySelectorAll('.about__achivment-item');

elementsBlock.forEach((elem) => {
    elem.addEventListener('mouseenter', () => {
        elementsBlock.forEach(el => {
            el.classList.remove('active');
        });
        setTimeout(() => {elem.classList.add('active')}, 100);
    })
} );

/* Кнопка 'Read More' в разделе Portfolio */
const readmoreBtns = document.querySelectorAll('.content-portfolio__btn');
const readmoreBlock = document.querySelectorAll('.content-portfolio__readmore');
const portfolioItems = document.querySelectorAll('.item-portfolio__content');

readmoreBtns.forEach(el => {
    el.addEventListener('click', () => {
        let dataBtn = el.dataset.button;
        readmoreBlock.forEach(elem => {
            let dataBlock = elem.dataset.readmore;
            if (dataBtn == dataBlock) {
                portfolioItems.forEach(item => {
                    let dataItem = item.dataset.itemportfolio;
                    if (dataBtn == dataItem){
                    item.classList.toggle('show');
                    if (!item.classList.contains('show')) {
                        el.innerText = `Read More`;
                    } else {
                        el.innerHTML = `Hide details`
                    }}
                });
            }
        })
    })
})
/* Кнопка 'Browse Articles' в разделе 'Articles' */
const btnBrowse = document.querySelector('.item-articles__btn');

btnBrowse.addEventListener('click', () => {
    alert('No articles available. Check later!');
})