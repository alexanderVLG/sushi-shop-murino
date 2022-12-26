import React, {useState} from "react";

export default function About () {
  const [value, setValue] = useState(true);
  

  function handleClick () {
    if(value === false) {
      setValue(true)
    } else { setValue(false)}

    let button = document.querySelector(".about");
    if(value === true) {
      button.classList.add("about__overflow--visible");
    } else {
      button.classList.remove("about__overflow--visible")
    }
}

  return (
    <>
      <article className="about">
        <h1>Заказать суши в Мурино</h1>
        <p>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Мурино с доставкой на дом или в офис.
        </p>
        <p>В нашем меню более 20 видов суши:</p>
        <ul>
          <li>Классические с сырым лососем, тунцом, окунем.</li>
          <li>Экзотические с тигровой креветкой, морским гребешком.</li>
          <li>Пикантные с копченым лососем, угрем.</li>
        </ul>
        <p>В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.
        </p>
      </article>
      <div onClick={handleClick} className="about__btn icon__arrow">Подробнее</div>
    </>
  );
}

