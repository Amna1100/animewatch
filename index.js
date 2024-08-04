 

const apiUrl="https://api.jikan.moe/v4"
const searchText=document.getElementById("searchText");
const searchResult=document.getElementById("searchResult");
 searchText.addEventListener("keyup",function(){

if(this.value.length>3)
{
  getAnimes(this.value)
}
 })
 async function getAnimes(query)
 {
const res=await fetch(`${apiUrl}/anime?q=${query}`);
const animes=await res.json();
console.log(animes.data)
searchResult.innerHTML=` `
// to empty the searchresult so not repeat
animes.data.map(anime=>
{
 searchResult.innerHTML+=`<li class="singleAnimes"   data-image="${anime.images.jpg.image_url}">
 <a href="${anime.url}"  target="_blank">   ${anime.title} </a> 
  </li>`;
 
})
 const singleAnimes=Array.from(document.querySelectorAll(".singleAnimes"))
const displayimage=document.getElementById("displayimg") 
singleAnimes.map(singleAnime =>{
singleAnime.addEventListener("mouseenter",function(){

  displayimage.style.display="block";
   displayimage.innerHTML=` <img src="${this.dataset.image}" >`
})
singleAnime.addEventListener("mouseout",function(){

  displayimage.style.display="none";
 
})
singleAnime.addEventListener("click",function(){

  displayimage.style.display="none";
 
})
})
    
 } 


//Trending Games .........................

const topTvAnime=document.getElementById("topAnime")
async function getTopanimes()
{
 const res=await fetch(`${apiUrl}/top/anime`)
 const topAnimes= await res.json() 
console.log(topAnimes.data)
 
topAnimes.data.map(topAnime =>{

topTvAnime.innerHTML+= 
`<div class="col-lg-3 col-md-6">
<div class="item">
  <div class="thumb">
    <a href="${topAnime.url}" target="_blank"><img src="${topAnime.images.jpg.image_url}" alt=""></a>
    <span class="price"> ${topAnime.score}</span>
  </div>
  <div class="down-content">
    <span class="category">${topAnime.source}</span>
    <h4>${topAnime.title}</h4>
 
  </div>
</div>
</div>`
 

})
  
}
getTopanimes()
 
// Most played .........................

const mostTopAnime=document.getElementById("mostAnimes")
async function getMostanimes()
{
const res=await fetch(`${apiUrl}/seasons/now`) 
const MostAnimes=await res.json()
console.log(MostAnimes.data)

MostAnimes.data.map(MostAnime =>
{
mostTopAnime.innerHTML+=` <div class="col-lg-2 col-md-6 col-sm-6">
<div class="item">
  <div class="thumb">
    <a href="${MostAnime.url}"><img src="${MostAnime.images.jpg.image_url} " alt=""></a>
  </div>
  <div class="down-content">
      <span class="category">Adventure</span>
      <h4>${MostAnime.title.substring(0,20)}</h4>
      <a href="product-details.html">Explore</a>
  </div>
</div>
</div> `
 

}
)

}

getMostanimes()
//   top categories
const toptvcategarot=document.getElementById("topCategory")
async function gettopicanimes()
{
  console.log("hi there")
const res=await fetch(`${apiUrl}/schedules`) 
const topcAnimes=await res.json()
console.log(topcAnimes.data)

topcAnimes.data.map(topcAnime =>
{
  toptvcategarot.innerHTML+=`<div class="col-lg col-sm-6 col-xs-12">
<div class="item">
   <h4>${topcAnime.title.substring(0,20)}</h4>
  <div class="thumb">
    <a href="${topcAnime.url}"><img src="${topcAnime.images.jpg.image_url}" alt=""></a>
  </div>
</div>
</div>  `
  
}
)}
gettopicanimes()
// photo


const photouserandom=document.getElementById("photorandom")
async function photoRandom()
{
  
const res=await fetch(`${apiUrl}/random/characters`) 
const photoran=await res.json()
photouserandom.innerHTML=`<img src="${photoran.data.images.jpg.image_url}" alt="">  `
}
photoRandom()
  // <img src="assets/images/banner-image.jpg" alt="">  





 





 
