import { useState ,useEffect} from "react";
import axios from "axios";


const Pesticide=()=>{

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


    const pesticideid=/^PE\d+$/;
    if(!pesticideid.test(input.product_id)){
        seterror2("Dealer ID must start with capital 'PE' followed by numbers (e.g., D123).")
        return
      }

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
      setInput({});
      seterror2('')
    }).catch((err) => {
      console.error('Error details:', err.response ? err.response.data : err.message);
      alert("Error saving data");
    });
  };
    return(
        <>
         <h1>Add Pestcide</h1>
      Product ID: <input name="product_id" type="text" onChange={handleInput}  value={input.product_id||''} /><br />
      {error2 && <p style={{ color: 'red' }}>{error2}</p>}
      Name: <input name="name" type="text" onChange={handleInput} value={input.name||''}/><br />
      Category: 
      <select name="category" onChange={handleInput} value={input.category||''}>
        <option value="">Select Category</option>
        <option value="organic">organic</option>
        <option value="inorganic">inorganic</option>
        
      </select><br />
      Composition: <input name="composition" type="text" onChange={handleInput}  value={input.composition||''} /><br />
      <strong>Image:</strong> <input name="image" type="file" accept="image/*" onChange={handleInput}  /><br />
       Suitable Crop: <input name="suitablecrop" type="text" onChange={handleInput} value={input.suitablecrop||''} /><br />
      
      Application Method: <input name="application_method" type="text" onChange={handleInput} value={input.application_method||''} /><br />
      Precaution: <input name="precautions" type="text" onChange={handleInput} value={input.precautions||''} /><br />
      Quantity: <input name="quantity" type="text" onChange={handleInput} value={input.quantity||''}/><br />
     
      Manufacturer: <input name="manufacturer" type="text" onChange={handleInput}  value={input.manufacturer||''} /><br />
      Price: <input name="price" type="number" onChange={handleInput} value={input.price||''} /><br />
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
export default Pesticide