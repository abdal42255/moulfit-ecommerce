
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', phone: '' });

  const addToCart = (item) => {
    setCart([...cart, item]);
    setShowCheckout(false);
    setOrderConfirmed(false);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleOrder = () => {
    if (formData.name && formData.address && formData.phone) {
      setOrderConfirmed(true);
      setCart([]);
    }
  };

  const total = cart.length * 550;

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <h1>Moulfit</h1>
      <p>মৌলভীবাজারের ফ্যাশনফুল চয়েস – Wear Your Local Vibe</p>

      <h2>প্রোডাক্ট</h2>
      {[1, 2, 3].map((item) => (
        <div key={item} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
          <h3>Urban Vibe Tee {item}</h3>
          <p>৳ 550</p>
          <button onClick={() => addToCart(item)}>কার্টে যুক্ত করুন</button>
        </div>
      ))}

      <h2>আপনার কার্ট</h2>
      {cart.length === 0 ? (
        <p>আপনার কার্ট খালি।</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <span>Urban Vibe Tee {item} - ৳550</span>
              <button onClick={() => removeFromCart(index)}>X</button>
            </div>
          ))}
          <p>মোট: ৳{total}</p>
          <button onClick={() => setShowCheckout(true)}>চেকআউট করুন</button>
        </div>
      )}

      {showCheckout && !orderConfirmed && (
        <div>
          <h2>📝 অর্ডার তথ্য</h2>
          <input placeholder="নাম" onChange={e => setFormData({ ...formData, name: e.target.value })} /><br />
          <input placeholder="ঠিকানা" onChange={e => setFormData({ ...formData, address: e.target.value })} /><br />
          <input placeholder="মোবাইল" onChange={e => setFormData({ ...formData, phone: e.target.value })} /><br />
          <button onClick={handleOrder}>✅ অর্ডার কনফার্ম করুন</button>
        </div>
      )}

      {orderConfirmed && (
        <div>
          <h2>✅ অর্ডার সফল হয়েছে!</h2>
          <p>ধন্যবাদ!</p>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
