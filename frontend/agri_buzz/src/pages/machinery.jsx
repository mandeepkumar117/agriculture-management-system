import axios from "axios";
import { useEffect, useState } from "react";


const Machinery=()=>{
    const [input, setInput] = useState({});
    const [error2,seterror2]=useState('')
    const [mydata, setMydata] = useState([]);
    const [mydata2, setMydata2] = useState([]);

    const loaddata=()=>{
      let api="http://127.0.0.1:8000/owner/";
      axios.get(api).then((res)=>{
            setMydata(res.data);
        })


      
    }
    const loaddata2=()=>{
      let api="http://127.0.0.1:8000/dealer_registration/";
      axios.get(api).then((res)=>{
            setMydata2(res.data);
        })


      
    }

    useEffect(()=>{
      loaddata2();
    },[])

    useEffect(()=>{
      loaddata();
    
      

    },[])

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log({ ...input, [name]: value });
  };

  const dataSave = () => {

    const machineid=/^M\d+$/;
    if(!machineid.test(input.machine_id)){
        seterror2("Dealer ID must start with capital 'OW' followed by numbers (e.g., D123).")
        return
      }




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
      setInput({});
      seterror2('')
    }).catch((err) => {
      console.error('Error details:', err.response ? err.response.data : err.message);
      alert("Error saving data");
    });
  };
    
    return (

        <>

        <h1>Add machinery</h1>
      Machine ID: <input name="machine_id" type="text" onChange={handleInput}  value={input.machine_id || ''} /><br />
       {error2 && <p style={{ color: 'red' }}>{error2}</p>}
      Name: <input name="name" type="text" onChange={handleInput}  value={input.name||''} /><br />
      owner: <select name="owner" onChange={handleInput} value={input.owner || ''}>
        <option value="">Select Owner</option>
        {mydata.map((owner) => (
          <option key={owner.owner_id} value={owner.owner_id}>
            {owner.owner_id} - {owner.name}
          </option>
        ))}
      </select><br />
      Price: <input name="price" type="number" onChange={handleInput} value={input.price||''}/><br />
      Specification: <input name="specifications" type="text" onChange={handleInput} value={input.specifications|| ''} /><br />
       Type: 
      <select name="type" onChange={handleInput} value={input.type||''}>
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
      usage: <input name="usage" type="text" onChange={handleInput}  value={input.usage||''} /><br />
      Manufacturer: <input name="manufacturer" type="text" onChange={handleInput}  value={input.manufacturer||''}/><br />
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
    )
}
export default Machinery



