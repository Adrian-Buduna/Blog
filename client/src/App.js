import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import {
  AlertsPage,
  ErrorPage,
  HomePage,
  LoginPage,
  MyStocksPage,
  NewsPage,
  ProfilePage,
  RegisterPage,
  SearchPage,
  TrendsPage,
  Watchlist,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-stocks" element={<MyStocksPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/trends" element={<TrendsPage />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
