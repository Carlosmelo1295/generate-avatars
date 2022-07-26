"use strict";
const root = document.getElementById("root");
let nome = document.getElementById('nome');
let sobrenome = document.getElementById('sobrenome');
let geradorNome = document.getElementById('gerador');
geradorNome.addEventListener('click', function exec() {
    avatar.frame();
});
let avatar = {
    nome: nome,
    sobrenome: sobrenome,
    frame: () => {
        let canvas = document.getElementById('avatarFrame');
        let color = "#";
        const letters = '0123456789ABCDEF';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            canvas.style.backgroundColor = `${color}`;
        }
        if (nome.value != "" && sobrenome.value != "") {
            geradorNome.disabled = true;
        }
        let canvasContext = canvas.getContext('2d');
        canvasContext.font = '70px roboto';
        canvasContext.textAlign = 'center';
        canvasContext?.fillText(`${nome.value.charAt(0).toUpperCase()} ${sobrenome.value.charAt(0).toUpperCase()}`, 150, 95, 300);
    }
};
