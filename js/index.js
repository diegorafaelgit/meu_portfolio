$('#img_html').click(function () {
    $('#modal_habilidades').slideToggle(500)
    $('#modal_titulo').text('HTML')
    $('#modal_conteudo').text('HTML é uma linguagem de marcação utilizada para a construção de páginas web.\
    Eu aprendi HTML em 2018, e desde então venho aperfeiçoando essa habilidade. Atualmente trabalho\
    com ela e a utilizo muito no meu dia a dia.')
})
$('#img_css').click(function () {
    $('#modal_habilidades').slideToggle(500)
    $('#modal_titulo').text('CSS')
    $('#modal_conteudo').text('CSS é um mecanismo para adicionar estilo a um documento web.\
    Eu aprendi CSS em 2018, junto ao HTML, e desde então utilizo muito seus recursos no meu\
    local de trabalho para estilizar minhas páginas.')
})
$('#img_ps').click(function () {
    $('#modal_habilidades').slideToggle(500)
    $('#modal_titulo').text('PHOTOSHOP')
    $('#modal_conteudo').text('Photoshop é um editor de imagens. Aprendi Photoshop em 2016, com um curso\
    gratuito da internet e desde então é minha ferramenta favorita para manipulação de imagens.')
})
$('#img_php').click(function () {
    $('#modal_habilidades').slideToggle(500)
    $('#modal_titulo').text('PHP')
    $('#modal_conteudo').text('PHP é uma linguagem de programação para desenvolver websites. Meu primeiro\
    contato com PHP foi em 2019, no TCC da minha primeira graduação. É uma linguagem que tenho muito dominio\
    de suas funcionalidades.')
})
$('#img_python').click(function () {
    $('#modal_habilidades').slideToggle(500)
    $('#modal_titulo').text('PYTHON')
    $('#modal_conteudo').text('Python é uma linguagem de programação de alto nivel, orientada a objetos\
    e de tipagem dinâmina e forte. Atualmente trabalho utilizando-a, e estou em constante aprendizado\
    sobre essa linguagem.')
})
$('#img_github').click(function () {
    $('#modal_habilidades').slideToggle(500)
    $('#modal_titulo').text('GITHUB')
    $('#modal_conteudo').text('GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão\
    usando o Git. Ferramenta que utilizo para armazenar meus projetos.')
})
$('#img_bootstrap').click(function () {
    $('#modal_habilidades').slideToggle(500)
    $('#modal_titulo').text('BOOTSTRAP')
    $('#modal_conteudo').text('Bootstrap é um framework web com código-fonte aberto para desenvolvimento \
    de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e \
    JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do \
    usuário em um site amigável e responsivo.')
})
$('#img_js').click(function () {
    $('#modal_habilidades').slideToggle(500)
    $('#modal_titulo').text('JAVASCRIPT')
    $('#modal_conteudo').text('JavaScript é uma linguagem de programação interpretada estruturada, \
    de script em alto nível com tipagem dinâmica fraca e multiparadigma.\
     Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.')
})

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
