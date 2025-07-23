import './Home.css';
import Circle_Help from '../assets/icon/Circle_Help.svg'

const Home = () => {
    return(<div className='Home'>
        <header>
            <p>제주대학교</p> {/* 학교명 */}
            <h3>컴퓨터공학과 학생회</h3> {/* 학과명 */}
            <img src={Circle_Help}/>
        </header>
        <main>
            <section className='summary-section'>
                <p>잔액</p>
                <h1>2,451,987</h1>
                <h3>원</h3>
                <p>총 수입</p>
                <p>3,425,000원</p>
                <p>총 지출</p>
                <p>1,437,540원</p>
            </section>

        </main>
        <nav>

        </nav>
    </div>);
}

export default Home;