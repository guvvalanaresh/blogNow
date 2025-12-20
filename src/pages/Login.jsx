import React, { useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({ email }));
      setLoading(false);
      navigate('/');
    }, 700);
  };

  return (
    <section className='min-h-screen flex nuninto'>
      {/* Left Panel */}
      <div className='w-1/2 relative hidden sm:block'>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxM8RbIFlrUaBd36FsEoEtv-xYo8d4Vt604UXINLfJwzCgCmocoRs_0mZmEalFU9xG3I-abA_1ouTIlnHOxRzK4aDeJtOU69_4p_z_joV6M7DcMsFZqXbYi505Q3CXWuh3j6TkbBboM-_zy2x0H1x20YYpVvv2JuSnpCJVujum78iS-2YruApuNe-WPwxSqAwUACchrRMhb6UWRDqNl-uWszEviD78iC96kFjjxd2Jz8MhUO3SXsnOqKNHrPdvwsFeJKlDnCoukH8"
          alt='workspace'
          className='absolute inset-0 w-full h-full object-cover opacity-90'
        />

        <div className='absolute inset-0 bg-black/30'></div>

        <div className='absolute left-12 bottom-16 text-white'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-10 h-10 bg-white/10 rounded flex items-center justify-center'>
              <img src='/blog-logo.png' alt='logo' className='w-6 h-6' />
            </div>
            <div className='text-lg font-bold'>blogNow</div>
          </div>
          <blockquote className='max-w-xs text-sm'>
            "The best way to predict the future is to create it. Start writing your story today."
          </blockquote>
        </div>
      </div>

      {/* Right Panel */}
      <div className='w-full sm:w-1/2 bg-white flex items-center justify-center'>
        <div className='w-full max-w-md p-8'>
          <h2 className='text-2xl font-bold mb-2'>Welcome back</h2>
          <p className='text-sm text-gray-600 mb-6'>Manage your stories and connect with your audience.</p>

          <form onSubmit={handleSubmit} className='space-y-4' aria-live='polite'>
            <div>
              <label className='block text-sm text-gray-700 mb-1'>Email address</label>
              <input
                type='email'
                placeholder='name@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-200'
                required
              />
            </div>

            <div>
              <div className='flex items-center justify-between mb-1'>
                <label className='block text-sm text-gray-700'>Password</label>
                <a href='/forgot-password' className='text-sm text-blue-500'>Forgot Password?</a>
              </div>

              <div className='flex items-center border rounded overflow-hidden'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='flex-1 p-3 focus:outline-none'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPassword((s) => !s)}
                  className='px-3 text-sm text-gray-600 hover:bg-gray-100'
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {error && <p className='text-red-500 text-sm'>{error}</p>}

            <button
              type='submit'
              className='w-full bg-blue-600 text-white rounded py-3 font-medium disabled:opacity-60'
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>

            <div className='flex items-center gap-3 mt-4'>
              <div className='flex-1 h-px bg-gray-200'></div>
              <div className='text-xs text-gray-500'>Or continue with</div>
              <div className='flex-1 h-px bg-gray-200'></div>
            </div>

            <div className='grid grid-cols-2 gap-3 mt-4'>
              <button type='button' onClick={() => alert('Continue with Google (demo)')} className='border rounded py-2 flex items-center justify-center gap-2'>
                <svg width='18' height='18' viewBox='0 0 533.5 544.3' xmlns='http://www.w3.org/2000/svg' className='inline-block'>
                  <path fill='#4285f4' d='M533.5 278.4c0-17.4-1.6-34.1-4.6-50.3H272v95.3h146.9c-6.3 33.7-25.3 62.3-54 80.9v66.8h87.1c51-47 80.5-116 80.5-192.7z'/>
                </svg>
                Google
              </button>
              <button type='button' onClick={() => alert('Continue with GitHub (demo)')} className='border rounded py-2 flex items-center justify-center gap-2'>
                <svg width='18' height='18' viewBox='0 0 16 16' className='inline-block' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z'/>
                </svg>
                GitHub
              </button>
            </div>

            <p className='text-center text-sm text-gray-600 mt-6'>Don't have an account? <a href='/signup' className='text-blue-600 font-medium'>Sign up</a></p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
