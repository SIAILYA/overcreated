<template>
  <main class="container h-full">
    <div class="text-center">
      <h2 class="page-header">Резюме</h2>
      <article>
        Моё резюме, где описан опыт, навыки и всё остальное
      </article>
    </div>

    <section class="grid grid-cols-1 lg:grid-cols-2 mt-8 md:mt-12 gap-4">
      <div class="resume-data flex flex-col-reverse lg:flex-row gap-3">
        <div class="text-center photos w-full">
          <div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
            <img alt="" class="rounded h-full w-full aspect-video object-cover"
                 src="@/assets/images/resume/resume-1.png">
            <img alt="" class="rounded h-full w-full aspect-video object-cover"
                 src="@/assets/images/resume/resume-2.png">
            <!--          <img alt="" class="rounded h-full w-full aspect-video object-cover" src="@/assets/images/resume/resume-3.png">-->
            <!--          <img alt="" class="rounded h-full w-full aspect-video object-cover" src="@/assets/images/resume/resume-4.png">-->
          </div>

          <p class="opacity-50 mt-2 text-sm"><i>Привет, это я!</i></p>
        </div>

        <div class="biography flex w-full flex-col">
          <h3 class="text-3xl font-medium">Илья Самойлов</h3>
          <h4 class="font-light italic leading-tight">aka samolyev</h4>
          <h4 class="font-light italic leading-tight">aka siailya</h4>
          <h3 class="text-2xl mt-5 lg:mt-8 mb-3">Я - веб-разработчик</h3>

          <nuxt-link
              class="text-white mr-auto py-2 px-4 rounded mt-7 inline-block transition-all download-btn duration-300"
              style="background: var(--accent-purple);"
              to="https://disk.yandex.ru/i/WDM1jsSOXCQbtA"
              target="_blank"
          >
            <svg class="inline mr-1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
              <path
                  d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4l4-4h-2.55z"
                  fill="currentColor"></path>
            </svg>
            Резюме в PDF
          </nuxt-link>
        </div>
      </div>
      <div>
        <h3 class="mt-3 text-2xl font-medium mb-3">Что я умею - мои <span style="color: var(--accent-purple)">hard-skills</span>
        </h3>
        <ul class="skills-list list-disc mb-0 pl-5">
          <li> Мой основной ЯП - JS</li>
          <li> Помимо JS хорошо знаю Python, работаю на Java(8+), не боюсь пробовать и что-то экзотическое</li>
          <li> Умею работать с веб-фреймворками, понимаю, зачем они нужны. Люблю Vue 2/3, работал с React 16/17 и
            Svelte
          </li>
          <li> Больше об используемых технологиях на странице
            <ovc-emb-link color="var(--accent-purple)" to="/portfolio">портфолио</ovc-emb-link>
          </li>
          <li> На хорошем уровне знаю Python и сторонние библиотеки – от Pillow и Flask до NumPy и асинхронности</li>
          <li> Понимаю принципы ООП, SOLID, знаю зачем они нужны и почему их используют</li>
          <li> Работал с SQL и NoSQL. Люблю ORM, но пишу и самостоятельные запросы</li>
          <li> Люблю контейнеризацию и CI/CD. Работал с Ansible, Jenkins, Swarm, GitHub Actions</li>
          <li> Работаю на Windows, но дружу и с Linux. Чаще всего использую Ubuntu - и десктоп (если надо) и сервер</li>
          <li> Имею начальные навыки UI/UX-дизайнера, умею работать в Figma, проектировать красивые и практичные
            интерфейсы
          </li>
        </ul>

        <hr class="my-6" style="border-color: var(--border-color)">

        <h3 class="text-2xl font-medium mb-3">Какой я - мои <span style="color: var(--accent-purple)">soft-skills</span>
        </h3>
        <ul class="skills-list list-disc mb-0 pl-5">
          <li> Люблю пробовать что-то новое в сфере IT, стараюсь оставаться в курсе последних новостей</li>
          <li> Отлично владею русским языком – грамотно пишу, соблюдая грамматические и пунктуационные правила</li>
          <li> Английским владею на среднем уровне – читаю почти любые тексты, понимаю четкую речь, могу поддержать
            разговор на повседневные темы
          </li>
          <li> Умею быстро принимать решения и брать на себя ответственность</li>
          <li> Легко приспосабливаюсь, подхожу к проблеме с разных сторон и находить креативные решения. Если что-то не
            получается - остаюсь спокойным, не боюсь экспериментировать и просить помощи
          </li>
          <li> Легко могу одновременно держать в голове множество задач и работать над ними, всегда ищу способы
            оптимизировать рабочй процесс
          </li>
          <li> Ориентирован на результат и достижение цели. А если задача объемная, могу разбить её на подзадачи и
            работать над ними
          </li>
          <li> Когда требуется, могу поддержать разговор на множество тем – от серебрянного века до устройства ДВС</li>
          <li> В любой сфере жизни руководствуюсь правилом «семь раз проверь – один раз отрежь»</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "accent-color-client",
  variant: "purple"
})

useHead({
  title: 'Резюме | samolyev'
})
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .resume-data {
    grid-auto-flow: dense;
  }

  .photos {
    grid-row: 2;
  }
}

.download-btn:hover {
  box-shadow: 0 0 5px 3px rgba(223, 0, 106, .15);
}

.skills {
  transition: all .3s ease;
}

.skills.collapsed {
  height: 0 !important;
}
</style>
