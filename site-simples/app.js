'use strict';
//O JavaScript tenta ser amigável e ele tenta fazer com que o código funcione e forneça uma solução, mesmo que o resultado venha a ser um erro.
//Para combater essas deficiências, você pode ativar o modo estrito, que reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        this.textContent = "Light";
    } else {
        this.textContent = "Dark";
    }

    console.log('current class list:', document.body.classList);
});