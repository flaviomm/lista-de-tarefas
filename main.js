$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();

        const novaTarefa = $('input').val();
        const novoItem = $('<li></li>');
        novoItem.text(novaTarefa);
        $(novaTarefa).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $('input').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('line-through');
    });
});