
// promiseAPI1 function to feth first api with 1s delay
async function promiseAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        displayPosts(data.posts);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

// function for rendering the posts on table 
function displayPosts(posts) {
  let body1 = document.getElementById("table_body_1");
  body1.innerHTML = "";
  posts.forEach((data, index) => {
    body1.innerHTML += `

                   <tr>
                    <td>${data.id}</td>
                    <td>${data.title}</td>
                    <td>
                    ${data.body}
                    </td>
                    <td>
                        <p>
                            <b><i class="fa fa-tag" style="font-size:24px"></i> </b> ${data.tags}
                        </p>
                        <p>
                            <b><i class="fa fa-thumbs-up" style="font-size:24px"></i></i> </b> ${data.reactions.likes}<br>

                        </p>
                        <p>
                            <b><i class="fa fa-thumbs-down" style="font-size:24px"></i> </b> ${data.reactions.dislikes}<br>

                        </p>
                        <p>
                            <b><i class="fa fa-eye" style="font-size:24px"></i> </b> ${data.views}<br>

                        </p>
                        <p>
                            <b><i class='far fa-address-card' style='font-size:24px'></i> </b> ${data.userId}

                        </p>
                    </td>
                </tr>

                  `;
  });
}
// PromiseAPI1();






// promiseAPI2 function to feth second api with 2 second delay
function PromiseAPI2() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(async () => {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        displayProducts(data.products);
        resolve(true)
      }, 2000);
    } catch (error) {
        reject(error)
    }
  });
}

// function for rendering the products on table
function displayProducts(products) {
  let body2 = document.getElementById("products_table_body");
  body2.innerHTML = "";
  products.forEach((data, index) => {
    body2.innerHTML += `
         
        <tr>
            <td>${data.id}</td>
            <td>
              <img src="${data.thumbnail}" 
                   alt="Product_image">
            </td>
            <td>${data.title}</td>
            <td>${data.description}</td>
            <td>${data.category}</td>
            <td>$${data.price}</td>
            <td>${data.rating}/5</td>
            <td>${data.stock}</td>
        </tr>

             `;
  });
}
// PromiseAPI2()






// promiseAPI2 function to feth third api with 3s dealy
function PromiseAPI3(){
    return new Promise((resolve, reject)=>{
        try{
            setTimeout(async ()=>{
               let response = await fetch('https://dummyjson.com/todos');
               let data  = await response.json();
               displayTodo(data.todos);
               resolve(true)
            },3000)
         }catch(error){
            reject(error)
         }
    }) 
}

// function for rendering the products on table
function displayTodo(todos){
    let tbody3 = document.getElementById('todos_table_body');
    tbody3.innerHTML = '';

   todos.forEach((data , index)=>{
      tbody3.innerHTML += `
      
        <tr>
            <td>${data.id}</td>
            <td>${data.todo}</td>
            <td>${data.completed ? "completed" : "pending"}</td>
            <td>${data.userId}</td>
          </tr>


      `
   })
}
// PromiseAPI3();




// using promise chain  when user click on button->
let btn = document.getElementById('render_btn');

btn.addEventListener('click', ()=>{
    promiseAPI1().then(()=>PromiseAPI2())
    .then(()=>PromiseAPI3())
    .catch((error)=>console.error("Error in fetching data:", error))
});



