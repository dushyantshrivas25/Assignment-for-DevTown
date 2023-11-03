import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



const products = [
    {   category:"fashion",
        name:"T-shirt",
        description: "A very branded and comfortable t-shirt",
        price:"299 only",
        image:"https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
        
    },
    {   category:"fashion",
        name:"Jeans",
        description: "The best jeans you will ever wear!",
        price:"150 only",
        image:"https://plus.unsplash.com/premium_photo-1665664652383-2308d742943c?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8fDA%3D"
    },
    {   category:"fashion",
        name:"Shoes",
        description: " Nike Adorable and comfortable shoes ",
        price:"999 only",
        image:"https://images.pexels.com/photos/1161528/pexels-photo-1161528.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {   category:"electronics",
        name:"Camera",
        description: "A camera with best quality images ",
        price:"35,999 only",
        image:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww"

    },{ category:"electronics",
        name:"Televison",
        description: " 4k curved Display best quality ",
        price:"25,999 only",
        image:"https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRlbGV2aXNpb258ZW58MHx8MHx8fDA%3D"
    },{ category:"electronics",
        name:"Mobile",
        description: "50 mp camera amoled display ",
        price:"18,999 only",
        image:"https://images.unsplash.com/photo-1585399000684-d2f72660f092?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBob25lfGVufDB8fDB8fHww"
    }
    ,{  category:"electronics",
        name:"Laptop",
        description: "very well designed and best performance gaming laptop",
        price:"49,999 only",
        image:"https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
    },{ category:"furniture",
        name:"Furniture",
        description: "Well designed and comfortable furniture delivered",
        price:"29,999 only",
        image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvdHRsZSUyMCUyQ2dvZ2dsZSUyQ2Z1cm5pdHVyZSUyQ3xlbnwwfHwwfHx8MA%3D%3D"
    }
    ,{  category:"utensils",
        name:"Bottle",
        description: " Nayasa water Bottle with insulation best quality",
        price:"199 only",
        image:"https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    ,{  category:"fashion",
        name:"Goggles",
        description: " Best sunglasses at our shop premium quality",
        price:"499 only",
        image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
    }
    ,{  category:"travel",
        name:"Bag",
        description: "pemium quality bag for you at reasonable price" ,
        price:"2999 only",
        image:"https://plus.unsplash.com/premium_photo-1679423807759-afb3c145c535?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGx1Z2dhZ2UlMjBiYWd8ZW58MHx8MHx8fDA%3D"
    }
    ,{  category:"electronics",
        name:"Watch",
        description: " Titan quality and designer watch ",
        price:"899 only",
        image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
    }
    
   
];

const itemsPerPage = 4; // Adjust the number of items per page as needed.

const Main = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order is ascending


    const filterProducts = (category) => {
      if (category === 'all') {
        return products; // If 'all' is selected, return all products.
      } else {
        return products.filter((product) => product.category === category);
      }
    };
    const handleSort = () => {
      const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'; // Toggle sorting order
      setSortOrder(newSortOrder);
    };
    
  
    
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filterProducts(selectedCategory).slice(indexOfFirstItem, indexOfLastItem);
    
  
    const nextPage = () => {
      if (currentPage < Math.ceil(products.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    return (
      <div className='center'>
        <select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  <option value="all">All</option>
  <option value="fashion">Fashion</option>
  <option value="electronics">Electronics</option>
  <option value="furniture">Furniture</option>
  <option value="utensils">Utensils</option>
  <option value="travel">Travel</option>
</select>

        <div className="part-1">
          {currentProducts.map((product, index) => (
            <div key={index} className="c-p1">
              <img src={product.image} alt={product.name} />
              <h1>{product.name}</h1>
              <h4>{product.description}</h4>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
        {/* <div className="part-2">
          {currentProducts.map((product, index) => (
            <div key={index} className="c-p2">
              <img src={product.image} alt={product.name} />
              <h1>{product.name}</h1>
              <h4>{product.description}</h4>
              <p>₹{product.price} only</p>
            </div>
          ))}
        </div> */}
        {/* Adding pagination controls */}
        <div className="pagination-controls">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(products.length / itemsPerPage)}>
            Next
          </button>
        </div>
      </div>
    );
  }
  
  export default Main;
  
  
  
  
  
  
  




 