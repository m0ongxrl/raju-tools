const frames = document.querySelectorAll('.frame');
const fullScreen = document.getElementById('full-screen');

frames.forEach(frame => {
    frame.addEventListener('click', () => {
        const target = frame.dataset.target;
        fullScreen.classList.remove('hidden');
        fullScreen.innerHTML = `
            <h2>${frame.querySelector('h2').textContent}</h2>
            <p>Content for ${target}</p> 
        `; 
    });
});

fullScreen.addEventListener('click', () => {
    fullScreen.classList.add('hidden');
});