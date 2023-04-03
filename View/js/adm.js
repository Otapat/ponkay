//menu esquerdo 
var menuAberto = false;
var imgClick = document.getElementById('imgClick');
imgClick.addEventListener('click', function() {
  var menuEsquerdo = document.getElementById('menuEsquerdo');
  if (menuAberto) {

    imgClick.src = "css/img/ponkayIcon (1).png"
    menuEsquerdo.style.transform = "translateX(0)";
    menuAberto = false;
  } else {
    imgClick.src = "css/img/ponkayIcon (2).png"
    menuEsquerdo.style.transform = "translateX(450px)";
    menuAberto = true;
  }
});

/*-------------------------------------------------------*/

//Foto perfil


function perfilEdit(){

  const selecionarArquivo = document.createElement('input');
  selecionarArquivo.type = 'file';
  selecionarArquivo.accept = 'image';
  selecionarArquivo.style.display = 'none';
  document.body.appendChild(selecionarArquivo);
  const selectImg = document.getElementById('selectImg');

  selecionarArquivo.click();


selecionarArquivo.addEventListener('change', function() {
  const file = selecionarArquivo.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function() {
    const imgPerfil = document.getElementById('imgPerfil');
    imgPerfil.src = reader.result;
    // código para enviar o novo arquivo para o servidor e atualizar o perfil do usuário
  });

  reader.readAsDataURL(file);
});
}

/*-------------------------------------------------------*/
/*mandar para o main*/ 
const title = document.getElementById('title');
title.addEventListener('click', ()=>{
  window.location = 'main.html'
})



/*-------------------------------------------------------*/