import { useState } from "react";
import axios from "axios";

const Irrigation = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { name, type, value, files } = e.target;
    setInput(values => ({
      ...values,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const dataSave = () => {
    const formData = new FormData();
    Object.entries(input).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios.post("http://127.0.0.1:8000/IrrigationItem/", formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(() => {
      alert("Data saved!");
    }).catch(err => {
      console.error("Save error:", err.response?.data || err.message);
    });
  };

  return (
    <>
      <h1>Add Irrigation Product</h1>
      Product ID: <input name="product_id" type="text" onChange={handleInput} /><br />
      Name: <input name="name" type="text" onChange={handleInput} /><br />
      Description: <input name="description" type="text" onChange={handleInput} /><br />
      Price: <input name="price" type="number" onChange={handleInput} /><br />
      Stock: <input name="stock" type="number" onChange={handleInput} /><br />
      Category: 
      <select name="category" onChange={handleInput}>
        <option value="">Select Category</option>
        <option value="Drip">Drip</option>
        <option value="Sprinkler">Sprinkler</option>
        <option value="Pipes">Pipes</option>
        <option value="Pumps">Pumps</option>
      </select><br />
      Image: <input name="image" type="file" accept="image/*" onChange={handleInput} /><br />
      Discharge: <input name="discharge" type="text" onChange={handleInput} /><br />
      Manufacturer: <input name="manufacturer" type="text" onChange={handleInput} /><br />
      Dealer: <input name="dealer" type="text" onChange={handleInput} /><br />
      <button onClick={dataSave}>Data Save!</button>
    </>
  );
};

export default Irrigation;
