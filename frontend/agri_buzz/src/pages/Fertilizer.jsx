import React, { useState } from 'react';
import axios  from 'axios';

const FertilizerForm = () => {
  const [formData, setFormData] = useState({
    product_id: '',
    name: '',
    fertilizer_type: '',
    nutrients: '',
    image: null,
    usage: '',
    application_method: '',
    dosage: '',
    benifits: '',
    precautions: '',
    suitablecrop: '',
    manufacturer: '',
    price: '',
    stotageinstructions: '',
    dealer: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formPayload = new FormData();
    for (let key in formData) {
      formPayload.append(key, formData[key]);
    }
  
    try {
      const res = await axios.post('http://localhost:8000/api/fertilizer/', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('access_token')}` // 🔥 agar ye protected hai
        }
      });
  
      alert('Form submitted successfully!');
      console.log('Response:', res.data);
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong!');
    }
  };
  

  return (
    <>   
    <div className="form-container1">
      <h2>Fertilizer Form</h2>
      <form onSubmit={handleSubmit} className='form1'>
        <label htmlFor="product_id">Product ID</label>
        <input
          type="text"
          id="product_id"
          name="product_id"
          value={formData.product_id}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="fertilizer_type">Fertilizer Type</label>
        <input
          type="text"
          id="fertilizer_type"
          name="fertilizer_type"
          value={formData.fertilizer_type}
          onChange={handleChange}
          required
        />

        <label htmlFor="nutrients">Nutrients</label>
        <input
          type="text"
          id="nutrients"
          name="nutrients"
          value={formData.nutrients}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          accept="image/*"
          required
        />

        <label htmlFor="usage">Usage</label>
        <input
          type="text"
          id="usage"
          name="usage"
          value={formData.usage}
          onChange={handleChange}
          required
        />

        <label htmlFor="application_method">Application Method</label>
        <input
          type="text"
          id="application_method"
          name="application_method"
          value={formData.application_method}
          onChange={handleChange}
          required
        />

        <label htmlFor="dosage">Dosage</label>
        <input
          type="text"
          id="dosage"
          name="dosage"
          value={formData.dosage}
          onChange={handleChange}
          required
        />

        <label htmlFor="benifits">Benefits</label>
        <input
          type="text"
          id="benifits"
          name="benifits"
          value={formData.benifits}
          onChange={handleChange}
          required
        />

        <label htmlFor="precautions">Precautions</label>
        <input
          type="text"
          id="precautions"
          name="precautions"
          value={formData.precautions}
          onChange={handleChange}
          required
        />

        <label htmlFor="suitablecrop">Suitable Crop</label>
        <input
          type="text"
          id="suitablecrop"
          name="suitablecrop"
          value={formData.suitablecrop}
          onChange={handleChange}
          required
        />

        <label htmlFor="manufacturer">Manufacturer</label>
        <input
          type="text"
          id="manufacturer"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price (₹)</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          step="0.01"
          min="0"
          required
        />

        <label htmlFor="stotageinstructions">Storage Instructions</label>
        <input
          type="text"
          id="stotageinstructions"
          name="stotageinstructions"
          value={formData.stotageinstructions}
          onChange={handleChange}
          required
        />

        <label htmlFor="dealer">Dealer</label>
        <input
          type="text"
          id="dealer"
          name="dealer"
          value={formData.dealer}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default FertilizerForm;
