export default function ComponentsLists() {
    let product = ["Laptop", "Headphones", "Keyboard", "Mobile", "Mouse", "Laptop"]

    let productsList = [
        { id: 1, name: "Laptop", price: 35000 },
        { id: 2, name: "Headphones", price: 3500 },
        { id: 3, name: "Mouse", price: 1000 },
        { id: 4, name: "Keyboard", price: 4000 },
    ];

    return (
        <>
            <ul>
                {/* <li>{product[0]}</li>
                <li>{product[1]}</li>
                <li>{product[2]}</li>
                <li>{product[3]}</li> */}
                {/* {product.map(function (ele) {
                    return <li>{ele}</li>
                })} */}
                {/* {product.map(function (ele,index) {
                    return <li key={index}>{ele}</li>
                })} */}

                {productsList.map(function(ele){
                    return <li key={ele.id}>Name: {ele.name} ,Price: {ele.price}</li>
                })}
            </ul>
        </>
    )
}