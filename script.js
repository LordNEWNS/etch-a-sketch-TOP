const main = document.getElementById('MAIN');

// creat 16 x 16 grid of divs
for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.classList.add('etchGrid');
    main.appendChild(div);   
};