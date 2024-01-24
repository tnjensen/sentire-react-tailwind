import { Link } from 'react-router-dom';

export default function Topbar() {
    
  return (
    <div className="headerContainer">
        <div className="headerLeft">
        <Link to="/"><span className="logo">Sentire</span></Link>
                
        </div>
        <div className="headerCenter">
            <i className="fa fa-search"></i>
            <input placeholder="Search for songs, artists or albums" className="searchInput" />
        </div>
        <div className="headerRight">
            <div className="headerLinks">
                <Link to="/login"><span className="headerLink loginLink">Login</span></Link>
                <span className="profile-divider">|</span>
                <Link to="/register"><span className="headerLink registerLink">Register</span></Link>
            </div>
            <div className="headerIcons">
                <div className="headerIconItem">
                <i className="fa fa-user"></i>
                    <span className="headerIconBadge">1</span>
                </div>
                <div className="headerIconItem">
                <i className="fa fa-comment"></i>
                    <span className="headerIconBadge">1</span>
                </div>
                <div className="headerIconItem">
                <i className="fa fa-bell"></i><span className="headerIconBadge">2</span>
                </div>
            </div> 
               <img src='/assets/noAvatar.png' alt='profileImage' className='profileIcon' />
        </div>    
    </div>
  )
}
