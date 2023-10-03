import './portfolio.css';

function portfolio() {
    return (
        <div>
            <h1>포트폴리오</h1>
            <div className="container">
                <a href="https://github.com/criseria/my_web_site" target="_blank">
                    <img src="./my_web_site.PNG" style={{ width: 400, height: 400 }}></img>
                    <p>HTML을 활용한 내가 가고싶은 여행지 목록 사이트</p>
                </a>
                <a href="https://github.com/criseria/picture_puzzle_challenge" target="_blank">
                    <img src="./그림 퍼즐 맞추기 게임.PNG" style={{ width: 400, height: 400 }}></img>
                    <p>HTML5 와 JS를 활용한 랜덤 그림퍼즐 맞추기 게임</p>
                </a>
                <a href="https://github.com/criseria/project" target="_blank">
                    <img src="./Travel_Maker.PNG" style={{ width: 400, height: 400 }}></img>
                    <p>MVC 모델패턴 을 활용한 여행지 소개, 여행관련 쇼핑몰</p>
                    <p>및 커뮤니티 웹 서비스 프로젝트</p>
                </a>
                <a href="https://github.com/criseria/Open_API_Web" target="_blank">
                    <img src="나만의 도서 검색.PNG" style={{ width: 400, height: 400 }}></img>
                    <p>OPEN API를 이용한 도서 검색 사이트</p>
                </a>
                <a href="https://github.com/criseria/starbucks" target="_blank">
                    <img src="스타벅스.PNG" style={{ width: 400, height: 400 }}></img>
                    <p>스타벅스 홈페이지 클론 코딩</p>
                </a>
            </div>
        </div >
    );
};

export default portfolio;