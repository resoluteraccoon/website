import React, { useState } from 'react';
import Layout from '@theme/Layout';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    alert('Coming soon — authentication not yet implemented');
  };

  return (
    <Layout title="Log in - Resolute Raccoon" description="Log in to Resolute Raccoon">
      <div className="login-overlay">
        <div className="login-modal">
          <h2>Enter your email</h2>
          <p className="login-subtext">Continue to Resolute Raccoon</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <button className="login-submit" onClick={handleSubmit}>Sign up or sign in</button>
          
          <div className="login-divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>
          
          <button className="login-social">
            <span>🔑</span> Sign in with passkey
          </button>
          <button className="login-social">
            <span>G</span> Continue with Google
          </button>
          <button className="login-social">
            <span>🍎</span> Continue with Apple
          </button>
        </div>
      </div>
    </Layout>
  );
}