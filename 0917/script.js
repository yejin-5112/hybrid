document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  const tabsNav = document.querySelector(".tabs"); // 탭 메뉴 전체

  // 햄버거 메뉴 클릭 이벤트
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", () => {
      tabsNav.classList.toggle("active");
    });
  }

  // URL 해시 값을 확인하여 초기 활성 탭 설정
  const initialHash = window.location.hash;
  let activeTabId = initialHash && initialHash !== "#" ? initialHash : "#intro";

  // 탭 버튼 클릭 이벤트
  tabButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // 기본 앵커 동작 방지

      const targetId = button.getAttribute("href");

      // 모든 탭 버튼에서 'active' 클래스 제거
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // 클릭된 버튼에 'active' 클래스 추가
      button.classList.add("active");

      // 모든 탭 콘텐츠 숨김
      tabContents.forEach((content) => content.classList.remove("active"));
      // 대상 탭 콘텐츠 표시
      document.querySelector(targetId).classList.add("active");

      // URL 해시 업데이트
      history.pushState(null, "", targetId);

      // 모바일 메뉴가 열려있으면 닫기
      if (tabsNav.classList.contains("active")) {
        tabsNav.classList.remove("active");
      }
    });
  });

  // 페이지 로드 시 또는 새로고침 시 활성 탭 설정
  function setActiveTab(targetId) {
    tabButtons.forEach((button) => {
      if (button.getAttribute("href") === targetId) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    tabContents.forEach((content) => {
      if (`#${content.id}` === targetId) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  }

  // 초기 로드 시 활성 탭 설정
  setActiveTab(activeTabId);

  // 뒤로 가기/앞으로 가기 버튼 클릭 시 탭 변경 (popstate 이벤트)
  window.addEventListener("popstate", () => {
    const hash = window.location.hash || "#intro";
    setActiveTab(hash);
  });
});
