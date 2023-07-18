export const initializeApp = () => {
    const shrink_btn = document.querySelector(".shrink-btn");
    const active_tab = document.querySelector(".active-tab");
    
    const moveActiveTab= () => {
        let topPosition = activeIndex * 58 + 2.5;
    
        if (activeIndex > 3) {
            topPosition += shortcuts.clientHeight;
        }
    
        active_tab.style.top = `${topPosition}px`;
    }
    
    shrink_btn.addEventListener("click", () => {
        document.body.classList.toggle("shrink");
        setTimeout(moveActiveTab, 400);
    
        shrink_btn.classList.add("hovered");
    
        setTimeout(() => {
            shrink_btn.classList.remove("hovered");
        }, 500);
    });

}