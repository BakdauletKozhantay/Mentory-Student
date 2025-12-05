const form = document.getElementById("myForm");

    // 1️⃣ Выводить изменения любого элемента формы
    form.addEventListener("input", (event) => {
      console.log("Изменено:", event.target.name, "->", event.target.value);
    });

    // 2️⃣ При отправке формы выводить всю форму в виде объекта
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // отменяем перезагрузку страницы

      const formData = new FormData(form);
      const formObject = {};

      formData.forEach((value, key) => {
        formObject[key] = value; // формируем объект
      });

      console.log("Отправленная форма:", formObject);
    });