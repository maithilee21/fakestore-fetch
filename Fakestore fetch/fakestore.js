

function getdata(catname){
    const showproducts = document.getElementById('product-container');
    showproducts.innerHTML = ' ';
    
    var apiPath = `https://fakestoreapi.com/products${catname ? '/category/' + catname : ''}`
    

    fetch(apiPath)
    .then((res)=>res.json())
    .then(val=>{
        console.log(val);
        var result = val;
        console.log(result);

        result.forEach(({image , title , price})=>{

            const card = document.createElement('div');
                    card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 
    
                    card.innerHTML = `
                        <div class="card h-100">
                            <img src="${image}" class="card-img-top h-50" alt="${title}">
                            <div class="card-body">
                                <h5 class="card-title">$${price}</h5>
                                <p class="card-text">${title}</p>
                            </div>
                        </div>
                    `;
                    
                    showproducts.appendChild(card);
        })
        .catch(error => console.log("Error Fetching Data :", error));
    })

     
}


document.getElementById('electronics').onclick = function(){
    getdata('electronics');
}


document.getElementById('jewelery').onclick = function() {
    getdata("jewelery");
};



document.getElementById('mens').onclick = function() {
    getdata("men's clothing");
};


document.getElementById('womens').onclick = function() {
    getdata("women's clothing");
};


document.getElementById('submit').onclick = function() {
    var txtdata = document.getElementById('categoryName').value;
    console.log(txtdata);
    
    getdata(txtdata);
    document.getElementById('categoryName').value = '';
};

document.getElementById('home').onclick = function() {
    getdata();
};

document.addEventListener('DOMContentLoaded', () => {
    getdata();
});