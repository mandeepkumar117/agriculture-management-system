import { useState } from "react";
import axios from "axios";

const Fertilizer1 = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log({ ...input, [name]: value });
  };

  const dataSave = () => {
    let url = "http://127.0.0.1:8000/fertilizer/";
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

  return (
    <>
      <h1>Add Fertilizer</h1>
      Product ID: <input name="product_id" type="text" onChange={handleInput} /><br />
      Name: <input name="name" type="text" onChange={handleInput} /><br />
      Fertilizer Type: <input name="fertilizer_type" type="text" onChange={handleInput} /><br />
      Nutrients: <input name="nutrients" type="text" onChange={handleInput} /><br />
      <strong>Image:</strong> <input name="image" type="file" accept="image/*" onChange={handleInput} /><br />
      Usage: <input name="usage" type="text" onChange={handleInput} /><br />
      Application Method: <input name="application_method" type="text" onChange={handleInput} /><br />
      Dosage: <input name="dosage" type="text" onChange={handleInput} /><br />
      Benefits: <input name="benefits" type="text" onChange={handleInput} /><br />
      Precautions: <input name="precautions" type="text" onChange={handleInput} /><br />
      Suitable Crop: <input name="suitablecrop" type="text" onChange={handleInput} /><br />
      Manufacturer: <input name="manufacturer" type="text" onChange={handleInput} /><br />
      Price: <input name="price" type="text" onChange={handleInput} /><br />
      Storage Instructions: <input name="storageinstructions" type="text" onChange={handleInput} /><br />
      Dealer: <input name="dealer" type="text" onChange={handleInput} /><br />
      <button onClick={dataSave}>Data save!</button>
    </>
  );
};

export default Fertilizer1;
