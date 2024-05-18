//要素取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');
//イベント定義
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});