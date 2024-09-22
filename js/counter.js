window.addEventListener('click', (event) => {/* відділяємо кліки крч, зараз кілки є по всій сторінці але в середину коду пропишем щоб щотчик редагувався тільки при кліку на кнопки - чи + */

    let counter;

    if (event.target.dataset.action  === 'plus' || event.target.dataset.action  === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');//шукає найближчого батька(closest())
    counter = counterWrapper.querySelector('[data-counter]');
    };
/* console.log(event.target); - тут описується на якому тегові було нажато (img div і тд)*/
    if (event.target.dataset.action  === 'plus' /* dataset.назва атрибуту - таким способом можна обратитись до назви атрибуту */) {
        //зараз ми короче повертаємось до батька дата-атрибуту, потім в батьковому блоці шукаємо атриюут data-counter в якому записано число
        counter.innerText = ++counter.innerText;
    };

    if (event.target.dataset.action  === 'minus') {

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
             event.target.closest('.cart-item').remove();//видаляємо елемент з корзини


             toggleCartStatus();//відображення статусу корзини буд у тій функції

             calcCartPriceAndDelivery();//запускаємо перерахунок
        }

    };

    //провіряємо на клік + чи - у середині корзини
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        //запускаєм перерахунок всіє кількості товарів у корзині
        calcCartPriceAndDelivery();
    }
});




/* const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

btnMinus.addEventListener('click', () => {
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    };
});

btnPlus.addEventListener('click', () => {
    counter.innerText = ++counter.innerText; - робилось все для одної кнопки мінуса і плюса
}); */