import React, { useEffect, useState } from 'react';
import FooterC from '../common/FooterC';
import ChatWindow from '../common/ChatWindow';
import { useNavigate, useLocation } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

const Status = () => {
  const [complaints, setComplaints] = useState([]);
  const [openChats, setOpenChats] = useState({});
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const location = useLocation();
  const [activeChatId, setActiveChatId] = useState(null);
  const handleOpenChat = (complaintId) => {
    setActiveChatId(complaintId);
  };
  const handleCloseChat = () => {
    setActiveChatId(null);
  };
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await fetch(`http://localhost:8000/complaints/${user._id}`);
        const data = await res.json();
        setComplaints(data);
      } catch (err) {
        console.error('Error fetching complaints:', err);
      }
    };

    if (user?._id) fetchComplaints();
  }, [user]);

  const handleStatusClick = () => navigate('/status');
  const handleHomeClick = () => navigate('/user');
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/Login';
  };

  const handleDelete = async (complaintId) => {
  try {
    const response = await fetch(`http://localhost:8000/complaints/${complaintId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete complaint');
    }
    setComplaints(prev => prev.filter(c => c._id !== complaintId));
   }   catch (err) {
      console.error('Error deleting complaint:', err);
      alert('Failed to delete complaint');
    }
  };

  const toggleChat = (complaintId) => {
    setOpenChats((prev) => ({
      ...prev,
      [complaintId]: !prev[complaintId]
    }));
  };
  
  return (
    <>
      <header className="homepage-header">
        <div className="brand">ComplaintCare</div>
        <div className="user-actions">  
          <button className={`complaint-status ${location.pathname === '/user' ? 'active' : ''}`} onClick={handleHomeClick}>Home</button>
          <button className={`complaint-status ${location.pathname === '/status' ? 'active' : ''}`} onClick={handleStatusClick}>Status</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div style={{ padding: '20px' }}>
        <h2 style={{ color: '#FFD700' }}>Your Complaint Status</h2>

        {complaints.length === 0 ? (
          <p style={{ color: '#ccc' }}>No complaints found.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {complaints.map((c) => (
              <div
                key={c._id}
                style={{
                  border: '1px solid #FFD700',
                  borderRadius: '10px',
                  padding: '15px',
                  backgroundColor: '#111',
                  color: '#fff',
                }}
              >
                <p><strong>Name:</strong> {c.name}</p>
                <p><strong>Address:</strong> {c.address}</p>
                <p><strong>City:</strong> {c.city}</p>
                <p><strong>State:</strong> {c.state}</p>
                <p><strong>Pincode:</strong> {c.pincode}</p>
                <p><strong>Description:</strong> {c.comment}</p>
                <p><strong>Status:</strong> <span style={{ color: '#FFD700' }}>{c.status}</span></p>

                <button
                  onClick={() => toggleChat(c._id)}
                  style={{
                    marginTop: '10px',
                    backgroundColor: '#FFD700',
                    border: 'none',
                    padding: '8px 16px',
                    color: '#000',
                    fontWeight: 'bold',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  {openChats[c._id] ? 'Close Chat' : 'Chat with Agent'}
                </button>
                <button

                  style={{
                    marginTop: '10px',
                    backgroundColor: 'Red',
                    border: 'none',
                    padding: '8px 16px',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    float:'right'
                  }}
                  onClick={()=>handleDelete()}
                >
                Delete
                </button>

                {openChats[c._id] && (
                  <div style={{ marginTop: '10px' }}>
                    <ChatWindow
                        complaintId={c._id}
                        onClose={() => toggleChat(c._id)}
                        user={JSON.parse(localStorage.getItem('user'))}
                   />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <FooterC />
      </div>
    </>
  );
};

export default Status;
