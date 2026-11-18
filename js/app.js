const form = document.querySelector("#todo-form");
const input = document.querySelector("#task");
const list = document.querySelector("#todo-list");
form.addEventListener("submit", (e) => {
 e.preventDefault();
 const text = input.value.trim();
 if (!text) return;
 const li = document.createElement("li");
 li.textContent = text;
 li.addEventListener("click", () => li.classList.toggle("done"));
 list.append(li);
 form.reset();
});