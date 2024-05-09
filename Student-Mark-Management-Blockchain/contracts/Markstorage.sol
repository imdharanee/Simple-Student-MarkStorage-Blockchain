pragma solidity ^0.8.16;
contract MarkStorage {
    
    struct Mark {
        address studentAddress; 
        uint256 markValue; 
    }

    
    Mark[] public marks;

    
    function submitMark(uint256 _markValue) public {
      
        require(_markValue >= 0 && _markValue <= 100, "Invalid mark value");

        
        marks.push(Mark(msg.sender, _markValue));
    }

    
    function getMarksCount() public view returns (uint256) {
        return marks.length;
    }

    
    function getMark(uint256 index) public  view returns (address, uint256) {
        require(index < marks.length, "Index out of bounds");
        return (marks[index].studentAddress, marks[index].markValue);
    }
}
