/*  char=チェックするときの一つの要素 
    Set=同じ記号は一度しか保存されないbox
    Array.from(symbolsUsed)=Setで保存したきごうを空間を空けて返す
    const strLower = str.toLowerCase(); 文字列をすべて小文字にする*/
function checkString() {
      const str = document.getElementById("password").value;

      let BigCount = 0;
      let smoleCount = 0;
      let numberCount = 0;
      let symbolCount = 0;
      let score=0;
      let evale="";
      let adviceHTML = "";
      const symbolsUsed = new Set();
      const weakList = ["password", "123456789", "admin", "00000", "qwerty"];
      const strLower = str.toLowerCase();

      for (let char of str) {
        if (/[A-Z]/.test(char)) {
          BigCount++;
        } else if (/[a-z]/.test(char)) {
          smoleCount++;
        } else if (/[0-9]/.test(char)) {
          numberCount++;
        } else {
          symbolCount++;
          symbolsUsed.add(char);
        }
      }
    if (str.length==0){alert("情報が入力されていません");return;}
    if (BigCount>0){score++;}
    if (smoleCount>0){score++;}
    if (numberCount>0){score++;}
    if (symbolCount>0){score++;}
    if (str.length > 8 && str.length < 12){score +=2}
    else if (str.length>=12) {score +=3}
    else if (str.length<8){score--;}
    if (BigCount==0||smoleCount==0||numberCount==0||symbolCount==0){score--;}

    if (weakList.includes(strLower)) {score = 0;
      evale = "すぐに変えな";} 
    else {
    if (score <= 3) {
      evale = "非常に弱い";
    } else if (score === 4) {
      evale = "弱い";
    } else if (score === 5) {
      evale = "普通";
    } else if (score === 6) {
      evale = "強い";
    } else {
      evale = "非常に強い";
    }
  }

    if (score <= 3) {adviceHTML = `<p><a href="passgenerate.html" target="_blank">→ より強力なパスワードを生成する</a></p>`;
    }
      const resultHTML = `
        <p>文字数：${str.length}</p>
        <p>大文字：${BigCount} 文字</p>
        <p>小文字：${smoleCount} 文字</p>
        <p>数字　：${numberCount} 文字</p>
        <p>記号　：${symbolCount} 文字（使われた記号: ${Array.from(symbolsUsed).join(' ')}）</p>
        <p>評価　：<strong>${evale}(スコア：${score})</strong></p>
        ${adviceHTML}
      `;

      document.getElementById("result").innerHTML = resultHTML;
    }