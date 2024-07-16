import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { FeedLazy } from "./pages/Feed/FeedLazy.tsx";
import { CompetitionsLazy } from "./pages/Competitions/CompetitionsLazy.tsx";
import { LiveLazy } from "./pages/Live/LiveLazy.tsx";
import { NotFoundLazy } from "./pages/NotFound/NotFoundLazy.tsx";
import { MarketplaceLazy } from "./pages/Marketplace/MarketplaceLazy.tsx";
import { OrganizationsLazy } from "./pages/Organizations/OrganizationsLazy.tsx";
import { RatingLazy } from "./pages/Rating/RatingLazy.tsx";
import { Layout } from "./components/Layout/Layout.tsx";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <h1>Загрузка...</h1>
          </div>
        }
      >
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Navigate to="/feed" />} />
            <Route path={"/feed"} element={<FeedLazy />} />
            <Route path={"/competitions"} element={<CompetitionsLazy />} />
            <Route path={"/live"} element={<LiveLazy />} />
            <Route path={"/marketplace"} element={<MarketplaceLazy />} />
            <Route path={"/organizations"} element={<OrganizationsLazy />} />
            <Route path={"/rating"} element={<RatingLazy />} />
            <Route path={"*"} element={<NotFoundLazy />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
