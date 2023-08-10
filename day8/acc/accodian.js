// 아코디언 동작을 추가하는 JavaScript
const accordions = document.querySelectorAll(".accordion");
const contents = document.querySelectorAll(".accordion-content");

accordions.forEach(accordion => {
    const header = accordion.querySelector(".accordion-header");
    const content = accordion.querySelector(".accordion-content");

    header.addEventListener("click", () => {
        // 콘텐츠의 펼침/접힘 상태를 토글
        // for(c of contents){
        //     c.style.display = 'none';
        // }
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});