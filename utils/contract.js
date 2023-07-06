import { ethers } from 'ethers';
import abi from '../app/abi'

const provider = new ethers.getDefaultProvider();
const contractAddress = "0xC9ab74cc4927086F2672b95015577f49dAEBa847";
const contract = new ethers.Contract(contractAddress, abi, provider);

export default function mintCarNFT(data) {
    const signer = provider.getSigner();
    const contractWithSigner = contract.connect(signer);
    return contractWithSigner.mintCarNFT(...data);
}

// Repeat for other functions
