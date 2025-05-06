import React,{useState} from 'react'
import '../pages/pages-css/transferform.css'
const InternationalTransfer = () => {
  const [amount,setAmount] = useState("")
    const [username,setUsername] = useState("")
    const [bankName, setBankName] = useState('');
    const [iban, setIban] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    function handleSearch() {
      if (!username || !amount) {
        alert('Please fill in all details');
        return;
      }
      setIsLoading(true); // Start loading
      console.log('Sending...', { username, amount,bankName, iban });
  
      // Simulate an API call
      setTimeout(() => {
        setIsLoading(false); // Stop loading
        setShowModal(true); // Show success modal
      }, 2000);
    }
       // Modal for success message
    function closeModal() {
      setShowModal(false); // Close the modal
      setUsername(''); // Reset username
      setAmount(''); // Reset amount
      setBankName(''); // Reset bank name
      setIban(''); // Reset IBAN
    }
 
  return (
    <div className='transfer-form'>
    <h2>International Transfer</h2>
    <input
     type="text"
      placeholder='Enter Reciepent Bank Name' 
      value={username} 
      onChange={(e)=>{setUsername(e.target.value)}} />

    <input
     type="text"
      placeholder='Enter IBAN or Account Number'
      onChange={(e) => setIban(e.target.value)} />
    <input type="number" placeholder='Enter Amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
    <button className="send-btn"onClick={handleSearch} disabled={isLoading}>
      {isLoading ? 'Sending...' : 'Send Money'}
    </button>
    {isLoading && <div className='progress-bar'></div>}
          {/* Modal */}
          {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Transfer Successful!</h3>
            <p>
              You have successfully transferred <strong>${amount}</strong> to{' '}
              <strong>{username}</strong> at {iban}.
            </p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
  
}

export default InternationalTransfer


