import './Onboarding.css';
import logo from '../assets/logo.png';
import calculate from '../assets/calculate.png';
import kakao_symbol from '../assets/kakao_symbol.svg'


const Onboarding = () => {
    return (
      <main className="Onboarding">
        <section className='content-wrapper'>
          <section className='logo'>
            <img className="bg-deco" src={calculate} alt="배경장식"/>
            <img className="logo-img" src={logo} alt="정총무 로고"/>
            <h1>정총무</h1>
          </section>
          <button className='kakao-button'><img src={kakao_symbol}/><span>카카오 로그인</span></button>
        </section>
      </main>
    )
}

export default Onboarding;