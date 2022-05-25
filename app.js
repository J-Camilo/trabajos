const maincard = document.getElementById('content');
const btn = document.querySelector('#generate');

const URL = "https://random.dog/woof.json";

/* muesta la imagen facil
function create(API) {
    fetch(URL).then( res => res.json())
              .then( data => {
                imagen.setAttribute('src', data.url);
                imagen.classList.add('img-card');
                console.log(data);
                })
}*/

const date = async(api)=>{
    const res = await fetch(api);
    const data = await res.json();
    return data;
}


const character = async()=> {
    const data = await date(URL);
    console.log(data);


    const cont = document.createElement('div');
    cont.classList.add('content2');
    const imagen = document.createElement('img');
    imagen.classList.add('image');
    const video = document.createElement('video');
    video.classList.add('video');
    
    if (/.(mp4)$/i.test(data.url)) {
        video.setAttribute('src',data.url);
        video.setAttribute('Loop',true);
        video.setAttribute('Autoplay',true);
        video.setAttribute('alt',data.fileSizeBytes);
        cont.appendChild(video);
        contenedor.appendChild(cont);
    }
    else if (/.(jpg)$/i.test(data.url)) {
        imagen.setAttribute('src',data.url);
        imagen.setAttribute('alt',data.fileSizeBytes);

        cont.appendChild(imagen);
        maincard.appendChild(cont);
    }
    men.setAttribute('class',"mens");
}

btn.addEventListener('click', character);
