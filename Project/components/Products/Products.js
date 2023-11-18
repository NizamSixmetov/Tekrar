class Products {
    render(){
        let htmlCatalog = '';
        CATALOG.forEach(({id, name, img, price}) =>{
            htmlCatalog += `
            <li>
                <span>${name}/span>
                <img src="${img}"/>
                <span>${price}/span>
                <button>Sebete elave et</button>
            </li>
            `;
        });
        const html1 = `
        <ul>${htmlCatalog}</ul>
        `;
        ROOT_PRODUCTS.innerHTML = html1;
    }
}
const productsPage = new Products();
productsPage.render(); 