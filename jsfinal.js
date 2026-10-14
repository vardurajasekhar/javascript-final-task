let Api="https://fakestoreapi.com/products/"

fetch(Api).then((succdata)=>{
    return succdata.json()
})
.then((data1)=>{
    console.log(data1)
    let div1=document.querySelector(".container")

    let div2=document.querySelector(".card")
        data1.forEach((c,i,oa)=>{
                div2.innerHTML +=` <div class="product"> <img src="${c.image}"/>  <h2>${c.title.slice(0,40)}</h2>  <h3>${c.category}</h3> 
                                    <h2>₹${c.price}</h2>  <p><b>Rating:</b> ${c.rating.rate}</p>
                                    <p><b>Reviews:<b> ${c.rating.count}</p>  <p>${c.description.slice(0,120)}</p> </div>`
        })
    })

.catch((error)=>{
    console.warn(error.message)
})
.finally(()=>{
    console.log("API called")
})


// category
// : 
// "men's clothing"
// description
// : 
// "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description."
// id
// : 
// 4
// image
// : 
// "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
// price
// : 
// 15.99
// rating
// : 
// {rate: 2.1, count: 430}
// title
// : 
// "Mens Casual Slim Fit"