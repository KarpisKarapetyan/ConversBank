import React from 'react';
import { useRoutes } from 'react-router-dom';
import  Header  from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { ROUTES } from './helpers/routes';
import { useSelector } from 'react-redux';
import { mainTabsSelector } from './Redux/slices/mainTabs/mainTabs';
import HeaderTop from './Components/Header/HeaderTop/HeaderTop';



function App() {
  const routes = useRoutes(ROUTES)
  const changeValue = useSelector(mainTabsSelector)

  const ChnageAllPage = () => { 
    return (
      <>
      {!changeValue
        ? <>
             <Header/>
             {routes}
          </>
        : <>
            <div> Hompage business content </div>
          </>
      }
      </>
    )
  }

  return(
    <>
      <HeaderTop/>
      <ChnageAllPage />
      <Footer/>
    </>
  )

}

export default App;
