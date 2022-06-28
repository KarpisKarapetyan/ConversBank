import React from 'react';
import { useRoutes } from 'react-router-dom';
import  HeaderMain  from './Components/Header/HeaderMain/HeaderMain';
import Footer from './Components/Footer/Footer';
import { BUSINESSROUTES, ROUTES } from './helpers/routes';
import { useSelector } from 'react-redux';
import { mainTabsSelector } from './Redux/slices/mainTabs/mainTabs';
import HeaderTop from './Components/Header/HeaderTop/HeaderTop';

function App() {
  const routes = useRoutes(ROUTES)
  const businessRoutes   = useRoutes(BUSINESSROUTES)
  const changeTabValue = useSelector(mainTabsSelector)

  const ChnageAllPage = () => { 
    return (
      <>
      {!changeTabValue
        ? <>
             <HeaderMain/>
             {routes}
          </>
        : <>
            {businessRoutes}
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
