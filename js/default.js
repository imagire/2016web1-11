// 確認ダイアログを表示
var result = window.confirm('準備OK?');
// 結果を表示
if(result){
  document.getElementById('choice').textContent = 'OKが押されました';
}else{
  document.getElementById('choice').textContent = 'キャンセルが押されました;
}
