// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./CakeList.css";
import axios from "axios";
import { toast } from "react-toastify";

const CakeList = () => {
  const url = "http://localhost:5000/api/cakes";
  const [list, setList] = useState([]);

  // Fetch list of cakes
  const fetchList = async () => {
    try {
      const response = await axios.get(url);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching cake list");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error connecting to server");
    }
  };

  const removeCake = async (cakeId) => {
    try {
      const response = await axios.delete(`${url}/${cakeId}`);
      if (response.data.success) {
        toast.success("Cake deleted successfully");
        await fetchList();
      } else {
        toast.error("Error deleting cake");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error deleting cake");
    }
  };

  // useEffect to call fetchList on component mount
  useEffect(() => {
    fetchList();
  }, []); // Empty dependency array means it will run once after initial render

  return (
    <div className="list">
      <h2 className="page-title">Cake Inventory</h2>
      <p className="list-main-title">All Cakes List</p>
      <div className="list-table">
        <div className="list-table-format titles">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Quantity</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`http://localhost:5000/uploads/${item.image}`} alt="" />
            <p>{item.productName}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <p>{item.qty}</p>
            <p onClick={() => removeCake(item._id)} className="cursor">
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeList;
