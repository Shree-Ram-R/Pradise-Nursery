import React from 'react';

import './ProductPage.css';

function ProductPage({ addToCart }) {
  const productsData = [
    {
      id: 1,
      name: "Lily Plant ",
      price: 19.99,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZPo1tFTvsHitT4lEyaGCgloDBrVGpj1wD4WdciO5UxSDHsLaQRa4pq0KTmIWxtrQ2tATt61aO-gyr9orFOhbbO_oMh_cFvsn4HWmqAZE&usqp=CAE",
      category: "Indoor",
    },
    {
      id: 2,
      name: "gardenia flower",
      price: 15.99,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCDzUOBwkD_4Cb1temHpOiFFEkdUfOm7A7uZ_A_O769SfHLkR-wqZW5WhD61ABCX1QJNnLlq0EFMGfSAaSagKktYRTs753tjIAnklL4oBC&usqp=CAE",
      category: "Indoor",
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 25.00,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYfB1WsUzw1gCuIf_m3FbTk_awS-sbKSAGOpmFMpHJHEO_mnq2GW6ke1L49z9P5EzFXhpEuMVxmS8B4KR6Vx2nbJ2pbZ7u-Q&usqp=CAE",
      category: "Indoor",
    },
    {
      id: 4,
      name: "ZZ Plant Sapling",
      price: 19.99,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTl_nAVXpXnZe2mlWQl7vifR7Q8WPUEzCj5EFUgXOopzipeUzIG7vrMv8fY0iVg3nKup-Bq5nRYmG5AbTCC6gLi1fs8eOvlfg&usqp=CAE",
      category: "Indoor",
    },
    {
      id: 5,
      name: "Diervilla Rivularis",
      price: 15.99,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMklQ9WVU4iwZTigSIKqTlPoR3ujqO3bvnb3rIEQg0C2qsTFHOIjKObefRWXpS1WcVURx9K0lUk0QoVP_jSqsY8ksY7jX-&usqp=CAE",
      category: "Indoor",
    },
    {
      id: 6,
      name: "Coleus",
      price: 25.00,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTCIpqF7jVfVPj8rIrYnavffh6cijJ_5sV9BvzQTRlMMom46HwLYs_y8qsWaxsnu5zYf0-J2H2Rpd7KSC-Ir86xCkzN2lNHmQIrooiHkwvY&usqp=CAE",
      category: "Indoor",
    },
    {
      id: 7,
      name: "Pilea involucrata friendship plant",
      price: 19.99,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhfJc24wNObegMgLt4KEHsWoOqVXFd85RyCv1biXqmHguVkF9gXAvQEG3_Qm1LUMxBv9C_x7RKCB2aNNaGr0ouhKjPZdQp6Q&usqp=CAE",
      category: "Indoor",
    },
    {
      id: 8,
      name: "Gurveplantationi Coleus",
      price: 15.99,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzZ0gHrj-UURC8pyW1UyjEWs2Bqd3Rs-YGuuEZk5ie9N-vZphKFRkCTdY1uai9DhPNkSvfmMj748dxTsaay-mJ5zgToXUheFtYA1Dj4OgP&usqp=CAE",
      category: "Indoor",
    },
    {
      id: 9,
      name: "Platone Rose",
      price: 25.00,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAM05mmrruJ5_YpVBVZN6iVGKzs8CFtWAPlP3a12ZpQTvR9Y5C5BltuMzEhwZMle41FtFGy5z090NG5PnlHRdZl0fxalUFyg&usqp=CAE",
      category: "Indoor",
    },
    // Add more products as needed
  ];
  
 
  
  return (

    <div className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {productsData.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
