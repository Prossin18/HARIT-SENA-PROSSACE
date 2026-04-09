document.addEventListener("DOMContentLoaded", function () {

    const todayBtn = document.getElementById("filter-today");
    const weekBtn = document.getElementById("filter-week");
    const monthBtn = document.getElementById("filter-month");

    const cards = document.querySelectorAll(".request-card");

    function filterCards(days) {
        const today = new Date();

        cards.forEach(card => {
            const cardDate = new Date(card.getAttribute("data-date"));

            const diffTime = today - cardDate;
            const diffDays = diffTime / (1000 * 60 * 60 * 24);

            if (diffDays <= days) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    function setActive(btn) {
        todayBtn.classList.remove("btn-success");
        weekBtn.classList.remove("btn-success");
        monthBtn.classList.remove("btn-success");

        todayBtn.classList.add("btn-outline-success");
        weekBtn.classList.add("btn-outline-success");
        monthBtn.classList.add("btn-outline-success");

        btn.classList.remove("btn-outline-success");
        btn.classList.add("btn-success");
    }

    // Button Events
    todayBtn.addEventListener("click", () => {
        filterCards(1);
        setActive(todayBtn);
    });

    weekBtn.addEventListener("click", () => {
        filterCards(7);
        setActive(weekBtn);
    });

    monthBtn.addEventListener("click", () => {
        filterCards(30);
        setActive(monthBtn);
    });

    // Default load → Last Month
    filterCards(30);
});