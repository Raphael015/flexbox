document.addEventListener("DOMContentLoaded", function () {
    const movableElement = document.querySelector(".movable-element");
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    movableElement.addEventListener("mousedown", function (e) {
        isDragging = true;
        offset = {
            x: e.clientX - movableElement.getBoundingClientRect().left,
            y: e.clientY - movableElement.getBoundingClientRect().top,
        };
    });

    document.addEventListener("mousemove", function (e) {
        if (!isDragging) return;
        movableElement.style.left = e.clientX - offset.x + "px";
        movableElement.style.top = e.clientY - offset.y + "px";
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });
});
