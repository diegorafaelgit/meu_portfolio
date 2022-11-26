$('form').submit(function () {
    swal({
        title: "Mensagem enviada com sucesso!!!",
    });
})

$('#btn_promogames').click(function () {
    $('#modal_projetos').modal('show')
    $('#modal_titulo2').text('Promogames')
    $('#criado_em').text('Criado em: 1° Semestre de 2021;')
    $('#criado_por').text('Criado por: Diego Thomas; Wagner Pitelli; Fábio Bortolança;')
    $('#ferramentas').text('Tecnologia Utilizada: Figma;')
    $('#modal_conteudo2').text('Promogames é um protótipo de alta fidelidade de um aplicativo mobile sobre jogos\
    e seu principal objetivo é ser um app de notificação de promoções de jogos da Ps Store, Xbox Store, Steam, entre outras.')
    $('#img_carrossel1').prop('src', 'images/promogames1.jpg')
    $('#img_carrossel2').prop('src', 'images/promogames2.jpg')
    $('#img_carrossel3').prop('src', 'images/promogames3.jpg')
    $('#link').prop('href', 'https://www.figma.com/file/osmVC6TgiWfj0L7Dizgfgk/Trabalho-Leonardo?node-id=0%3A1')
})

$('#btn_agatetepe').click(function () {
    $('#modal_projetos').modal('show')
    $('#modal_titulo2').text('Agatetepê')
    $('#criado_em').text('Criado em: 2° Semestre de 2022;')
    $('#criado_por').text('Criado por: Diego Thomas; Fábio Bortolança; Nicolas Chinaglia;')
    $('#ferramentas').text('Tecnologias Utilizadas: HTML, CSS, SASS, JavaScript;')
    $('#modal_conteudo2').text('Agatetepê é um website sobre tecnologias, em foco sobre assistentes virtuais, trazendo em destaque\
    o Echo Dot da Amazon e suas funcionalidades.')
    $('#link').prop('href', 'https://github.com/diegorafaelgit/Agatetep-')
    $('#img_carrossel1').prop('src', 'images/agatetepe1.jpg')
    $('#img_carrossel2').prop('src', 'images/agatetepe2.jpg')
    $('#img_carrossel3').prop('src', 'images/agatetepe3.jpg')
})

$('#btn_meuplay').click(function () {
    $('#modal_projetos').modal('show')
    $('#modal_titulo2').text('MeuPlay')
    $('#criado_em').text('Criado em: 1° Semestre de 2021;')
    $('#criado_por').text('Criado por: Diego Thomas; Fábio Bortolança;')
    $('#ferramentas').text('Tecnologias Utilizadas: HTML, CSS, JavaScript, vLibras;')
    $('#modal_conteudo2').text('Meuplay é um website de noticias sobre jogos com foco no Playstation. Seus artigos contém\
    ferramentas de acessibilidade para pessoas com deficiências visual e auditiva.')
    $('#link').prop('href', 'https://github.com/diegorafaelgit/MeuPlay')
    $('#img_carrossel1').prop('src', 'images/meuplay1.jpg')
    $('#img_carrossel2').prop('src', 'images/meuplay2.jpg')
    $('#img_carrossel3').prop('src', 'images/meuplay3.jpg')
})

$('#card_html').on('mouseover', function () {
    $('#hab_itens_titulo').text('HTML');
    $('#hab_texto').text('HTML é uma linguagem de marcação utilizada na construção de páginas na Web.');
});
$('#card_html').on('mouseout', function () {
    $('#hab_itens_titulo').text('* Passe o mouse em cima do logo para saber mais sobre a ferramenta *');
    $('#hab_texto').text('');
});
$('#card_css').on('mouseover', function () {
    $('#hab_itens_titulo').text('CSS');
    $('#hab_texto').text('CSS é uma linguagem de marcação utilizada na construção de páginas na Web.');
});
$('#card_css').on('mouseout', function () {
    $('#hab_itens_titulo').text('* Passe o mouse em cima do logo para saber mais sobre a ferramenta *');
    $('#hab_texto').text('');
});
$('#card_js').on('mouseover', function () {
    $('#hab_itens_titulo').text('Javascript');
    $('#hab_texto').text('JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.');
});
$('#card_js').on('mouseout', function () {
    $('#hab_itens_titulo').text('* Passe o mouse em cima do logo para saber mais sobre a ferramenta *');
    $('#hab_texto').text('');
});
$('#card_bt').on('mouseover', function () {
    $('#hab_itens_titulo').text('Bootstrap');
    $('#hab_texto').text('Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.');
});
$('#card_bt').on('mouseout', function () {
    $('#hab_itens_titulo').text('* Passe o mouse em cima do logo para saber mais sobre a ferramenta *');
    $('#hab_texto').text('');
});
$('#card_php').on('mouseover', function () {
    $('#hab_itens_titulo').text('PHP');
    $('#hab_texto').text('PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.');
});
$('#card_php').on('mouseout', function () {
    $('#hab_itens_titulo').text('* Passe o mouse em cima do logo para saber mais sobre a ferramenta *');
    $('#hab_texto').text('');
});
$('#card_py').on('mouseover', function () {
    $('#hab_itens_titulo').text('Python');
    $('#hab_texto').text('Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.');
});
$('#card_py').on('mouseout', function () {
    $('#hab_itens_titulo').text('* Passe o mouse em cima do logo para saber mais sobre a ferramenta *');
    $('#hab_texto').text('');
});
$('#card_ps').on('mouseover', function () {
    $('#hab_itens_titulo').text('Photoshop');
    $('#hab_texto').text('Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster desenvolvido pela Adobe Systems.');
});
$('#card_ps').on('mouseout', function () {
    $('#hab_itens_titulo').text('* Passe o mouse em cima do logo para saber mais sobre a ferramenta *');
    $('#hab_texto').text('');
});
$('#card_git').on('mouseover', function () {
    $('#hab_itens_titulo').text('GitHub');
    $('#hab_texto').text('GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.');
});
$('#card_git').on('mouseout', function () {
    $('#hab_itens_titulo').text('* Passe o mouse em cima do logo para saber mais sobre a ferramenta *');
    $('#hab_texto').text('');
});
$('#card_figma').on('mouseover', function () {
    $('#hab_itens_titulo').text('Figma');
    $('#hab_texto').text('Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.');
});
$('#card_figma').on('mouseout', function () {
    $('#hab_itens_titulo').text('* Passe o mouse em cima do logo para saber mais sobre a ferramenta *');
    $('#hab_texto').text('');
});
$('#card_jquery').on('mouseover', function () {
    $('#hab_itens_titulo').text('jQuery');
    $('#hab_texto').text('jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário.');
});
$('#card_jquery').on('mouseout', function () {
    $('#hab_itens_titulo').text('* Passe o mouse em cima do logo para saber mais sobre a ferramenta *');
    $('#hab_texto').text('');
});

// Efeito de máquina de escrever no nome
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

const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Efeito de entrada de tela animação 
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
    }, 50));
}