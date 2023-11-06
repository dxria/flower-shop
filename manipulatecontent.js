document.addEventListener("DOMContentLoaded", function () {
    const contentItems = document.querySelectorAll(".shopGallery_elements");
    const loadMoreBtn = document.getElementById("load-more-btn");
    const showLessBtn = document.getElementById("show-less-btn");

    let currentItems = 9;

    function showNextItems() {
        for (let i = currentItems; i < currentItems + 6; i++) {
            if (contentItems[i]) {
                contentItems[i].style.display = 'block';
            }
        }
        currentItems += 6;

        if (currentItems >= contentItems.length) {
            loadMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'block';
        }
    }

    function showLessItems() {
        currentItems -= 6;

        for (let i = currentItems; i < contentItems.length; i++) {
            contentItems[i].style.display = 'none';
        }

        if (currentItems <= 9) {
            showLessBtn.style.display = 'none';
            loadMoreBtn.style.display = 'block';
        }
    }

    loadMoreBtn.addEventListener('click', showNextItems);

    showLessBtn.addEventListener('click', showLessItems);

    for (let i = 0; i < currentItems; i++) {
        contentItems[i].style.display = 'block';
    }

    if (currentItems < contentItems.length) {
        loadMoreBtn.style.display = 'block';
    } else {
        showLessBtn.style.display = 'none';
    }
});
