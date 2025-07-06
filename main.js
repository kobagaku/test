document.getElementById('sendRequest').addEventListener('click', async () => {
    console.log('main.js が読み込まれました！');
    const responseBox = document.getElementById('response');
    responseBox.textContent = '読み込み中...';

  try {
    const res = await fetch();
    const data = await res.json();

    responseBox.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    responseBox.textContent = 'エラー: ' + err.message;
  }
});