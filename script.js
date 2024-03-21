const url = `https://meme-api.com/gimme/wholesomememes`;

const generateBtn = document.querySelector('.generateBtn');

const image = document.querySelector('.generated-image');


const author = document.querySelector('.meme-author');


const title = document.querySelector('.meme-title')

const updateDetails = (data) =>{
    image.src = data.url
    title.innerHTML = data.title;
     author.innerHTML =  `Meme By :` + data.author;
}

const generateMeme = ()=>{
//    let response = await fetch(url)
//    let data = await response.json();
//    console.log(data);
//    updateDetails(data);
   fetch(url)
   .then((res)=>res.json())
   .then((data) => updateDetails(data));
   
}
    generateBtn.addEventListener('click',generateMeme);
