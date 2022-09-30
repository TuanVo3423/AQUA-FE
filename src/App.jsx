import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainlayout';
import { publicRoutes } from './routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
          {publicRoutes.map((route,index) => {
            const Page = route.component; 
            return (
              <Route
              key={index}
              path={route.path}
              element={
                <MainLayout titleIndex={count} path={route.title} isShowBreadcrum={route.isShowBreadcrum}>
                    <Page />
                  </MainLayout>
              }
              >
                
              </Route>
            )
          })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
