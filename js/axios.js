init();

function init() {
  axios.get('https://reqres.in/api/users')
    .then(function (response) {
      let tabela = document.querySelector('#tabela');
      let items = response.data.data;
      let a = 0;
      for (let properties in items) {
        tabela.innerHTML += '<div class="usuario" id="user-' + (a + 1) + '"><div><img src=' + items[a].avatar + ' /></div><div class="nome">' + items[a].first_name + ' ' + items[a].last_name + '</div><div class="email">' + items[a].email + '</div><div class="editar"><button class="button__usuario submit">editar usuário</button></div></div>';
        a++;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
