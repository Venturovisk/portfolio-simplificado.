/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no HTML

        Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

        Passo 2 - Identificar o clique no botão

        Passo 3 - Adicionar a classe "ativo" nos projetos escondidos

    Obejtivo 2 - Esconder o botão de mostrar mais

        Passo 1 - Esconder o botão
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no HTML

//Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


botaoMostrarProjetos.addEventListener('click', () => {
   //Passo 3 - Adicionar a classe "ativo" nos projetos escondidos
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
    
    //Obejtivo 2 - Esconder o botão de mostrar mais
    //Passo 1 - Esconder o botão
    botaoMostrarProjetos.classList.add('remover');
});