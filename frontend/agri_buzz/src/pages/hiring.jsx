import { useState } from "react";
import axios from "axios";


const Hiring=()=>{

    const [input, setInput] = useState({});

    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
      setInput(values => ({ ...values, [name]: value }));
      console.log({ ...input, [name]: value });
    };
  
    const dataSave = () => {
      let url = "http://127.0.0.1:8000/labour_registration/";
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
             <h1>Add Labour</h1>
      Product ID: <input name=" labour_id " type="text" onChange={handleInput} /><br />
      Name: <input name="name" type="text" onChange={handleInput} /><br />
      Contact: <input name="contact" type="number" onChange={handleInput} /><br />
    
      Adharno: <input name="adharno" type="number" onChange={handleInput} /><br />
      Category: 
      <select name="worktype" onChange={handleInput}>
        <option value="">Select Category</option>
        <option value="feild">Feild Labour</option>
        <option value="Technician">Feild Technician</option>
        
      </select><br />
      Image: <input name="image" type="file" accept="image/*" onChange={handleInput} /><br />
    Address: <input name="address" type="text" onChange={handleInput} /><br />
      city: <input name="city" type="text" onChange={handleInput} /><br />
      
      <button onClick={dataSave}>Data Save!</button>
        
        </>
    )
}

export default Hiring