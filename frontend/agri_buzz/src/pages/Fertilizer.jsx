import React, { useState } from 'react';
import axios from 'axios';

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
        benefits: '',
        precautions: '',
        suitablecrop: '',
        manufacturer: '',
        price: '',
        storageinstructions: '',
        dealer: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            await axios.post('http://localhost:8000/api/fertilizers/', data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Fertilizer submitted successfully!');
        } catch (error) {
            console.error(error);
            alert('Error submitting fertilizer');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
                key !== 'image' ? (
                    <div key={key}>
                        <label>{key}:</label>
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </div>
                ) : (
                    <div key={key}>
                        <label>{key}:</label>
                        <input
                            type="file"
                            name={key}
                            onChange={handleChange}
                        />
                    </div>
                )
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default FertilizerForm;
