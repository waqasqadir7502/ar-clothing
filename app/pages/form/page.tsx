"use client";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import "./login.css"
import img from "../../assets/images/formimg.png"

type AuthFormProps = {
  toggleAuthMode: () => void;
};

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const toggleAuthMode = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <>
      <Head>
        <title>{isLogin ? 'Login' : 'Sign Up'} | AR brand</title>
      </Head>
      
      <div style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        ...(isTransitioning ? { transition: 'all 0.5s ease-in-out' } : {})
      }}>
        {/* Image Section */}
        <div style={{
          flex: 1,
          position: 'relative',
          transition: 'all 0.5s ease-in-out',
          transform: !isLogin ? 'translateX(100%)' : 'translateX(0)',
          order: 1
        }}>
          <Image 
            src={img}
            alt="Fashion image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        
        {/* Form Section */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'white',
          padding: '2rem',
          transition: 'all 0.5s ease-in-out',
          transform: !isLogin ? 'translateX(-100%)' : 'translateX(0)',
          order: 2
        }}>
          {isLogin ? (
            <LoginForm toggleAuthMode={toggleAuthMode} />
          ) : (
            <SignupForm toggleAuthMode={toggleAuthMode} />
          )}
        </div>
      </div>
    </>
  );
}

function LoginForm({ toggleAuthMode }: AuthFormProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      width: '100%',
      maxWidth: '400px',
      padding: '2rem'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#333' }}>Welcome Back</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>Login to your account</p>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 500 }} htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 500 }} htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <button type="submit" style={{
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#000',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
      }}>Login</button>
      
      <p style={{ marginTop: '1.5rem', textAlign: 'center', color: '#666' }}>
        Don&apos;t have an account?
        <button 
          type="button" 
          onClick={toggleAuthMode} 
          style={{
            background: 'none',
            border: 'none',
            color: '#000',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
            fontSize: 'inherit'
          }}
        >
          Sign up
        </button>
      </p>
    </form>
  );
}

function SignupForm({ toggleAuthMode }: AuthFormProps) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup submitted', { name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      width: '100%',
      maxWidth: '400px',
      padding: '2rem'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#333' }}>Create Account</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>Join our fashion community</p>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 500 }} htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 500 }} htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 500 }} htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <button type="submit" style={{
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#000',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
      }}>Sign Up</button>
      
      <p style={{ marginTop: '1.5rem', textAlign: 'center', color: '#666' }}>
        Already have an account?{' '}
        <button 
          type="button" 
          onClick={toggleAuthMode} 
          style={{
            background: 'none',
            border: 'none',
            color: '#000',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
            fontSize: 'inherit'
          }}
        >
          Login
        </button>
      </p>
    </form>
  );
}