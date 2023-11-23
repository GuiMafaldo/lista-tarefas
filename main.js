$(document).ready(function() { //função para manipulação de elementos DOM
    const form = $('#form');
    const lista = $('#lista');
    const tarefa = $('#tarefa'); // selecionado os IDS que vao ser manipulados

    form.submit(function(e) {
        e.preventDefault();
        const text = lista.val(); // evento de clique no botao submit que recebera o valor de input!


        if (text.trim() !== '') { // if verificação de função !

            tarefa.append('<li>' + text + '</li>'); // função que aplicara a li nas tarefas!
            lista.val(''); // limpa o campo de entrada !

            $('li:last-child' , tarefa).click(function(){ //adiciona o manipulador de click para o novo item
                $(this).toggleClass('completed');

            });
        }
    });
});