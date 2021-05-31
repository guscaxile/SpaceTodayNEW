function item1() {

    gif1.src = `${celest.value}`;
    vs.innerHTML = "<br>VS.";

}

function item2() {

    gif2.src = `${celest2.value}`;
}

function colisao() {

    // PLANETA VS PLANETA
    if (celest.value == "https://i.pinimg.com/originals/e5/33/da/e533dadea572d5a85ddfe5bb64eea8e2.gif" && celest2.value == "https://i.pinimg.com/originals/e5/33/da/e533dadea572d5a85ddfe5bb64eea8e2.gif") {

        gif2.src = 'https://i.pinimg.com/originals/c0/22/c5/c022c516172b028b374c5bab76cfdbfe.jpg';
        gif1.style.display = 'none';
        div_msg.innerHTML = 'O impacto direto de duas massas iguais e gigantescas tende a destruir as duas.';
    }

    // PLANETA VS ASTERÓIDE
    if (celest.value == "https://i.pinimg.com/originals/e5/33/da/e533dadea572d5a85ddfe5bb64eea8e2.gif" && celest2.value == "https://img.ibxk.com.br/2020/09/30/gif-30170634722540.gif") {

        gif2.src = 'https://zap.aeiou.pt/wp-content/uploads/2017/05/268c1026c2ca509e139dbe2752526370.gif';
        gif1.style.display = 'none';
        div_msg.innerHTML =
            'As consequências desse impacto dependeriam muito do tamanho do asteróide.<br> Mas imagine que seja um de massa consideravelmente grande... O impacto causaria uma enorme núvem de poeira, e destruiria a superfície do Planeta.';
    }

    // PLANETA VS SATÉLITE NATURAL
    if (celest.value == "https://i.pinimg.com/originals/e5/33/da/e533dadea572d5a85ddfe5bb64eea8e2.gif" && celest2.value == "https://64.media.tumblr.com/422f198994128924fc915385da824497/tumblr_p7iqj4IzaL1ubpd7so1_r3_500.gifv") {

        gif2.src = 'https://1.bp.blogspot.com/-V0ONotnI-so/WxMM3IMJV5I/AAAAAAAAQgY/s_9jt0KS3REy0MNrP2r5Ma5WP2LB6BLHQCLcBGAs/s1600/19.gif';
        gif1.style.display = 'none';
        div_msg.innerHTML = 'Esse choque faria com que o Planeta Terra se resumisse em uma bola de rocha derretida inabitável';
    }

    // ASTERÓIDE VS PLANETA
    if (celest2.value == "https://i.pinimg.com/originals/e5/33/da/e533dadea572d5a85ddfe5bb64eea8e2.gif" && celest.value == "https://img.ibxk.com.br/2020/09/30/gif-30170634722540.gif") {

        gif2.src = 'https://zap.aeiou.pt/wp-content/uploads/2017/05/268c1026c2ca509e139dbe2752526370.gif';
        gif1.style.display = 'none';
        div_msg.innerHTML =
            'As consequências desse impacto dependeriam muito do tamanho do asteróide.<br> Mas imagine que seja um de massa consideravelmente grande... O impacto causaria uma enorme núvem de poeira, e destruiria a superfície do Planeta.';
    }

    // SATÉLITE NATURAL VS PLANETA
    if (celest2.value == "https://i.pinimg.com/originals/e5/33/da/e533dadea572d5a85ddfe5bb64eea8e2.gif" && celest.value == "https://64.media.tumblr.com/422f198994128924fc915385da824497/tumblr_p7iqj4IzaL1ubpd7so1_r3_500.gifv") {

        gif2.src = 'https://1.bp.blogspot.com/-V0ONotnI-so/WxMM3IMJV5I/AAAAAAAAQgY/s_9jt0KS3REy0MNrP2r5Ma5WP2LB6BLHQCLcBGAs/s1600/19.gif';
        gif1.style.display = 'none';
        div_msg.innerHTML = 'Esse choque faria com que o Planeta Terra se resumisse em uma bola de rocha derretida inabitável';
    }

    // ASTERÓIDE VS ASTERÓIDE
    if (celest2.value == "https://img.ibxk.com.br/2020/09/30/gif-30170634722540.gif" && celest.value == "https://img.ibxk.com.br/2020/09/30/gif-30170634722540.gif") {

        gif2.src = 'https://sciam.com.br/wp-content/uploads/2019/09/2D77864C-90E0-4AAA-AF86F06DAB127582_source.jpg';
        gif1.style.display = 'none';
        div_msg.innerHTML =
            'Este evento faria com que os asteróides fossem reduzidos a pequenos pedaços de rocha que ficariam vagando como um aglomerado de rochedo, isso, claro, levando em consideração que os mesmos tenham massa semelhante';
    }

    // ASTERÓIDE VS SATÉLITE NATURAL
    if (celest.value == "https://img.ibxk.com.br/2020/09/30/gif-30170634722540.gif" && celest2.value == "https://64.media.tumblr.com/422f198994128924fc915385da824497/tumblr_p7iqj4IzaL1ubpd7so1_r3_500.gifv") {

        gif2.src = 'https://www.criatives.com.br/wp-content/uploads/elementor/thumbs/capa-47-nsg8wcbfhsxlkferp204uxiwzo85edem0m6oewim58.jpg';
        gif1.style.display = 'none';
        div_msg.innerHTML =
            'Ainda levando em conta um tamanho considerável, neste cenário a lua seria despedaçada, mesmo que a sua crosta seja mais grossa do que a da Terra. E esses pedaços, por sua vez, seriam atraídos pela gravidade da Terra e poderiam, em algum momento, cair por aqui. E, acredite: esse seria apenas o primeiro de vários problemas que nós, na Terra, enfrentaríamos.';
    }

    // SATÉLITE NATURAL VS ASTERÓIDE
    if (celest2.value == "https://img.ibxk.com.br/2020/09/30/gif-30170634722540.gif" && celest.value == "https://64.media.tumblr.com/422f198994128924fc915385da824497/tumblr_p7iqj4IzaL1ubpd7so1_r3_500.gifv") {

        gif2.src = 'https://www.criatives.com.br/wp-content/uploads/elementor/thumbs/capa-47-nsg8wcbfhsxlkferp204uxiwzo85edem0m6oewim58.jpg';
        gif1.style.display = 'none';
        div_msg.innerHTML = 'Ainda levando em conta um tamanho considerável, neste cenário a lua seria despedaçada, mesmo que a sua crosta seja mais grossa do que a da Terra. E esses pedaços, por sua vez, seriam atraídos pela gravidade da Terra e poderiam, em algum momento, cair por aqui. E, acredite: esse seria apenas o primeiro de vários problemas que nós, na Terra, enfrentaríamos.';
    }

    // SATÉLITE NATURAL VS SATÉLITE NATURAL
    if (celest2.value == "https://64.media.tumblr.com/422f198994128924fc915385da824497/tumblr_p7iqj4IzaL1ubpd7so1_r3_500.gifv" && celest.value == "https://64.media.tumblr.com/422f198994128924fc915385da824497/tumblr_p7iqj4IzaL1ubpd7so1_r3_500.gifv") {

        gif2.src = 'https://img.olhardigital.com.br/wp-content/uploads/2020/03/20200311020552-scaled.jpg';
        gif1.style.display = 'none';
        div_msg.innerHTML = 'Neste caso em específico, vamos ignorar o campo gravitacional que os repelem. Seria uma catástrofe imensurável! Ambas seriam reduzidas a enormes asteróides que iriam vagar pelo universo até serem puxados pela gravidade de algum outro corpo celeste.';
    }


    // ALERT
    if (celest.value == "0" || celest2.value == "0") {

        alert('Preencha todos os campos!');
    }
}