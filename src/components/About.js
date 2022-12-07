import {Component} from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    let item = document.querySelector(".about");
    if (this.state.isToggleOn === true) {
      item.classList.add("about__overflow--visible");
    } else {
      item.classList.remove("about__overflow--visible");
    }
  }


  render () {
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
        <div onClick={this.handleClick} className="about__btn icon__arrow">Подробнее</div>
      </>
    );
  }
}

export default About;