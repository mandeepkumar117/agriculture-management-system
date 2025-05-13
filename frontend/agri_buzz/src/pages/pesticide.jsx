import { useState } from "react";
import axios from "axios";


const Pesticide=()=>{

    const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log({ ...input, [name]: value });
  };

  const dataSave = () => {
    let url = "http://127.0.0.1:8000/pesticide/";
    const formData = new FormData();

    Object.keys(input).forEach((key) => {
      let value = input[key];
      if (key === 'price') value = parseFloat(value);
      formData.append(key, value);
      console.log(input)
    });

    axios.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((res) => {
      alert("Data Save");
    }).catch((err) => {
      console.error('Error details:', err.response ? err.response.data : err.message);
      alert("Error saving data");
    });
  };
    return(
        <>
         <h1>Add Pestcide</h1>
      Product ID: <input name="product_id" type="text" onChange={handleInput} /><br />
      Name: <input name="name" type="text" onChange={handleInput} /><br />
      Category: 
      <select name="category" onChange={handleInput}>
        <option value="">Select Category</option>
        <option value="organic">organic</option>
        <option value="inorganic">inorganic</option>
        
      </select><br />
      Composition: <input name="composition" type="text" onChange={handleInput} /><br />
      <strong>Image:</strong> <input name="image" type="file" accept="image/*" onChange={handleInput} /><br />
       Suitable Crop: <input name="suitablecrop" type="text" onChange={handleInput} /><br />
      
      Application Method: <input name=" application_method " type="text" onChange={handleInput} /><br />
      Precaution: <input name="precautions" type="text" onChange={handleInput} /><br />
      Quantity: <input name="quantity" type="text" onChange={handleInput} /><br />
     
      Manufacturer: <input name="manufacturer" type="text" onChange={handleInput} /><br />
      Price: <input name="price" type="number" onChange={handleInput} /><br />
      Dealer: <input name="dealer" type="text" onChange={handleInput} /><br />
      <button onClick={dataSave}>Data save!</button>
       
        
        </>
    )

}
export default Pesticide