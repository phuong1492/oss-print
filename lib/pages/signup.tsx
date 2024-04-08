import { useState } from 'react';
import { signUp } from '../utils/cognito';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    try {
      const user = await signUp(email, password);
      console.log('User registered:', user);
      // Xử lý các hành động sau khi người dùng đăng ký thành công
    } catch (error) {
      console.error('Sign up error:', error);
      // Xử lý lỗi
      setErrorMessage('Đã có lỗi xảy ra');
    }
  };

  return (
    <div>
      <h1>Đăng ký</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default SignupPage;