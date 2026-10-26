let caixa;
const universo = document.querySelector(".universo");
const mercurio = document.querySelector(".mercurio");
const planeta = document.querySelectorAll(".planeta")

for(let i = 0; i < 250; i++){
    const estrela = document.createElement("span");
    if(i < 30){
        estrela.style.width = "7px";
        estrela.style.height = "7px";
    }
    
    estrela.classList.add("estrela");
    
    estrela.style.left =  Math.random() * universo.offsetWidth +"px";
    estrela.style.top = Math.random() * universo.offsetHeight +"px";
    universo.appendChild(estrela);
    estrela.style.animationDelay = Math.random() + "s";
}
planeta.forEach(function(planeta){
    planeta.addEventListener("click", function(event){
        event.stopPropagation();
    if(caixa){
        return;
        
    }
    
    caixa = document.createElement("div");
   caixa.style.position = "fixed";
caixa.style.bottom = "10px";
caixa.style.left = "50%";
caixa.style.transform = "translateX(-50%)";
caixa.style.width = "85vw";
caixa.style.height = "50vh";
        caixa.style.background = "rgba(0, 80, 30, 0.7)";
        caixa.style.border = "2px solid #39ff7a";
        caixa.style.zIndex = "10";
    const cabeca = document.createElement("div");
    cabeca.textContent = "NENHUM PLANETA IDENTIFICADO!";
    
    cabeca.style.height = "30px";
    cabeca.style.background = "#39ff7a";
    cabeca.style.color = "darkgreen";
    cabeca.style.display = "flex";
    cabeca.style.alignItems = "center";
    cabeca.style.justifyContent = "center";
    cabeca.style.fontSize = "20px";
    cabeca.style.fontFamily = "monospace";
    
    const conteudo = document.createElement("div");
    
    conteudo.style.height = "calc(50vh - 30px)";
    conteudo.style.overflowY = "auto";
    conteudo.style.padding = "10px";
    conteudo.style.boxSizing = "border-box";
    
    const texto = document.createElement("p");
        texto.style.color = "#39ff7a";
    
        if(planeta.classList.contains("mercurio")){
            
            texto.textContent = "Mercúrio é o planeta mais próximo do Sol e também o menor dos oito planetas do Sistema Solar. Sua superfície é coberta por muitas crateras, formadas principalmente por impactos de asteroides e outros objetos ao longo de bilhões de anos. Apesar de estar perto do Sol, Mercúrio não é o planeta mais quente do Sistema Solar, porque possui uma atmosfera extremamente fina e quase não consegue reter calor. Por isso, sua temperatura varia muito entre o dia e a noite, podendo ficar extremamente quente durante o dia e muito fria durante a noite. Mercúrio também possui um grande núcleo metálico em comparação com seu tamanho e apresenta um campo magnético. Um dia solar em Mercúrio dura cerca de 176 dias terrestres, enquanto sua volta ao redor do Sol leva apenas 88 dias terrestres.";
            cabeca.textContent = "REGISTRO: Mercúrio";
        }
        if(planeta.classList.contains("venus")){
            
            texto.textContent = "Vênus é o segundo planeta a partir do Sol e possui um tamanho e uma composição semelhantes aos da Terra, sendo muitas vezes chamado de planeta irmão da Terra. Porém, suas condições são extremamente diferentes: Vênus possui uma atmosfera muito densa, composta principalmente por dióxido de carbono, que provoca um intenso efeito estufa. Por causa disso, ele é o planeta mais quente do Sistema Solar, com temperaturas capazes de derreter alguns metais. Sua superfície possui grandes planícies, montanhas e muitos vulcões, embora ainda existam dúvidas sobre quantos deles permanecem ativos. Vênus também gira em sentido contrário ao da maioria dos planetas, fazendo com que o Sol nasça no oeste e se ponha no leste. Um ano em Vênus dura aproximadamente 225 dias terrestres, enquanto sua rotação é tão lenta que um dia sideral dura cerca de 243 dias terrestres.";
            cabeca.textContent = "REGISTRO: Vênus";
        }
        
        if(planeta.classList.contains("terra")){
            
            texto.textContent = "A Terra é o terceiro planeta a partir do Sol e, até onde sabemos, o único lugar do Universo onde existe vida. Cerca de 71% de sua superfície é coberta por água, principalmente nos oceanos, enquanto o restante é formado por continentes e ilhas. Sua atmosfera é composta principalmente por nitrogênio e oxigênio e ajuda a manter condições adequadas para a vida. A Terra também possui um campo magnético que ajuda a protegê-la de partículas vindas do Sol. Nosso planeta possui uma única Lua, que influencia fenômenos como as marés e ajuda a tornar a Terra um lugar ainda mais interessante para estudar. Um dia na Terra dura aproximadamente 24 horas e uma volta completa ao redor do Sol leva cerca de 365 dias e 6 horas. Além disso, a Terra está em constante transformação, com fenômenos como vulcões, terremotos, formação de montanhas e mudanças no clima acontecendo em diferentes regiões.";
            cabeca.textContent = "REGISTRO: Terra";
        }
        
        if(planeta.classList.contains("marte")){
            
            texto.textContent = "Marte é o quarto planeta a partir do Sol e é conhecido como o Planeta Vermelho por causa da presença de óxidos de ferro em sua superfície. Ele possui uma atmosfera muito fina, composta principalmente por dióxido de carbono. Sua superfície apresenta vulcões gigantes, enormes cânions, crateras e regiões cobertas por poeira. Marte também possui duas pequenas luas, Fobos e Deimos. Um dia marciano dura cerca de 24 horas e 37 minutos, enquanto seu ano dura aproximadamente 687 dias terrestres. Cientistas estudam Marte há décadas para entender melhor sua história e descobrir se ele já teve condições favoráveis à existência de vida.";
            cabeca.textContent = "REGISTRO: Marte";
            
        }


        if(planeta.classList.contains("jupiter")){
    
            texto.textContent = "Júpiter é o maior planeta do Sistema Solar e o quinto planeta a partir do Sol. Ele é um gigante gasoso, formado principalmente por hidrogênio e hélio, e não possui uma superfície sólida como a Terra. Sua atmosfera possui enormes tempestades, sendo a mais famosa a Grande Mancha Vermelha, uma tempestade que existe há muito tempo. Júpiter também possui um sistema de anéis e muitas luas, algumas delas bastante grandes e interessantes. Um dia em Júpiter dura aproximadamente 10 horas, mas seu ano equivale a quase 12 anos terrestres. Por causa de seu enorme tamanho e de seu forte campo gravitacional, Júpiter exerce uma grande influência sobre outros corpos do Sistema Solar.";
            cabeca.textContent = " REGISTRO: Júpiter";
            
        }


        if(planeta.classList.contains("saturno")){
            
            texto.textContent = "Saturno é o sexto planeta a partir do Sol e o segundo maior planeta do Sistema Solar. Ele é um gigante gasoso formado principalmente por hidrogênio e hélio e não possui uma superfície sólida como a Terra. Saturno é famoso por seu impressionante sistema de anéis, formado principalmente por pedaços de gelo, poeira e rochas. O planeta possui muitas luas, incluindo Titã, uma das maiores luas do Sistema Solar, e Encélado, que possui características muito interessantes para os cientistas. Um dia em Saturno dura pouco mais de 10 horas, enquanto uma volta completa ao redor do Sol leva aproximadamente 29 anos e meio terrestres. Seus anéis tornam Saturno um dos objetos mais facilmente reconhecíveis do Sistema Solar.";
            cabeca.textContent = "REGISTRO: Saturno";
            
        }


        if(planeta.classList.contains("urano")){
    
            texto.textContent = "Urano é o sétimo planeta a partir do Sol e um dos gigantes de gelo do Sistema Solar. Ele possui uma atmosfera formada principalmente por hidrogênio, hélio e metano, sendo o metano responsável por ajudar a dar ao planeta sua aparência azul-esverdeada. Urano é conhecido por ter uma inclinação muito diferente dos outros planetas, fazendo com que ele pareça girar praticamente de lado. O planeta também possui anéis, embora sejam bem menos visíveis do que os de Saturno. Um dia em Urano dura aproximadamente 17 horas, enquanto sua volta ao redor do Sol leva cerca de 84 anos terrestres. Por estar muito distante do Sol, Urano recebe pouca luz e é um dos lugares mais frios do Sistema Solar.";
            cabeca.textContent = "REGISTRO: Urano";
            
        }

        if(planeta.classList.contains("netuno")){
            
            texto.textContent = "Netuno é o oitavo planeta a partir do Sol e o mais distante entre os oito planetas do Sistema Solar. Ele é um gigante de gelo formado principalmente por hidrogênio, hélio e outros elementos presentes em sua atmosfera. Sua aparência azulada está relacionada à presença de metano na atmosfera. Netuno possui ventos extremamente rápidos e grandes tempestades que podem surgir e desaparecer ao longo do tempo. Ele também possui anéis e várias luas, sendo Tritão a maior delas. Um dia em Netuno dura aproximadamente 16 horas, mas sua enorme distância do Sol faz com que seu ano dure cerca de 165 anos terrestres.";
            cabeca.textContent = "REGISTRO: Netuno";
            
        }
        if(planeta.classList.contains("plutao")){
            
            texto.textContent = "Plutão é um planeta anão localizado na região do Sistema Solar conhecida como Cinturão de Kuiper. Ele foi descoberto em 1930 e, durante muitos anos, foi considerado o nono planeta do Sistema Solar. Porém, em 2006, a União Astronômica Internacional estabeleceu uma definição mais específica para o que é considerado um planeta. Como Plutão não consegue limpar a região de sua órbita de outros objetos, ele passou a ser classificado oficialmente como planeta anão. Mesmo com essa reclassificação, Plutão continua sendo um dos objetos mais interessantes e estudados da região externa do Sistema Solar. Ele é formado principalmente por gelo e rocha e possui uma superfície extremamente fria. Uma de suas características mais famosas é uma grande região clara em formato de coração, chamada Tombaugh Regio. Plutão possui cinco luas conhecidas, sendo Caronte a maior delas e tão grande em comparação com Plutão que os dois formam um sistema bastante peculiar. Um dia em Plutão dura cerca de 6 dias e 9 horas terrestres, enquanto sua volta ao redor do Sol leva aproximadamente 248 anos terrestres.";
            cabeca.textContent = "REGISTRO: Plutão";
            
        }
        
    caixa.appendChild(cabeca);
    conteudo.appendChild(texto);
    caixa.appendChild(conteudo);
    document.body.appendChild(caixa);
    
        
    });
});


document.addEventListener("click", function(event){
    if(caixa){
        
        if(!caixa.contains(event.target)){
            caixa.remove();
            caixa = null;
            
        }
    }
    
    
});


document.addEventListener("wheel", function(event){
    window.scrollBy({
        left: event.deltaY,
        behavior: "auto"
    });
});
