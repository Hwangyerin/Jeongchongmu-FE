import './Home.css';
import { Circle_Help, External_Link, File_Add, File_Edit, File_Remove } from '../assets/icon';
import CircleMenuButton from '../components/CircleMenuButton';



const Home = () => {
  return(
  <div className='Home'>
    <header className='home-header'>
      <section className='school-info'>
        <h1>제주대학교</h1> {/* 학교명 */}
        <p>컴퓨터공학과 학생회</p> {/* 학과명 */}
      </section>
      <button className='help-button'><img src={Circle_Help} alt='도움말'/></button>
    </header>
    <main className='home-main'>
      <section className='summary-section'>
        {/* 잔액 */}
        <div className='summary-balance'>
          <h2>잔액</h2>
          <p>2,451,987<span>원</span></p> 
        </div>
        {/* 총 수입 */}
        <div className='summary-income'>
          <h3>총 수입</h3>
          <p>3,425,000<span>원</span></p>
        </div>
        {/* 총 지출 */}
        <div className='summary-expense'>
          <h3>총 지출</h3>
          <p>1,437,540<span>원</span></p>
        </div>
      </section>
      {/* 수입등록, 지출등록, 예산안, 내보내기 버튼 */}
      <div className='menu'> 
        <CircleMenuButton icon={File_Add} label='수입등록' to="./Income"/>
        <CircleMenuButton icon={File_Remove} label='지출등록' to="./Expense" />
        <CircleMenuButton icon={File_Edit} label='예산안'/>
        <CircleMenuButton icon={External_Link} label='내보내기'/>
      </div>
    </main>
    <nav>

    </nav>
  </div>);
}

export default Home;