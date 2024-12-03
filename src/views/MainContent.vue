<template>
  <header
    class="bg-[url('src/assets/Rectangle3.png')] bg-cover bg-top text-white"
  >
    <!--adress-->
    <div class="relative z-10 bg-black">
      <section
        class="container flex justify-between py-[14px] text-sm transition-all"
      >
        <address class="flex gap-4">
          <a
            href="tel:+79220229482"
            class="flex items-center gap-2 hover:text-primary-blue"
            aria-label="телефон"
            ><svg
              width="11.666626"
              height="18.333252"
              viewBox="0 0 11.6666 18.3333"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                id="Vector"
                d="M9.16 0L2.5 0C1.11 0 0 1.11 0 2.5L0 15.83C0 17.21 1.11 18.33 2.5 18.33L9.16 18.33C10.55 18.33 11.66 17.21 11.66 15.83L11.66 2.5C11.66 1.11 10.55 0 9.16 0ZM10 14.16L1.66 14.16L1.66 2.5L10 2.5L10 14.16ZM7.5 16.66L4.16 16.66L4.16 15.83L7.5 15.83L7.5 16.66Z"
                fill="#4F8FF0"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
            <span>+7 (922) 022-94-82</span>
          </a>
          <a
            href="mailto:some@mail.ru"
            class="hidden gap-2 hover:text-primary-blue md:flex md:items-center"
            aria-label="Электронная почта"
          >
            <svg
              width="16.666748"
              height="13.333252"
              viewBox="0 0 16.6667 13.3333"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M1.66 13.33C1.2 13.33 0.81 13.16 0.48 12.84C0.16 12.51 -0.01 12.12 0 11.66L0 1.66C0 1.2 0.16 0.81 0.48 0.48C0.81 0.16 1.2 -0.01 1.66 0L15 0C15.45 0 15.85 0.16 16.17 0.48C16.5 0.81 16.66 1.2 16.66 1.66L16.66 11.66C16.66 12.12 16.5 12.51 16.17 12.84C15.85 13.17 15.45 13.33 15 13.33L1.66 13.33ZM8.33 7.5L1.66 3.33L1.66 11.66L15 11.66L15 3.33L8.33 7.5ZM8.33 5.83L15 1.66L1.66 1.66L8.33 5.83ZM1.66 3.33L1.66 1.66L1.66 11.66L1.66 3.33Z"
                fill="#4F8FF0"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
            <span>janis62@yahoo.com</span>
          </a>
        </address>
        <a href="#" class="hover:text-primary-blue">Заказать звонок</a>
      </section>
    </div>
    <!--logo-burger-nav-->
    <div class="relative">
      <div class="bg-black bg-opacity-85">
        <section class="container flex items-center justify-between">
          <div>
            <h1
              class="left-5 py-[14px] text-[22px] font-black uppercase text-primary-blue"
            >
              правозащитник
              <span class="block text-[16px] text-white"
                >юридическая компания</span
              >
            </h1>
          </div>
          <!--burger nav-->
          <div class="lg:hidden">
            <input
              type="checkbox"
              class="burger peer absolute opacity-0"
              id="toggle-menu"
              role="button"
            />
            <label
              class="relative z-10 flex h-4 w-[18px] cursor-pointer flex-col peer-focus-visible:outline peer-focus-visible:outline-offset-2"
              for="toggle-menu"
              aria-label="menu navigation"
            >
              <!--Селекторы в style блоке-->
              <span
                class="absolute top-0 block h-[2px] w-full bg-white [transition:top_.3s_.15s,transform_.15s]"
              ></span>
              <span
                class="absolute top-[7px] block h-[2px] w-3/4 translate-x-1 bg-white transition-opacity"
              ></span>
              <span
                class="absolute bottom-0 block h-[2px] w-full bg-white [transition:bottom_.3s_.15s,transform_.15s]"
              ></span>
            </label>
            <!--drop down menu-->
            <div
              class="absolute right-0 top-0 h-full w-screen translate-y-[-100%] bg-[#222222] duration-150 peer-checked:translate-y-0 peer-checked:transition-all"
            >
              <nav aria-label="навигация">
                <ul
                  class="ml-6 mt-[50px] flex flex-col gap-6 sm:items-center sm:text-2xl"
                >
                  <li>
                    <a
                      href="#"
                      class="relative font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full sm:after:h-[2px]"
                      >Услуги</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="relative font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full sm:after:h-[2px]"
                      >О компании</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="relative font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full sm:after:h-[2px]"
                      >Наши Юристы</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="relative font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full sm:after:h-[2px]"
                      >Отзывы</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="relative font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full sm:after:h-[2px]"
                      >Новости</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="relative font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full sm:after:h-[2px]"
                      >Контакты</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <!--lg screen nav-->
          <nav class="hidden lg:block" aria-label="навигация">
            <ul class="flex lg:gap-4 xl:gap-8">
              <li>
                <a
                  href="#"
                  class="relative text-[18px] font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full"
                  >Услуги</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="relative text-[18px] font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full"
                  >О компании</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="relative text-[18px] font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full"
                  >Наши юристы</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="relative text-[18px] font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full"
                  >Отзывы</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="relative text-[18px] font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full"
                  >Новости</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="relative text-[18px] font-bold transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary-blue after:transition-[width_.3s] hover:text-primary-blue hover:after:w-full"
                  >Контакты</a
                >
              </li>
            </ul>
          </nav>
        </section>
      </div>
      <!--main Header-->
      <div class="bg-black bg-opacity-65">
        <section class="container flex flex-col gap-8">
          <div class="pt-[60px] text-center">
            <h2 class="text-[18px] font-light uppercase">
              оказываем весь комплекс
              <span
                class="block text-nowrap pt-2 text-[30px] font-semibold text-primary-blue"
                >юридических услуг</span
              >
            </h2>
            <p class="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis veritatis deleniti nostrum quas maiores reprehenderit
              repellendus porro, modi itaque laborum deserunt facilis recusandae
              dolore id velit? Modi voluptates quaerat reiciendis!
            </p>
          </div>
          <button
            class="btn-primary mx-auto mb-[60px] max-w-[158px] active:scale-95"
          >
            наши услуги
          </button>
        </section>
      </div>
    </div>
  </header>
  <main>
    <!--Наши услуги-->
    <section class="bg-[#F7F7F7]">
      <div class="container text-center">
        <div>
          <h2
            class="relative pb-[10px] pt-10 text-xl font-extrabold uppercase after:absolute after:bottom-0 after:left-[50%] after:h-[3px] after:w-[50px] after:translate-x-[-50%] after:bg-primary-blue"
          >
            Наши услуги
          </h2>
          <p class="mt-4 pb-6 text-sm">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться. Lorem Ipsum используют потому, что тот
            обеспечивает более или менее стандартное заполнение шаблона
          </p>
        </div>
        <div class="overflow-hidden p-6">
          <CarouselComponent :data-length="ourServices.length" :gap="24">
            <CarouselSlide v-for="(item, index) in ourServices" :key="index">
              <div
                class="gap-white flex min-w-[250px] flex-col items-center bg-white p-6"
              >
                <svg
                  width="29.166626"
                  height="29.166626"
                  viewBox="0 0 29.1666 29.1666"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M26.25 2.91L26.25 20.41L8.75 20.41L8.75 2.91L26.25 2.91ZM26.25 0L8.75 0C7.14 0 5.83 1.31 5.83 2.91L5.83 20.41C5.83 22.02 7.14 23.33 8.75 23.33L26.25 23.33C27.85 23.33 29.16 22.02 29.16 20.41L29.16 2.91C29.16 1.31 27.85 0 26.25 0ZM15.26 17.5L10.2 12.39L12.25 10.33L15.26 13.37L22.75 5.83L24.79 7.88L15.26 17.5ZM2.91 5.83L0 5.83L0 26.25C0 27.85 1.31 29.16 2.91 29.16L23.33 29.16L23.33 26.25L2.91 26.25L2.91 5.83Z"
                    fill="#4F8FF0"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <h3 class="mt-[18px] min-h-[56px] text-xl font-extrabold">
                  {{ item.title }}
                </h3>
                <p class="mt-[10px] text-sm font-light">
                  {{ item.text.slice(0, 75) + "..." }}
                </p>
              </div>
            </CarouselSlide>
          </CarouselComponent>
        </div>
        <button class="btn-primary mb-10 mt-[30px] text-white">
          все услуги
        </button>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import CarouselComponent from "../components/carousel/CarouselComponent.vue";
import CarouselSlide from "../components/carousel/CarouselSlide.vue";
import type { CarouselData } from "../types/Carousel";
const ourServices: CarouselData[] = [
  {
    title: "Банкротство физических лиц",
    text: "Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». ",
  },
  {
    title: "Сопровождение сделок",
    text: "Инициирование, оформление, осуществление сделки и достижение результата — это именно то, чем мы занимаемся каждый день.",
  },
  {
    title: "Корпоративные споры",
    text: "Корпоративные споры – споры, связанные с созданием юрлица, управлением или участием в нем",
  },
  {
    title: "Недвижимость и строительство",
    text: "Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». ",
  },
  {
    title: "Возврат страховых премий",
    text: "Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». ",
  },
  {
    title: "Налоговое право и споры",
    text: "Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». ",
  },
];
</script>
<style>
.burger:checked ~ label :first-child {
  top: 7px;
  transform: rotate(45deg);
  transition:
    top 0.15s,
    transform 0.3s 0.15s;
}
.burger:checked ~ label :nth-child(even) {
  opacity: 0;
}

.burger:checked ~ label :last-child {
  bottom: 7px;
  transform: rotate(-45deg);
  transition:
    bottom 0.15s,
    transform 0.3s 0.15s;
}
</style>
