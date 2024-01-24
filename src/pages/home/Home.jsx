import Feed from '../feed/posts.jsx'
import Topbar from '../header/Header.jsx'
import Navbar from '../navbar/Navbar.jsx'
/* import TestPosts from '../testPosts/testPosts.jsx' */

export default function Home(){
    return(
       <>
        <Topbar />
        <Navbar />
        <Feed />
        {/* <TestPosts /> */}
       </>
    )
}