document.addEventListener("click", (event) => {
    // Проверяем, кликнули ли по кнопке с нужным классом
    if (event.target.classList.contains("invis_button")) {
        const button = event.target;

        // Находим текстовый элемент, связанный с кнопкой
        const textClass = button.dataset.text; // Получаем класс текста из атрибута data-text
        const imageClass = button.dataset.image; // Получаем класс картинки из атрибута data-image

        const text = document.querySelector(`.${textClass}`);
        const image = document.querySelector(`.${imageClass}`);

        // Скрываем все тексты перед открытием нового
        document.querySelectorAll(".invis_manga, .invis_literature, .invis_poem, .invis_fairytale, .invis_history, .invis_anime, .invis_film").forEach((el) => {
            el.style.display = "none";
        });

        // Переключаем отображение текущего текста
        if (text) {
            text.style.display = text.style.display === "block" ? "none" : "block";
        }

        // Проверяем, виден ли какой-либо текст
        const anyTextVisible = Array.from(document.querySelectorAll(".invis_manga, .invis_literature, .invis_poem, .invis_fairytale, .invis_history, .invis_anime, .invis_film"))
            .some((el) => el.style.display === "block");

        // Если виден текст, скрываем картинку. Иначе отображаем.
        if (image) {
            image.style.display = anyTextVisible ? "none" : "block";
        }
    }
});



