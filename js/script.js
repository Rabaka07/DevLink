var toggleMode = () => {
  const html = document.documentElement;
  html.classList.toggle("light");
  const isLinght = html.classList.contains("light");
  const srcValue= isLinght? "../img/blanco.jpg" : "../img/avatar.jpg";
  const altValue= isLinght?"imagem de perfil com avatar na cor branca-Modo claro" : "imagem de perfil com avatar na cor preta-Modo escuro"

  document.querySelector("#profile img").setAttribute("src",srcValue)
  document.querySelector("#profile img").setAttribute("alt", altValue)
};
