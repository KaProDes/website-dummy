var UserEnteredText = document.getElementById('paster');
var PostArea = document.getElementById('post-area')
var form = document.getElementById('paste-bin-form');

form.addEventListener('submit',function(event){
  if(!UserEnteredText.value){
    alert("Please enter values");
  }else{
    var src = UserEnteredText.value;
    PostArea.innerText = src;
  event.preventDefault();
}});
