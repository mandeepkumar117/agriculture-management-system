import axios from "axios";
import { useState } from "react";

const Owner=()=>{
   const [input, setInput] = useState({});
  const [error2,seterror2]= useState('');
  const [error,seterror]= useState('');
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log({ ...input, [name]: value });
  };

  const dataSave = () => {
    const ownerid=/^OW\d+$/;
    if(!ownerid.test(input.owner_id)){
        seterror2("Dealer ID must start with capital 'OW' followed by numbers (e.g., D123).")
        return
      }


    let url = "http://127.0.0.1:8000/owner/";
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
      seterror2('');
      seterror('');

    }).catch((err) => {
     if (err.response && err.response.data && err.response.data.contact_number) {
        seterror(err.response.data.contact_number[0]); // Show backend validation message
      }else {
        seterror('Something went wrong.');
      }
  });
};

    return (

        <>
     <h1>Add Owner</h1>
      Owner ID: <input name="owner_id" type="text" onChange={handleInput} value={input.owner_id || ''} /><br />
       {error2 && <p style={{ color: 'red' }}>{error2}</p>}
      Name: <input name="name" type="text" onChange={handleInput}  value={input.name||''} /><br />
      Contact: <input name="contact" type="number" onChange={handleInput} value={input.contact||''}/><br />
         {error && <p style={{ color: 'red' }}>{error}</p>}
       city: <input name="city" type="text" onChange={handleInput} value={input.city||''}/><br />
    Address: <input name="address" type="text" onChange={handleInput}  value={input.address||''} /><br />
     
      
      <button onClick={dataSave}>Data Save!</button>
        
        </>
    )
}
export default Owner