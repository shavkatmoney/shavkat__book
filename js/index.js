let elList = document.querySelector('.ul');
let elHeroinner = document.querySelector('.hero__inner');
let elHero__top = document.querySelector('.hero__top-wrapper')
let elDarkButton = document.querySelector('.dark');
let elBody = document.querySelector('.body')
elDarkButton.addEventListener('click' , () => {
  elBody.classList.toggle('dark')
})


let elInputSearch = document.querySelector('.header__inp')

elInputSearch .addEventListener('input' , function () {
  let SearchValue = elInputSearch.value
  console.log(SearchValue);

  fetch(`https://www.googleapis.com/books/v1/volumes?q=$%7B${SearchValue}%7D`)
  .then(res => res.json())
  .then(data => render(data))
})



function render(res) {
   console.clear()
  console.log(res);
let elList = document.createElement('ul')
elList.innerHTML = null

elHeroinner.appendChild(elList)


hero__length.textContent = `Showing ${res.items.length} Result(s)`


for (let i = 0; i < res.items.length; i++) {
  const item = res.items[i];

  let headItem = document.createElement('li');
  let img = document.createElement('img');
  let username = document.createElement('h2');

  img.src = item.volumeInfo.imageLinks.thumbnail
  
  username.textContent = item .username

  headItem.classList = "head__item"
  img.classList = "head__img"
  elList.classList = "hero__list"


  elHeroinner.appendChild(elList);
  elList.appendChild(headItem);
  headItem.appendChild(username);
  headItem.appendChild(img);

}
}



//  let elInputSearch = document.querySelector('.header__inp')

//  function elInputSearch() {
//    let searchValue = elInputSearch.value
//    console.log(searchValue);

//  elInputSearch.addEventListener('input' , () => {
  
//  } 