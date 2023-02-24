// mes function

async function updateContent(url) {
  let response = await fetch(url);
  let data = await response.json();

  console.log(data);
  let main = document.querySelector("main");
  main.innerHTML = "";
  data.articles.forEach((article) => {
    let element = document.createElement("article");
    element.innerHTML = `
        <img src="${article.urlToImage}" alt="${"pas de image dispo"}">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}"><button>Voir plus</button></a>
    `;
    main.append(element);
  });
}

let select = document.querySelector(" select");
select.addEventListener("change", function () {
  let value = select.value;
  let inputV = input.value;
  updateContent(
    "https://newsapi.org/v2/top-headlines?country=" +
      value +
      "&category=" +
      currentCategory +
      "&sortBy=publishedAt&apiKey=b5e101338ce24b57b559e39f411f02fc&q=" +
      inputV
  );
});
let currentCategory = "general";
function changeCategory(category) {
  currentCategory = category;
  let value = select.value;
  let inputV = input.value;
  updateContent(
    "https://newsapi.org/v2/top-headlines?country=" +
      value +
      "&category=" +
      category +
      "&sortBy=publishedAt&apiKey=b5e101338ce24b57b559e39f411f02fc&q=" +
      inputV
  );
}

let input = document.querySelector("input");
input.addEventListener("change", function () {
  let value = select.value;
  let inputV = input.value;
  updateContent(
    "https://newsapi.org/v2/top-headlines?country=" +
      value +
      "&category=" +
      currentCategory +
      "&sortBy=publishedAt&apiKey=b5e101338ce24b57b559e39f411f02fc&q=" +
      inputV
  );
});

// dark mode function
function darkMode() {
  let tableau = ["Dark mode", "Light mode"];
  let body = document.body;
  let nav = document.querySelector("nav");
  let buttons = document.querySelectorAll("button");
  let h2 = document.querySelectorAll("h2");
  let changeMode = document.querySelector(".dark-bright");
  changeMode.textContent == tableau[0]
    ? (changeMode.textContent = tableau[1])
    : (changeMode.textContent = tableau[0]);
  body.classList.toggle("dark-mode-body");
  nav.classList.toggle("dark-mode-nav");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("dark-mode-button");
  }
  for (let i = 0; i < h2.length; i++) {
    h2[i].style.color = "white";
  }
}

// appele a la function
updateContent(
  "https://newsapi.org/v2/top-headlines?country=fr&sortBy=publishedAt&apiKey=b5e101338ce24b57b559e39f411f02fc"
);
