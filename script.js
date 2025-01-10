let angle = 0;

document.querySelector('.card-container').addEventListener('click', (event) => {
    if (event.target.closest('.card')) {
        angle -= 90; // Rotate left
        document.querySelector('.card-container').style.transform = `rotateY(${angle}deg)`;
    }
});