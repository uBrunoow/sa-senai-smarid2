const sign_in_btn = document.querySelector("#sign-in-btn") as HTMLBodyElement;
const sign_up_btn = document.querySelector("#sign-up-btn") as HTMLBodyElement;
const container = document.querySelector(".f-container") as HTMLBodyElement;

sign_up_btn.addEventListener('click', ()=> {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', ()=> {
    container.classList.remove("sign-up-mode");
});