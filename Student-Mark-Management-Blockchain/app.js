function app()
{document.addEventListener('DOMContentLoaded', async function() {
    
    if (typeof window.ethereum !== 'undefined') {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable(); 
    } else {
      console.error('Please install MetaMask');
      return;
    }
  
    
    const contractAddress = '0x4F3b13C329Bc3fa510fbFd6d4973Bfa7f2A54B77';
    const contractABI = await fetch("abi.json");
  
    const contract = new web3.eth.Contract(contractABI, contractAddress);
  
   
    document.getElementById('submit').addEventListener('click', async function() {
      const mark = document.getElementById('mark').value;
      if (!mark) {
        alert('Please enter a mark');
        return;
      }
      
      try {
        
        const accounts = await web3.eth.getAccounts();
        const senderAddress = accounts[0];
        const tx = await contract.methods.submitMark(mark).send({ from: senderAddress });
        alert('Transaction successful. Transaction hash: ' + tx.transactionHash);
      } catch (error) {
        console.error('Error:', error);
        alert('Transaction failed. Please check the console for error details.');
      }
    });
  });
}