"use client"
import React, { useState } from 'react';
import { ethers } from 'ethers';
import abi from '../app/abi.json'

const contractAddress = "0xC9ab74cc4927086F2672b95015577f49dAEBa847";

function MintCar() {
  const [VIN, setVIN] = useState("");
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [mileage, setMileage] = useState("");
  const [maintenanceHistory, setMaintenanceHistory] = useState("");
  const [price, setPrice] = useState("");

  async function mintCarNFT() {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      try {
          const tx = await contract.mintCarNFT(VIN, model, make, mileage, maintenanceHistory, ethers.utils.parseEther(price));
          console.log('Transaction sent');
          await tx.wait();
          console.log('Transaction mined');
      } catch (err) {
          console.error('Failed to mint NFT', err);
      }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', padding: '20px', width: '1000px' }}>
    <input placeholder="VIN" onChange={e => setVIN(e.target.value)} />
    <input placeholder="Model" onChange={e => setModel(e.target.value)} />
    <input placeholder="Make" onChange={e => setMake(e.target.value)} />
    <input placeholder="Mileage" onChange={e => setMileage(e.target.value)} />
    <input placeholder="Maintenance History" onChange={e => setMaintenanceHistory(e.target.value)} />
    <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
    <button onClick={mintCarNFT} style={{ backgroundColor: 'blue', color: 'white' }}>Mint NFT</button>
</div>
  );
}

export default MintCar;