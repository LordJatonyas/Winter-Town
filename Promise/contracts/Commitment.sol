// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Commit {
    struct Contract {
        address payable company;
        address payable customer;
        address payable charity;
        uint256 product_price;
        ufixed commit_percent;
        uint256 status;
        uint256 ID;
    }
    mapping(uint256 => Contract) _contracts;
    mapping(address => uint256[]) _companies;
    mapping(address => uint256[]) _customers;


    constructor() {
    }

    function donate() public payable {
        (bool success,) = charity.call{value: msg.value}("");
        require(success, "Failed to send money");
    }

    function getCommitPayment() view public returns(uint256) {
        return product_price * commit_percent;
    }

    function pay() public payable {
        (bool success,) = 
    function commitPayment(address payable customer, address payable charity, uint256 product_price, ufixed commit_percent) public payable {
