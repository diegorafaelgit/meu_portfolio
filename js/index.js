$('#fecha_modal').click(function () {
    $('#modal_habilidades').hide()
})

$('#img_promogames').click(function () {
    $('#modal_projetos').slideToggle(500)
    $('#modal_titulo2').text('PROMOGAMES')
    $('#modal_conteudo2').text('Promogames é um protótipo de alta fidelidade de um aplicativo mobile sobre jogos\
    e seu principal objetivo é ser um app de notificação de promoções de jogos da Ps Store, Xbox Store, Steam, entre outras.')
    $('#link').prop('href', 'https://www.figma.com/file/osmVC6TgiWfj0L7Dizgfgk/Trabalho-Leonardo?node-id=0%3A1')
    $('#img_carrossel1').prop('src', 'images/promogames1.jpg')
    $('#img_carrossel2').prop('src', 'images/promogames2.jpg')
    $('#img_carrossel3').prop('src', 'images/promogames3.jpg')

})
$('#img_agatetepe').click(function () {
    $('#modal_projetos').slideToggle(500)
    $('#modal_titulo2').text('AGATETEPÊ')
    $('#modal_conteudo2').text('Agatetepê é um website sobre tecnologias, em foco sobre assistentes virtuais, trazendo em destaque\
    o Echo Dot da Amazon e suas funcionalidades.')
    $('#link').prop('href', 'https://github.com/diegorafaelgit/Agatetep-')
    $('#img_carrossel1').prop('src', 'images/agatetepe1.jpg')
    $('#img_carrossel2').prop('src', 'images/agatetepe2.jpg')
    $('#img_carrossel3').prop('src', 'images/agatetepe3.jpg')
})
$('#img_meuplay').click(function () {
    $('#modal_projetos').slideToggle(500)
    $('#modal_titulo2').text('MEUPLAY')
    $('#modal_conteudo2').text('Meuplay é um website de noticias sobre jogos com foco no Playstation. Seus artigos contém\
    ferramentas de acessibilidade para pessoas com deficiências visual e auditiva.')
    $('#link').prop('href', 'https://github.com/diegorafaelgit/MeuPlay')
    $('#img_carrossel1').prop('src', 'images/meuplay1.jpg')
    $('#img_carrossel2').prop('src', 'images/meuplay2.jpg')
    $('#img_carrossel3').prop('src', 'images/meuplay3.jpg')
})

$('#fecha_modal2').click(function () {
    $('#modal_projetos').hide()
})
$('#btn_responsivo').click(function () {
    $('.show').remove()
})

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {

        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 300 * i)

    });
}
const titulo = document.querySelector('#name');
typeWrite(titulo);
