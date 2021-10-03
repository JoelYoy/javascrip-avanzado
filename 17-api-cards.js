const $cardsCont = document.querySelector('#cardsCont');

const showcards =() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(resp => resp.json())
    .then(data =>{
        data.forEach(card => {
            col = document.createElement('div');
            col.classList.add('col-md-4'); 
            col.innerHTML =`
            <div class="card">
                <img src="${card.url}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text text-center font-weight-light">${card.title}</p>
                </div>
            </div>`;
            $cardsCont.appendChild(col);
        });
    })
}
showcards();