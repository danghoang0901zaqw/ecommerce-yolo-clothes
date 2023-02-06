import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Helmet from "./components/Helmet";
import { publicRoutes } from "./routes";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes?.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            }
            if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.element;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Helmet title={route.namePage}>
                      <Page />
                    </Helmet>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
