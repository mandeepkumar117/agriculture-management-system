import { useState } from "react";
import axios from "axios";

const Seeds=()=>{
    const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log({ ...input, [name]: value });
  };

  const dataSave = () => {
    let url = "http://127.0.0.1:8000/seeds/";
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
        <h1>Add seeds</h1>
      Product ID: <input name="product_id" type="text" onChange={handleInput} /><br />
      Name: <input name="seedname" type="text" onChange={handleInput} /><br />
      Crop Type: <input name=" crop_type" type="text" onChange={handleInput} /><br />
      Seed Type: <input name="seed_type" type="text" onChange={handleInput} /><br />
      <strong>Image:</strong> <input name="image" type="file" accept="image/*" onChange={handleInput} /><br />
       Germination_rate: <input name="germination_rate" type="text" onChange={handleInput} /><br />
      
      Seed Treatment: <input name="seed_treatment" type="text" onChange={handleInput} /><br />
      Quantity: <input name="quantity" type="text" onChange={handleInput} /><br />
      Seed Spacing: <input name="spacing" type="text" onChange={handleInput} /><br />
      Harvest Time: <input name="harvest_time" type="text" onChange={handleInput} /><br />
      Yeild per Acre: <input name="yield_per_hectare" type="text" onChange={handleInput} /><br />
      Manufacturer: <input name="manufacture" type="text" onChange={handleInput} /><br />
      Price: <input name="price" type="number" onChange={handleInput} /><br />
      Dealer: <input name="dealer" type="text" onChange={handleInput} /><br />
      <button onClick={dataSave}>Data save!</button>
        
        </>
    )
}

export default Seeds