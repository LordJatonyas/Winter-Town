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

    using Counters for Counter.Counter;
    Counter.Counter public _contractIDs;

    event Requested(uint256 contractID);
    event Canceled();
    event StateChange(uint256 new_state);
    event Approve();
    event BreakUpEvent(bool requested); // true => requested; false => approved

    constructor() {
    }

    function commitPayment(address payable customer, address payable charity, uint256 product_price, ufixed commit_percent) public payable {

