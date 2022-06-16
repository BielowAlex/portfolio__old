const js = document.querySelector('.js');
const react = document.querySelector('.react');
const rightArr = document.querySelector('.right_array');
const leftArr = document.querySelector('.left_array');
let categories = document.querySelectorAll('.categories');


const swipe = () => {
    if (js.classList.contains('_active_list')) {
        js.classList.remove('_active_list');
        react.classList.add('_active_list');
        for (const category of categories) {
            category.innerHTML = 'React'
        }
    } else {
        js.classList.add('_active_list');
        react.classList.remove('_active_list');
        for (const category of categories) {
            category.innerHTML = 'JS'
        }
    }
}

rightArr.onclick = swipe;
leftArr.onclick = swipe;
