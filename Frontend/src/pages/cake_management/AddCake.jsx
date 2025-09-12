import React, { useState } from "react";
import "./AddCake.css";
import { assets } from "../../assets/admin_assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

const AddCake = () => {
  const url = "http://localhost:5000/api/cakes";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    productName: "",
    description: "",
    price: "",
    qty: 1,
    category: "Butter Cake",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("productName", data.productName);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("qty", Number(data.qty));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(url, formData);
      if (response.data.success) {
        setData({
          productName: "",
          description: "",
          price: "",
          qty: 1,
          category: "Butter Cake",
        });
        setImage(false);
        toast.success("Cake added successfully!");
      }
    } catch (error) {
      console.error("Error adding cake:", error);
      toast.error(error.response?.data?.message || "Error adding cake");
    }
  };

  return (
    <div className="add">
      <h2 className="page-title">Add New Cake</h2>
      <form className="flex-coloumn" onSubmit={onSubmitHandler} action="">
        <div className="add-img-upload flex-coloumn">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-coloumn">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.productName}
            type="text"
            name="productName"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-descrption flex-coloumn">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write Content Here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-coloumn">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="Butter Cake">Butter Cake</option>
              <option value="Layered Cake">Layered Cake</option>
              <option value="Fruit Cake">Fruit Cake</option>
              <option value="Cheese Cake">Cheese Cake</option>
              <option value="Cup Cake">Cup Cake</option>
              <option value="Theme Cake">Theme Cake</option>
              <option value="Donut">Donut</option>
              <option value="Pastries">Pastries</option>
            </select>
          </div>
          <div className="add-price flex-coloumn">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="₹20"
            />
          </div>
          <div className="add-qty flex-coloumn">
            <p>Quantity</p>
            <input
              onChange={onChangeHandler}
              value={data.qty}
              type="Number"
              name="qty"
              placeholder="1"
              min="1"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddCake;
