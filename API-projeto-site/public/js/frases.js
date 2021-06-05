vt_galileu = ['Amei tanto as estrelas que não precisei ter medo da noite.', 'Não se pode ensinar nada a um homem; só é possivel ajudá-lo a encontrar a coisa dentro de si.', 'A verdade é filha do tempo, e não da autoridade.', 'Conhecer a si próprio é o maior saber.', 'A dúvida é a mãe da invenção.'];

vt_einstein = ['A imaginação é mais importante que o conhecimento.', 'No meio da dificuldade encontra-se a oportunidade.', 'Não tentes ser bem-sucedido, tenta antes ser um homem de valor.', 'O importante é não parar de questionar.', 'A paz é a única forma de nos sentirmos realmente humanos.'];

vt_newton = ['Se eu vi mais longe, foi por estar sobre ombros de gigantes.', 'O que sabemos é uma gota; o que ignoramos é um oceano.', 'Construímos muros demais e pontes de menos.', 'Deve-se aprender sempre, até mesmo com um inimigo.', 'Virtude sem caridade não passa de nome.'];

vt_sagan = ['Para criaturas pequenas como nós, a vastidão só é suportável por meio do amor.', 'Nós somos uma maneira do Cosmos conhecer a si mesmo.', 'Tanto o insignificante quanto o extraordinário são arquitetos do mundo natural.', 'Alegações extraordinárias exigem evidências extraordinárias.', 'A sedução do maravilhoso embota nossas faculdades críticas.'];

vt_copernico = ['A sabedoria da natureza é tal que não produz nada de supérfluo ou inútil.', 'A ciência é filha da verdade e não da autoridade.', 'Não estou tão encantado com minhas próprias opiniões para ignorar o que os outros possam pensar delas.', 'De todas as coisas visíveis, a mais alta é o céu das estrelas fixas.', 'É dever do astrônomo compor a história dos movimentos celestes através de um estudo cuidadoso e experiente.'];

vt_bruno = ['Não é a matéria que causa o pensamento, mas o pensamento que causa a matéria.', 'O tempo tudo tira e tudo dá; tudo se transforma, nada se destrói.', 'Que ingenuidade pedir a quem tem poder para mudar o poder.', 'Não existe deleite sem um misto de tristeza.', 'O homem não tem limites, e um dia se dará conta disso e será livre, ainda neste mundo.'];

function galileu() {

    var frase_aleatoria = parseInt(Math.random() * 5);
    var vt_frase = vt_galileu[frase_aleatoria];

    div_msg.innerHTML = `${vt_frase}`;
    img_filosofo.src = "img/galileugalilei.jpg"
}

function einstein() {

    var frase_aleatoria = parseInt(Math.random() * 5);
    var vt_frase = vt_einstein[frase_aleatoria];

    div_msg.innerHTML = `${vt_frase}`;
    img_filosofo.src = "img/einstein.jpg"
}

function newton() {

    var frase_aleatoria = parseInt(Math.random() * 5);
    var vt_frase = vt_newton[frase_aleatoria];

    div_msg.innerHTML = `${vt_frase}`;
    img_filosofo.src = "img/newton.jpg"
}

function sagan() {

    var frase_aleatoria = parseInt(Math.random() * 5);
    var vt_frase = vt_sagan[frase_aleatoria];

    div_msg.innerHTML = `${vt_frase}`;
    img_filosofo.src = "img/carlsagan.jpeg"
}

function copernico() {

    var frase_aleatoria = parseInt(Math.random() * 5);
    var vt_frase = vt_copernico[frase_aleatoria];

    div_msg.innerHTML = `${vt_frase}`;
    img_filosofo.src = "img/copernico.jpg"
}

function bruno() {

    var frase_aleatoria = parseInt(Math.random() * 5);
    var vt_frase = vt_bruno[frase_aleatoria];

    div_msg.innerHTML = `${vt_frase}`;
    img_filosofo.src = "img/bruno.jpg"
}