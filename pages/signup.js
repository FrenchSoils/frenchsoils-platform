// pages/signup.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/account');
    } catch (error) {
      // Supprime le préfixe Firebase pour plus de lisibilité
      setErrorMsg(error.message.replace('Firebase: ', ''));
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Email"
            style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
            placeholder="Password (≥6 caractères)"
            style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }}
          />
        </label>
        {errorMsg && (
          <p style={{ color: 'red', marginBottom: '1rem' }}>{errorMsg}</p>
        )}
        <button type="submit" style={{ padding: '0.75rem 1.5rem' }}>
          Sign up
        </button>
      </form>
    </div>
  );
}
