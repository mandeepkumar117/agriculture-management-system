import { useState,useEffect } from "react";
import axios from "axios";

const Irrigation = () => {
  const [input, setInput] = useState({});
   const [mydata2, setMydata2] = useState([]);
    const [error2, seterror2] = useState([]);

    const loaddata2=()=>{
              let api="http://127.0.0.1:8000/IrrigationItem/";
              axios.get(api).then((res)=>{
                    setMydata2(res.data);
                })
        
        
              
            }
        
            useEffect(()=>{
              loaddata2();
            },[])
        

  const handleInput = (e) => {
    const { name, type, value, files } = e.target;
    setInput(values => ({
      ...values,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const dataSave = () => {
    const formData = new FormData();




    const irrigationid=/^I\d+$/;
    if(!irrigationid.test(input.product_id)){
        seterror2("Dealer ID must start with capital 'I' followed by numbers (e.g., D123).")
        return
      }
    Object.entries(input).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios.post("http://127.0.0.1:8000/IrrigationItem/", formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(() => {
      alert("Data saved!");
      setInput({});
      seterror2('');
    }).catch(err => {
      console.error("Save error:", err.response?.data || err.message);
    });
  };

  return (
    <>
      <h1>Add Irrigation Product</h1>
      Product ID: <input name="product_id" type="text" onChange={handleInput} value={input.product_id||''}/><br />
      {error2 && <p style={{ color: 'red' }}>{error2}</p>}
      Name: <input name="name" type="text" onChange={handleInput} value={input.name||''} /><br />
      Description: <input name="description" type="text" onChange={handleInput} value={input.description||''} /><br />
      Price: <input name="price" type="number" onChange={handleInput} value={input.price||''}/><br />
      Stock: <input name="stock" type="number" onChange={handleInput} value={input.stock||''}/><br />
      Category: 
      <select name="category" onChange={handleInput} value={input.category||''}>
        <option value="">Select Category</option>
        <option value="Drip">Drip</option>
        <option value="Sprinkler">Sprinkler</option>
        <option value="Pipes">Pipes</option>
        <option value="Pumps">Pumps</option>
      </select><br />
      Image: <input name="image" type="file" accept="image/*" onChange={handleInput} /><br />
      Discharge: <input name="discharge" type="text" onChange={handleInput}  value={input.discharge||''}/><br />
      Manufacturer: <input name="manufacturer" type="text" onChange={handleInput} value={input.manufacturer||''}/><br />
      Dealer: <select name="dealer"  onChange={handleInput}  value={input.dealer||''}>
        <option value="">Select Dealer</option>
        {mydata2.map((dealer) => (
          <option key={dealer.dealer_id} value={dealer.dealer_id}>
            {dealer.dealer_id} - {dealer.name}
          </option>
        
         ))}
        </select> <br />
            <button onClick={dataSave}>Data Save!</button>
    </>
  );
};

export default Irrigation;
