async function getprodact(){

  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
   const products = data.products;

   const result = products.map( function(ele){

   return `
   <h2>${ele.title}</h2>
   <img src="${ele.thumbnail}"/>
   `;
           

   } );
   
   document.querySelector(".products").innerHTML= result;
}


getprodact();

  