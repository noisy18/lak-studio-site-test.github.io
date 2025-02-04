const buttons = document.querySelectorAll('.name-master');

// Активное отображение кнопки мастера
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Данные о мастерах
const mastersData = {
    alexandra: {
        name: "Александра - мастер маникюра",
        description: "Александра — профессиональный визажист с 10-летним опытом.",
        photo1: "assets/img/masters/Alexandra/1.svg",
        photo2: "assets/img/masters/Alexandra/2.svg"
    },
    alise: {
        name: "Алиса - бровист",
        description: "Алиса — эксперт по коррекции и окрашиванию бровей.",
        photo1: "assets/img/masters/Alise/1.svg",
        photo2: "assets/img/masters/Alise/2.svg"
    },
    anna: {
        name: "Анна - мастер маникюра",
        description: "Анна — мастер по созданию стильных стрижек и укладок.",
        photo1: "assets/img/masters/Anna/1.svg",
        photo2: "assets/img/masters/Anna/2.svg"
    },
    ksenia: {
        name: "Ксения - мастер маникюра",
        description: "Ксения — специалист по ногтевому дизайну и уходу.",
        photo1: "assets/img/masters/Ksenia/1.svg",
        photo2: "assets/img/masters/Ksenia/2.svg"
    },
    ekaterina: {
        name: "Екатерина - парикмахер",
        description: "Екатерина — эксперт по уходу за кожей и anti-age процедурам.",
        photo1: "assets/img/masters/Ekaterina/1.svg",
        photo2: "assets/img/masters/Ekaterina/2.svg"
    }
};

// Функция для обновления информации о мастере
function updateMasterInfo(masterData, isMobile = false) {
    const masterName = isMobile ? document.getElementById('mobile-master-name') : document.getElementById('master-name');
    const masterDescription = isMobile ? document.getElementById('mobile-master-description') : document.getElementById('master-description');
    const masterPhoto1 = isMobile ? document.getElementById('mobile-master-photo1') : document.getElementById('master-photo1');
    const masterPhoto2 = isMobile ? document.getElementById('mobile-master-photo2') : document.getElementById('master-photo2');

    if (masterName && masterDescription && masterPhoto1 && masterPhoto2) {
        // Исчезновение
        masterName.classList.add('fade-out');
        masterDescription.classList.add('fade-out');
        masterPhoto1.classList.add('fade-out');
        masterPhoto2.classList.add('fade-out');

        setTimeout(() => {
            // Обновление информации
            masterName.textContent = masterData.name;
            masterDescription.textContent = masterData.description;
            masterPhoto1.src = masterData.photo1;
            masterPhoto2.src = masterData.photo2;

            // Появление
            masterName.classList.remove('fade-out');
            masterDescription.classList.remove('fade-out');
            masterPhoto1.classList.remove('fade-out');
            masterPhoto2.classList.remove('fade-out');

            masterName.classList.add('fade-in');
            masterDescription.classList.add('fade-in');
            masterPhoto1.classList.add('fade-in');
            masterPhoto2.classList.add('fade-in');

            setTimeout(() => {
                masterName.classList.remove('fade-in');
                masterDescription.classList.remove('fade-in');
                masterPhoto1.classList.remove('fade-in');
                masterPhoto2.classList.remove('fade-in');
            }, 500);
        }, 500);
    } else {
        console.error("Один или несколько элементов не найдены в DOM.");
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        buttons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс текущей кнопке
        button.classList.add('active');

        // Получаем данные о мастере из атрибута data-master
        const masterId = button.getAttribute('data-master');
        const masterData = mastersData[masterId];

        if (masterData) {
            // Определяем, мобильная это версия или нет
            const isMobile = window.innerWidth <= 768; // Например, для экранов меньше 768px

            // Обновляем информацию в зависимости от версии
            updateMasterInfo(masterData, isMobile);
        }
    });
});


// Получаем элементы
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

// Добавляем обработчик события на клик по бургер-меню
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Переключаем класс active
});

// Функция для инициализации Swiper
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
    });
});

// Инициализация Swiper при загрузке страницы
initSwiper();

// Повторная инициализация при изменении размера окна
window.addEventListener("resize", initSwiper);