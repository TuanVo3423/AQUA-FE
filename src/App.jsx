import { useState } from 'react'
import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainlayout';
import { publicRoutes } from './routes';

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
                <MainLayout path={route.title}>
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
