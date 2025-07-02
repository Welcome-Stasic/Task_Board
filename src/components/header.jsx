
import searchImg from '../assets/header/search.png';
import notImg from '../assets/header/notif.png';
import themeImg from '../assets/header/theme.png';
import profileImg from '../assets/header/profile.png';


function Header() {
    return ( <header className="header">
        <div className="container">
            <div className="header-wrapper">
            <div className="burger">
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <div className="search-input_content">
                <input type="text" className="input_search" placeholder="write you project name"/>
                <div className="search-btn">
                    <img src={searchImg} alt="поиск" />
                </div>
            </div>
            <div className="header-nav_btn">
                <div className="btn-item">
                    <img src={notImg} alt="уведомления"/>
                </div>
                <div className="btn-item">
                    <img src={themeImg} alt="тема"/>
                </div>
                <div className="btn-item">
                    <img src={profileImg} alt="профиль"/>
                </div>
            </div>
            </div>
        </div>
    </header>)
}
export default Header
