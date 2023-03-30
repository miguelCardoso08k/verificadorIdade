const data = new Date();
const ano = data.getFullYear();
const $nasc = document.getElementById("txtano");
let idade;
const $sex = document.getElementsByName("radsex");
let genero;
let img;
const $res = document.getElementById("res");

function verificar() {
  img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (
    $nasc.value.length == 0 ||
    Number($nasc.value) > ano ||
    Number($nasc.value) < 1900
  ) {
    window.alert("[ERRO] Insira os dados novamente");
  } else {
    idade = ano - Number($nasc.value);
    if ($sex[0].checked) {
      genero = "Homem";
      $res.innerHTML = `<p>Você é homem de ${idade} anos idade</p>`;
      if (idade < 4) {
        // jovem criança
        img.setAttribute("src", "assets/image/bebeHomem.jpg");
        $res.append(img);
      } else if (idade <= 12) {
        //criança
        img.setAttribute("src", "assets/image/criancaHomem.jpg");
        $res.append(img);
      } else if (idade < 18) {
        //adolescente
        img.setAttribute("src", "assets/image/adolescenteHomem.jpg");
        $res.append(img);
      } else if (idade < 30) {
        //jovem adulto
        img.setAttribute("src", "assets/image/homem20anos.jpg");
        $res.append(img);
      } else if (idade <= 45) {
        //adulto maduro
        img.setAttribute("src", "assets/image/homem30anos.jpg");
        $res.append(img);
      } else if (idade <= 60) {
        //homem idoso
        img.setAttribute("src", "assets/image/homem50anos.jpg");
        $res.append(img);
      } else if (idade > 60) {
        //homem idoso 1
        img.setAttribute("src", "assets/image/homemVelho.jpg");
        $res.append(img);
      }
    } else {
      genero = "mulher";
      $res.innerHTML = `<p>Você é uma mulher de ${idade} anos idade</p>`;
      if (idade < 4) {
        // jovem criança
        img.setAttribute("src", "assets/image/bebeMulher.jpg");
        $res.append(img);
      } else if (idade <= 12) {
        //criança
        img.setAttribute("src", "assets/image/criancaMulher.jpg");
        $res.append(img);
      } else if (idade < 18) {
        //adolescente
        img.setAttribute("src", "assets/image/adolescenteMulher.jpg");
        $res.append(img);
      } else if (idade < 30) {
        //jovem adulta
        img.setAttribute("src", "assets/image/mulher20anos.jpg");
        $res.append(img);
      } else if (idade <= 45) {
        //adulta madura
        img.setAttribute("src", "assets/image/mulher30anos.jpg");
        $res.append(img);
      } else if (idade <= 60) {
        //Mulher idosa
        img.setAttribute("src", "assets/image/mulher50anos.jpg");
        $res.append(img);
      } else if (idade > 60) {
        //Mulher idosa 1
        img.setAttribute("src", "assets/image/mulherVelha.jpg");
        $res.append(img);
      }
    }
  }
}
