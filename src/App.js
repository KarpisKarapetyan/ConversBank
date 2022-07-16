import React, { useLayoutEffect } from 'react';
import { useNavigate, useParams, useRoutes } from 'react-router-dom';
import  HeaderMain  from './Components/Header/HeaderMain/HeaderMain';
import Footer from './Components/Footer/Footer';
import { BUSINESSROUTES, ROUTES } from './helpers/routes';
import { useSelector } from 'react-redux';
import { mainTabsSelector } from './Redux/slices/mainTabs/mainTabs';
import {languageSelector} from './Redux/slices/language/language'
import HeaderTop from './Components/Header/HeaderTop/HeaderTop';

function App() {
  const routes = useRoutes(ROUTES)
  const businessRoutes   = useRoutes(BUSINESSROUTES)
  const changeTabValue = useSelector(mainTabsSelector)
  const navigate = useNavigate()
  const currentLang = useSelector(languageSelector).toLowerCase()
  const params = useParams()

  useLayoutEffect(()=>{
    params.id = currentLang
    navigate(`${routes.props.value.matches[0].pathname}/${params?.id}`)
  },[currentLang])

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
