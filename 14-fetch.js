/* Fetch nos permite hacer peteciones http desde javascrip */
/* Accedemos a un recurso de un servidor */
/* Json = Javascrip objecy Notatuon */

const peticion = fetch ('https://jsonplaceholder.typicode.com/todos/1')
.then(resp => resp.json()).then(data => {
  console.log(data);
}).catch(e => {
  console.log(e);
});

console.log(peticion);
