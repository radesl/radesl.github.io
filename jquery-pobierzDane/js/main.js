$(document).ready(function () {
    $('button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (response) {
            /*var poj = document.createElement('div');
            poj.setAttribute('id', 'dane-programisty');
            document.body.appendChild(poj);*/
            $('body').append('<div></div>');
            $('div').attr('id', 'dane-programisty');
            $.each(response, function (index, element) {
                /*console.log(index + ': ' + element);
                var dane = document.createElement('p');
                dane.innerText = index + ': ' + element;
                document.getElementById('dane-programisty').appendChild(dane);*/
                $('#dane-programisty').append('<p>' + index + ': ' + element + '</p>');

            });
        });
    });
});