import { Route, Routes } from "react-router-dom"
import { SharedLayout } from "../layout/SharedLayout"
import { lazy } from "react"
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { GlobalStyle } from "../utils/GlobalStyle.styled";

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
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
