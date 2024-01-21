export function generateRandomNumber(min = 1, max = 20) {
  const randomNumber = Math.floor(Math.random() * max);

  return randomNumber + min;
}

export function generateElement({ tag, id, className, value }) {
  const element = document.createElement(tag);

  if (id) element.id = id;
  if (className) element.className = className;
  if (value) element.innerText = value;

  return element;
}

export function generateQuizItem({
  id = 0,
  question = "..??",
  answer = "??",
  category = "??",
}) {
  return `
  <div class="quiz-item">
  <div class="section-left">
    <h4 id="quiz-question">${question}</h4>
    <p id="quiz-answer">${answer}</p>
  </div>

  <p id="quiz-category">${category}</p>

  <div class="section-right">
    <button type="button" class="btn btn-edit"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg></button>
    <button type="button" class="btn btn-delete"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eraser" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" /><path d="M18 13.3l-6.3 -6.3" /></svg></button>
  </div>
</div>
  `;
}
