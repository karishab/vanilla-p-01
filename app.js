export const initializeApp = () => {
    const shrink_btn = document.querySelector(".shrink-btn");
    const active_tab = document.querySelector(".active-tab");

    const search = document.querySelector(".search");
    const sidebar_links = document.querySelectorAll(".sidebar-links a");
    const shortcuts = document.querySelector(".sidebar-links h4");
    const tooltip_elements = document.querySelectorAll(".tooltip-element");

    let activeIndex;

    function changeLink() {
        sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
        this.classList.add("active");

        activeIndex = this.dataset.active;

        moveActiveTab();
    }

    sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

    function showTooltip() {
        let tooltip = this.parentNode.lastElementChild;
        let spans = tooltip.children;
        let tooltipIndex = this.dataset.tooltip;

        Array.from(spans).forEach((sp) => sp.classList.remove("show"));
        spans[tooltipIndex].classList.add("show");

        tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
    }

    tooltip_elements.forEach((elem) => {
        elem.addEventListener("mouseover", showTooltip);
    });

    search.addEventListener("click", () => {
        document.body.classList.remove("shrink");
        search.lastElementChild.focus();
    });

    const moveActiveTab = () => {
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


    /*  gramin bild js*/
var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
        source: '../assets/img/bg-forest.jpg',
        blendingMode: 'color-burn',
    },
    states: {
        "default-state": {
            gradients: [
                ['#ffaf40', '#cd84f1'],
                ['#7efff5', '#ff3838'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 3500
        }
    }
});

}