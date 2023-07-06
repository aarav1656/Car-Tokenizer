"use client"
import React, { useState } from 'react';
import mintCarNFT from "../utils/contract"
function MintCar() {
    const [VIN, setVIN] = useState("");
    const [model, setModel] = useState("");
    const [make, setMake] = useState("");
    const [mileage, setMileage] = useState("");
    const [maintenanceHistory, setMaintenanceHistory] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async () => {
        const data = [VIN, model, make, mileage, maintenanceHistory, price];
        try {
            // Call your mintCarNFT function here
            await mintCarNFT(data);
            alert('Success');
        } catch (err) {
            console.error(err);
            alert('Failed');
        }
    };

    return (
        <div className="m-4">
          <div className="flex flex-col space-y-2">
            <input type="text" placeholder="VIN" value={VIN} onChange={(e) => setVIN(e.target.value)} className="border p-2" />
            <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} className="border p-2" />
            <input type="text" placeholder="Make" value={make} onChange={(e) => setMake(e.target.value)} className="border p-2" />
            <input type="text" placeholder="Mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} className="border p-2" />
            <input type="text" placeholder="Maintenance History" value={maintenanceHistory} onChange={(e) => setMaintenanceHistory(e.target.value)} className="border p-2" />
            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2" />
          </div>
          <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded-md mt-2">Mint</button>
        </div>
      );
    } 

export default MintCar;
