$('form').on('submit',function(e) {
    e.preventDefault();
    const atividade = $('#nome-tarefa').val();
    const nova_atividade = $(`<li>${atividade}</li>`);
    $(nova_atividade).appendTo('ul');
    $('#nome-tarefa').val('');
    
    

    $('li').click(function(){
        const li = $('li');
        li.css('text-decoration', 'line-through');
        
    });
});