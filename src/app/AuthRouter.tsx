import { useEffect, lazy } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import useUserState from "../shared/hooks/useUserStore";
import { PAGE_URL } from "../shared/configs/path";

const SignIn = lazy(() => import("../pages/auth/signIn/SignInPage"));
const BasicTest = lazy(() => import("../pages/auth/basicTest/BasicTestPage"));
const Home = lazy(() => import("../pages/home/HomePage"));
const Penguin = lazy(() => import("../pages/play/PenguinPage"));
const Store = lazy(() => import("../pages/store/StorePage"));
const Statistic = lazy(() => import("../pages/statistic/StatisticPage"));

const AuthRouter = () => {
  const isSignIn = useUserState((state) => state.isSignIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignIn) navigate(PAGE_URL.SignIn);
  }, []);

  return (
    <>
      <Routes>
        <Route path={PAGE_URL.SignIn} element={<SignIn />} />
        <Route path={PAGE_URL.BasicTest} element={<BasicTest />} />

        <Route path={PAGE_URL.Home} element={<Home />} />
        <Route path={PAGE_URL.Store} element={<Store />} />
        <Route path={PAGE_URL.Statistic} element={<Statistic />} />

        <Route path={PAGE_URL.Penguin} element={<Penguin />} />
      </Routes>
    </>
  );
};

export default AuthRouter;