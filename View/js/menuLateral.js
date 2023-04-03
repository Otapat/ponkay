    var perfilModal = document.getElementById('sombraimg');
    var svgHeart = document.querySelector('#itemSvg');
    var sectionMenu = document.querySelector('#sectionMenu');
    var imgPerfilMenu = document.getElementById('imgPerfilMenu');
    var guardaimg;
    var modalsucesso = document.getElementById('modalsucesso');
    var somSalvar = new Audio('css/efeitos sonoros/Magic Chime.mp3');
    var editarPerfil = document.getElementById('editarPerfil');
    var ms = document.getElementById('spanMsg');
    var dvMsg = document.getElementById('divnome-filho');
    var spanImg = document.getElementById('spanImg')
    var input = document.getElementById("inputNome");
   
    





    /*menu lateral*/
    svgHeart.addEventListener('click', function () {
        if (svgHeart.style.fill === 'red') {
            svgHeart.style.fill = '#5CE1E6'; // volta a cor original
            sectionMenu.style.transform = "translateX(250px)";


        } else {
            svgHeart.style.fill = 'red'; // define a cor como vermelho

            sectionMenu.style.transform = "translateX(0)";
        }
    });

    /*clicar imagm perfil*/
perfilModal.addEventListener('click', function(){
    var modalImgs = document.getElementById('modalImg');//modal
    modalImgs.style.display = 'flex'; //mostra modal de imagens 
   

    var cancelar = document.getElementById('cancelar');
    cancelar.addEventListener('click', function(){
        Cancelar();
    });
    function Cancelar(){
        modalImgs.style.display = 'none'; //esconde modal de imagens 
    }
       
   
   
   
    

    /*TROCAR A IMAGEM E SALVAR*/
    var imgTrocar = document.getElementById('imagemPerfil');
    var imgsLista = document.querySelectorAll('.fimgs');

    imgsLista.forEach(img => {
        img.addEventListener('click', (e) => {
            var guardaimg = e.target;
            imgTrocar.src = guardaimg.src;
        });
    });

    var salvarBtn = document.getElementById('salvar');
    salvarBtn.addEventListener('click', function() {
        Salvar(imgTrocar.src);
    });

    function Salvar(imagem){
        var imgPerfilMenu = document.getElementById('imgPerfilMenu');
        
    
        imgPerfilMenu.src = imagem;
        if(imgPerfilMenu.src == imagem){
           ModalUauAtivo();
          
            Cancelar();
        }
    
        
        
    }
    

    
   
    

})
function ModalUauAtivo(){
    somSalvar.play(); // tocando o som ao clicar no botão salvar
    modalsucesso.style.display = 'flex';
      setTimeout(esconderModalUau, 5000);
     window.addEventListener("click", fecharModal);

    function fecharModal(event) {
    
    if (event.target == modalsucesso) {
        modalsucesso.style.display = "none";
    }
    }
}

    function esconderModalUau() {
  modalsucesso.style.display = "none";
}
/*Editar perfil*/
const linkModalPerfil = document.querySelector('a[href="#editarPerfil"]');


linkModalPerfil.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'block';
});


/*Input name*/

function habilitarEdicao() {
  
    input.removeAttribute("readonly");
    input.style.borderBottom = '2px solid green';
    nome = input.value;
    edicaoHabilitada = true;
    if(edicaoHabilitada == true){
        edicaoHabilitada = false;
    }
}
input.addEventListener('input', function(){
    var txtinput = this.value 
  /*se o nome ja existir*/
  if(txtinput != 'oi'){
    dvMsg.style.opacity ='1.0';
    spanImg.src = 'css/img/erro.gif';
    ms.style.color = 'red'
    ms.innerText = 'Este nome já esta em uso'
    input.style.borderBottom = 'solid 2px red'
   
  }else if(txtinput == 'oi') {
    spanImg.src = 'css/img/feliz.gif';
    ms.style.color = 'green'
    ms.innerText = 'Que nome lindo'
    input.style.borderBottom = 'solid 2px green'
  }if(txtinput.length > 8){
    ms.innerText = 'Maximo 8 caracteres'
    spanImg.src = 'css/img/erro.gif';
    input.style.borderBottom = 'solid 2px red'
  }

  })
function editCancel(){
   
    editarPerfil.style.display = 'none';
}
function abrirEditarPerfil(){
    editarPerfil.style.display = 'flex';
}


