

//First file

import { useState,useEffect } from "react";
import CategoriesData from "../../Service/CategoriesData";
import AddProductForm from "./AddProductForm";
import { StringifyLocalData,ParseLocalData } from "../../Service/LocalStorage";
import {v4}from "uuid"
const AdminDash = () => {
  /*
   **Random id generation
   */

  const [localData, setLocalData] = useState([]);



  
  const [productData, setProductData] = useState({
    Id: v4(),
    Category: "",
    Name: "",
    Price: "",
    Qty: "",
    SellPrice: "",
  });


  
  useEffect(() => {
    const data = ParseLocalData("products")|| [];
    setLocalData(data);
  }, []);



  const { Name, Price, Qty, SellPrice, Category } = productData;

  const InputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
      // Category:value
    });
    // console.log({name,value})
    // console.log({productData})
  };

  const SaveLocalStg = (e) => {
    e.preventDefault();

    // localStorage.setItem(date,JSON.stringify(productData) )
    const data = JSON.parse(localStorage.getItem("products")) || [];
    data.push(productData);
    StringifyLocalData("products",data);
    setLocalData((previousState)=>[...previousState,productData])

    
    setProductData({
      Id:v4(),
      Category: "",
      Name: "",
      Price: "",
      Qty: "",
      SellPrice: "",
    });
  };
  // console.log({key})

  /*
   **For Category selection
   */
  let CateGory = (e) => {
    let v = e.target.value;
    setProductData({ ...productData, Category: v });
  };

  return (
    <>
      <div>
        Select Categories
        <select name="cat" value={Category} onChange={CateGory}>
          <option value="">Select a Category</option>
          {CategoriesData.map((items) => {
            let { name, id } = items;
            return <option key={id}>{name}</option>;
          })}
        </select>
      </div>

      <div>
        Product Name
        <input
          type="text"
          name="Name"
          placeholder="Enter Product Name"
          value={Name}
          onChange={InputChange}
        />
      </div>

      <div>
        Price
        <input
          type="text"
          name="Price"
          placeholder="Price"
          value={Price}
          onChange={InputChange}
        />
      </div>
      <div>
        Qty
        <input
          type="text"
          name="Qty"
          placeholder="Qty"
          value={Qty}
          onChange={InputChange}
        />
      </div>
      <div>
        Selling Price
        <input
          type="text"
          name="SellPrice"
          placeholder="Selling Price"
          value={SellPrice}
          onChange={InputChange}
        />
      </div>

      <button onClick={SaveLocalStg}>Add Product</button>

      {localStorage.length > 0 && <AddProductForm data={localData} />}
    </>
  );
};

export default AdminDash;





