// 탭 전환
const tabs = document.querySelectorAll(".tabs nav ul li a");
const contents = document.querySelectorAll(".tab-content");
const navUl = document.querySelector("nav ul");
const hamburger = document.getElementById("hamburger");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
    if (navUl.classList.contains("show")) navUl.classList.remove("show");
  });
});

// 햄버거 메뉴
hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
