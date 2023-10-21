import { Navigate, Route, Routes } from "react-router-dom"
import { SharedLayout } from "../layout/SharedLayout"
import { lazy } from "react"
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { GlobalStyle } from "../utils/GlobalStyle.styled";
import { Toaster } from "react-hot-toast";
import { BiSearchAlt } from 'react-icons/bi';

const Home = lazy(() => import('../pages/Home/Home'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavouritePage = lazy(() => import('../pages/FavouritePage/FavouritePage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavouritePage />} />
          <Route path="*" element={<Navigate to={'/'}/>}/>
        </Route>
      </Routes>
      <Toaster position="top-center"
      toastOptions={{
        success: {
          style: {
            borderRadius: '14px',
            backgroundColor: '#0B44CD',
            color: '#ffffff'
          },
          icon: <BiSearchAlt color="#ffffff" size={18} />
        }
      }}/>
    </ThemeProvider>
  )
}

export default App
