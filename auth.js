
const pass = prompt("パスワードを入力してください");

if (pass !== "0518") {
  alert("パスワードが違います");
  location.href = "about:blank";
}
``