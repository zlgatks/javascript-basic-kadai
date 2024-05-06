//btnのHTML要素を取得する。
const btn = document.getElementById('btn');
//btn押下時のイベント判定
btn.addEventListener('click', () => {

  const content = document.getElementById('text');

  content.textContent = "ボタンをクリックしました";
});