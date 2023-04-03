var notificar = new Audio('css/efeitos sonoros/notific.mp3');

function CS(palavra, event){
  event.preventDefault();
  
  var inputs = document.querySelectorAll('input');
  for(var i = 0; i < inputs.length; i++){
    if(inputs[i].value === ''){
      return;
    }else{
      var ModalCS = document.getElementById('ModalCS');
      var excluir = ModalCS.querySelector('span');
      var imgModal = document.getElementById('imgModal');
      
      if (palavra == 'excluir'){
        notificar.play();
        excluir.style.color = 'red';
        excluir.innerText ='Excluir';
        ModalCS.style.display = 'flex';
      } else if(palavra == 'cadastrar'){
        notificar.play();
        imgModal.src = 'css/img/pareR.png'
        excluir.style.color = 'green';
        excluir.innerText ='Salvar';
        ModalCS.style.display = 'flex';
      }
    }
  }

 
}

function RespostaCancelar(){
  var ModalCS = document.getElementById('ModalCS');
  ModalCS.style.display ='none';
}

function  RespostaSalvar(){
  alert('salvar banco');
}
