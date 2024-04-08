import { useState } from 'react';
import { signIn } from '../utils/cognito';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    
    try {
      const accessToken = await signIn(email, password);
      console.log('Access token:', accessToken);
      router.push('/'); // Chuyển hướng đến trang bảng điều khiển sau khi đăng nhập thành công
    } catch (error) {
      // Xử lý lỗi đăng nhập
      console.log(error)
      setErrorMessage("Error");
    }
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSignIn}>
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
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginPage;