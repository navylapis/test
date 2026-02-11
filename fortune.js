'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
      // 名前が空の時は処理を終了する
      return;
    }

    // 診断結果表示エリアの作成
    resultDivision.innerText = '';
    
  // headerDivision の作成
  const headerDivision = document.createElement('div');
  headerDivision.setAttribute('class', 'card-header text-bg-primary');
  headerDivision.innerText = 'おみくじ結果';

  // bodyDivision の作成
  const bodyDivision = document.createElement('div');
  bodyDivision.setAttribute('class', 'card-body');

  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'card-text');
  const result = assessment(userName);
  paragraph.innerText = result;
  bodyDivision.appendChild(paragraph);

  // resultDivision に Bootstrap のスタイルを適用する
  resultDivision.setAttribute('class', 'card');

  // headerDivision と bodyDivision を resultDivision に差し込む
  resultDivision.appendChild(headerDivision);
  resultDivision.appendChild(bodyDivision);

    // ツイートエリアの作成
    tweetDivision.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue =
      'https://twitter.com/intent/tweet?button_hashtag=' +
      encodeURIComponent('おみくじ結果') +
      '&ref_src=twsrc%5Etfw';
  
    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class', 'twitter-hashtag-button');
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #おみくじ結果';
  
    tweetDivision.appendChild(anchor);


    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivision.appendChild(script);
  }
);

userNameInput.addEventListener(
  'keydown',
  event => {
    if(event.code === 'Enter') {
      assessmentButton.dispatchEvent(new Event('click'))
    }
  }
)

const answers = [
  '###userName###の運勢は大吉です。ガチャを引いてみるといいかも。ラッキーカラーは黄緑色',
  '###userName###の運勢は大吉です。勝負をするのは今かも。ラッキーカラーは赤色',
  '###userName###の運勢は大吉です。思い立ったら行動してみては？ラッキーカラーは黄色',
  '###userName###の運勢は吉です。無くしたものが見つかるかも。ラッキーカラーは紫色',
  '###userName###の運勢は吉です。レアドロップが出やすいかも。ラッキーカラーは青色',
  '###userName###の運勢は中吉です。欲しいものが割引されるかも。ラッキーカラーは緑色',
  '###userName###の運勢は中吉です。ロード時間がちょっと早いかも。ラッキーカラーはピンク',
  '###userName###の運勢は小吉です。お菓子の袋がすぐ開けれるかも。ラッキーカラーは橙色',
  '###userName###の運勢は小吉です。醤油の袋がすぐに切れるかも。ラッキーカラーは茶色',
  '###userName###の運勢は末吉です。割り箸が綺麗に割れるかも。ラッキーカラーはベージュ',
  '###userName###の運勢は末吉です。ゴミ箱にゴミを外さないかも。ラッキーカラーは水色',
  '###userName###の運勢は凶です。小指をどこかにぶつけるかも。ラッキーカラーは黒'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */

  // 選択肢の中からランダムになるはず

  function assessment(userName){
　var random = Math.floor( Math.random() * answers.length )

  const index = var random
  let result = answers[index];

  result = result.replaceAll('###userName###', userName);
  return result;
}

// ただの飾り　名残
function test() {
  console.log('診断結果の文章のテスト');

  //太郎
  console.log('太郎');
  console.assert(
    assessment('太郎') ===
    '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //次郎
  console.log('次郎');
  console.assert(
    assessment('次郎') ===
    '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //花子
  console.log('花子');
  console.assert(
    assessment('花子') ===
    '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  console.log('診断結果の文章のテスト終了');

  console.log('同じ名前なら、同じ結果を出力することのテスト');

  console.log('太郎');
  console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('次郎');
  console.assert(
    assessment('次郎') === assessment('次郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('花子');
  console.assert(
    assessment('花子') === assessment('花子'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('同じ名前なら、同じ結果を出力することのテスト終了');
}

test();
