import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AuthPage = ({ type = 'login' }) => {
  const isLogin = type === 'login';

  return (
    <div className="flex min-h-dvh text-black bg-white">
      {/* Left section - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-16">
        <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Welcome back' : 'Create an account'}</h2>

        <form className="w-full max-w-sm space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800">Email</label>
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800">Password</label>
            <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md" />
          </div>

          {isLogin && (
            <div className="text-sm text-right text-blue-500 hover:underline cursor-pointer">
              Forgot password?
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-blue-200 hover:bg-blue-300 font-semibold"
          >
            {isLogin ? 'Log in' : 'Sign up'}
          </button>

          <div className="flex items-center justify-center my-4 text-sm text-gray-500">
            <span className="px-2">Or</span>
          </div>

          <button
            type="button"
            className="w-full py-2 flex items-center justify-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 font-medium"
          >
            <svg width="20" height="20" fill="currentColor" className="text-gray-600">
              <circle cx="10" cy="10" r="10" />
            </svg>
            Continue with SearchEngineCo
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Link href={isLogin ? '/signup' : '/login'} className="text-blue-500 hover:underline">
            {isLogin ? 'Sign up' : 'Log in'}
          </Link>
        </p>
      </div>

      {/* Right section - Image */}
      <div className="hidden md:flex w-1/2 justify-center items-center bg-white">
        <Image
          src="/doctor-illustration.png"
          alt="Doctor and patient illustration"
          width={400}
          height={600}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default AuthPage;
