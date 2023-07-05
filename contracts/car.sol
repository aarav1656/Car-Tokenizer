// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CarToken is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // Structure to represent a car
    struct Car {
        string VIN;
        string model;
        string make;
        uint256 mileage;
        string maintenanceHistory;
        address payable owner;
        uint256 price;
    }

    // Mapping to store the NFT token ID and its corresponding car
    mapping(uint256 => Car) public cars;

    // Mapping to store the ownership history of a car
    mapping(uint256 => address[]) public ownershipHistory;

    event CarMinted(uint256 tokenId, string VIN, string model, string make, uint256 mileage, string maintenanceHistory, address owner, uint256 price);

    constructor() ERC721("Car Token", "CAR") {}

    function mintCarNFT(
        string memory VIN,
        string memory model,
        string memory make,
        uint256 mileage,
        string memory maintenanceHistory,
        uint256 price
    ) public {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);

        Car memory newCar = Car(VIN, model, make, mileage, maintenanceHistory, payable(msg.sender), price);
        cars[newTokenId] = newCar;
        ownershipHistory[newTokenId].push(msg.sender);

        emit CarMinted(newTokenId, VIN, model, make, mileage, maintenanceHistory, msg.sender, price);
    }

    function transferOwnership(uint256 tokenId, address payable newOwner) public payable {
        require(ownerOf(tokenId) == msg.sender, "Not the current owner");

        Car storage car = cars[tokenId];
        require(msg.value == car.price, "Incorrect payment amount");

        address payable previousOwner = car.owner;
        ownershipHistory[tokenId].push(newOwner);

        car.owner = newOwner;
        car.price = 0;

        _transfer(previousOwner, newOwner, tokenId);

        previousOwner.transfer(msg.value);
    }

    function burn(uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Caller is not owner nor approved");

        address owner = ownerOf(tokenId);
        _burn(tokenId);

        delete cars[tokenId];
        delete ownershipHistory[tokenId];

        payable(owner).transfer(address(this).balance);
    }
}
