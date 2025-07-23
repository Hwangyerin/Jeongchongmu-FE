import './Login.css';
import {calculate, logo} from '../assets/images';
import SocialKakao from '../components/SocialKakao';

const Login = () => {

  return (
    <main className="Login">
      <section className='content-wrapper'>
        <section className='logo'>
          <img className="bg-deco" src={calculate} alt="배경장식" />
          <img className="logo-img" src={logo} alt="정총무 로고" />
          <h1>정총무</h1>
        </section>
        <SocialKakao/>
      </section>
    </main>
  );
}

export default Login;
