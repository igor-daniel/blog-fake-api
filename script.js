// https://jsonplaceholder.typicode.com/posts

// // function clickCall(){
// //   fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
// //     return response.json();
// //   }).then((json)=>{
// //     console.log(json[0].title)
// //   })
// // }

// let clickCall = async ()=>{
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   let json = await response.json();
//   console.log(json[0].title)
// }

// let btn = document.querySelector('.btn');
// btn.addEventListener('click', clickCall )

let readApi = async ()=>{
  let postArea = document.querySelector('.posts');
  postArea.innerHTML = 'Carregando...';
  let req = await fetch('https://jsonplaceholder.typicode.com/posts');
  let content = await req.json()

  if(content.length > 0){
    postArea.innerHTML = '';
    for(let i in content){
      let postHtml = `<div><h1>${content[i].title}</h1>${content[i].body} <hr/></div>`
      postArea.innerHTML += postHtml;
    }
  }else{
    postArea.innerHTML = 'Nenhum post para ser adicionado.'
  }
};
readApi();