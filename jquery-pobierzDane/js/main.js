$(document).ready(function () {
    $('button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (response) {
            if ($('#dane-programisty').length < 1) {
                $('body').append('<div></div>');
                $('div').attr('id', 'dane-programisty');
            }
            $.each(response, function (index, element) {
                $('#dane-programisty').append('<p>' + index + ': ' + element + '</p>');
            });
        });
    });
});