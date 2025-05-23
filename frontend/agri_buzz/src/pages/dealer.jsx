import axios from "axios";
import { useState } from "react";


const Dealer=()=>{

     const [input, setInput] = useState({});
     const [error,seterror]= useState('');
     const [error2,seterror2]= useState('');
    
      const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setInput(values => ({ ...values, [name]: value }));
        console.log({ ...input, [name]: value });
      };
    
      const dataSave = () => {
      const dealerid=/^D\d+$/;
      const mynum=/^\d{10}$/

      if(!dealerid.test(input.dealer_id)){
        seterror2("Dealer ID must start with capital 'D' followed by numbers (e.g., D123).")
        return
      }

      if(!mynum.test(input.contact)){
        seterror("invalid contact number. number must be of 10 digits")
        return 

      }


        

        
        let url = "http://127.0.0.1:8000/dealer_registration/";
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
          seterror('')
          seterror2('')
        }).catch((err) => {
           if (err.response && err.response.data && err.response.data.contact_number) {
        seterror(err.response.data.contact_number[0]); // Show backend validation message
      }else {
        seterror('Something went wrong.');
      }
        });
      };

    return(

        <>
        <h1>Dealer Registration</h1>
    Dealer ID :  <input name="dealer_id" type="text" onChange={handleInput} value={input.dealer_id || ''} /><br />
    {error2 && <p style={{ color: 'red' }}>{error2}</p>}
Nmae : <input name="name" type="text" onChange={handleInput} value={input.name || ''} /><br />
Contact : <input name="contact" type="number" onChange={handleInput} value={input.contact || ''} /><br />
 {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error if any */}
GST No : <input name="GstNo" type="text" onChange={handleInput} value={input.GstNo || ''} /><br />
Address : <input name="address" type="text" onChange={handleInput} value={input.address || ''} /><br />
City : <input name="city" type="text" onChange={handleInput} value={input.city || ''} /><br />

      
      <button onClick={dataSave}>Data Save!</button>
     
        
        
        </>
    )
  



}

export default Dealer 