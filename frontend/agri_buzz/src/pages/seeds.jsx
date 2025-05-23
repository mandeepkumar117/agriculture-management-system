import { useState,useEffect } from "react";
import axios from "axios";

const Seeds=()=>{
    const [input, setInput] = useState({});
     const [error2,seterror2]=useState('')

       const [mydata2, setMydata2] = useState([]);



     const loaddata2=()=>{
           let api="http://127.0.0.1:8000/dealer_registration/";
           axios.get(api).then((res)=>{
                 setMydata2(res.data);
             })
     
     
           
         }
     
         useEffect(()=>{
           loaddata2();
         },[])
     

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log({ ...input, [name]: value });
  };

  const dataSave = () => {
       const productid=/^S\d+$/;
    if(!productid.test(input.product_id)){
        seterror2("seeds product  ID must start with capital 'S' followed by numbers (e.g., D123).")
        return
      }

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
      setInput({})
      seterror2('')
    }).catch((err) => {
      console.error('Error details:', err.response ? err.response.data : err.message);
      alert("Error saving data");
    });
  };
    return(
        <>
        <h1>Add seeds</h1>
      Product ID: <input name="product_id" type="text" onChange={handleInput} value={input.product_id||''}  /><br />
      {error2 && <p style={{ color: 'red' }}>{error2}</p>}
      Name: <input name="seedname" type="text" onChange={handleInput}  value={input.seedname||''}  /><br />
      Crop Type: <input name="crop_type" type="text" onChange={handleInput} value={input.crop_type||''} /><br />
      Seed Type: <input name="seed_type" type="text" onChange={handleInput}  value={input.seed_type||''} /><br />
      <strong>Image:</strong> <input name="image" type="file" accept="image/*" onChange={handleInput} /><br />
       Germination_rate: <input name="germination_rate" type="text" onChange={handleInput} value={input.germination_rate||''} /><br />
      
      Seed Treatment: <input name="seed_treatment" type="text" onChange={handleInput} value={input.seed_treatment||''} /><br />
      Quantity: <input name="quantity" type="text" onChange={handleInput} value={input.quantity||''}/><br />
      Seed Spacing: <input name="spacing" type="text" onChange={handleInput} value={input.spacing||''} /><br />
      Harvest Time: <input name="harvest_time" type="text" onChange={handleInput} value={input.harvest_time||''}/><br />
      Yeild per Acre: <input name="yield_per_hectare" type="text" onChange={handleInput} value={input.yield_per_hectare||''}/><br />
      Manufacturer: <input name="manufacture" type="text" onChange={handleInput} value={input.manufacture||''}/><br />
      Price: <input name="price" type="number" onChange={handleInput} value={input.price||''}/><br />
      Dealer: <select name="dealer"  onChange={handleInput}  value={input.dealer||''}>
        <option value="">Select Dealer</option>
        {mydata2.map((dealer) => (
          <option key={dealer.dealer_id} value={dealer.dealer_id}>
            {dealer.dealer_id} - {dealer.name}
          </option>
        
         ))}
        </select> <br />
      <button onClick={dataSave}>Data save!</button>
        
        </>
    )
}

export default Seeds