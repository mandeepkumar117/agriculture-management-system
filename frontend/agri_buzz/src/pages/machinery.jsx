import axios from "axios";
import { useState } from "react";


const Machinery=()=>{
    const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log({ ...input, [name]: value });
  };

  const dataSave = () => {
    let url = "http://127.0.0.1:8000/machinery/";
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

        <h1>Add machinery</h1>
      Machine ID: <input name="machine_id" type="text" onChange={handleInput} /><br />
      Name: <input name="name" type="text" onChange={handleInput} /><br />
      owner: <input name="owner" type="text" onChange={handleInput} /><br />
      Price: <input name="price" type="number" onChange={handleInput} /><br />
      Specification: <input name="specifications" type="text" onChange={handleInput} /><br />
       Type: 
      <select name="type" onChange={handleInput}>
         <option value="">Machine Type</option>
        <option value="Tractor">Tractor</option>
        <option value="Powertiller">Powertiller</option>
        <option value="theresher">Theresher</option>
        <option value="combine">Combine Harvester</option>
        <option value="cultivator">Cultivator</option>
        <option value="rotavator">Rotavator</option>
        <option value="seeddrill">Seeddrill</option>
        <option value="trauli">Tractor trauli</option>
      </select><br /> 
      Image: <input name="image" type="file" accept="image/*" onChange={handleInput} /><br />
      usage: <input name="usage" type="text" onChange={handleInput} /><br />
      Manufacturer: <input name="manufacturer" type="text" onChange={handleInput} /><br />
      Dealer: <input name="dealer" type="text" onChange={handleInput} /><br />
      <button onClick={dataSave}>Data Save!</button>
        
        </>
    )
}
export default Machinery