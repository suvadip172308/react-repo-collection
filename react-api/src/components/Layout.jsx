import { Outlet, useNavigation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const navigation = useNavigation();

  return(
    <>
      <Header/>
      <main>
        { navigation.state === 'loading' ? 'Loading...' : <Outlet/> }
      </main>
      <Footer/>
    </>
  )
}

export default Layout;