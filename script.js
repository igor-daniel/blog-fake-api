const readPost = async ()=>{
  let postArea = document.querySelector('.posts')
  postArea.innerHTML = 'Loading...'
  const req = await fetch('https://jsonplaceholder.typicode.com/posts')
  let content = await req.json();

  if(content.length > 0){
    postArea.innerHTML = '';

    for(let i in content){
      let postHtml = `<div class='card'><h1>${content[i].title}</h1> ${content[i].body}<hr/></div>`
      postArea.innerHTML += postHtml;
    }
   
  }else{
    postArea.innerHTML = 'Anyone posts'
  }
}
async function addNewPost(title, body){
  await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        title, 
        body,
        userId: 2 
      })
    }
  )
  document.querySelector('#titleField').value = '';
  document.querySelector('#bodyField').value = '';

  readPost();
}
document.querySelector('#inserirButton').addEventListener('click', ()=>{

  let title = document.querySelector('#titleField').value;
  let body = document.querySelector('#bodyField').value;

  if(title && body){
    addNewPost(title, body)
  }else{
    alert('Preencha todos os campos.')
  }
})
readPost()