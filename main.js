import Swal from 'sweetalert2';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const BASE_URL = `https://akabab.github.io/superhero-api/api/`;
const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random()* MAX_HEROES);

button.addEventListener('click', (event) => {
    event.preventDefault();
    const id= randomId();

    fetch(`${BASE_URL}/id/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
        img.src = data.images.md;
        name.innerHTML = data.name;
    })

    .catch((error) => Swal.fire({
        title: "Hero not found",
        text: ops,
        icon: "error",
        confirmButtonText: "Cool"
}))
})
