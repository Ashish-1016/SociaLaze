import { useState } from "react";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHomePage from "./Components/UserHomePage";
import UserProfilePage from "./Components/UserProfilePage";
import UserExplorePage from "./Components/UserExplorePage";
import UserFeedPage from "./Components/UserFeedPage";

function App() {
  const [currentUser, setCurrentUser] = useState(true);

  return (
    <BrowserRouter>
      {!currentUser ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={`/`} element={<UserHomePage />} />
          <Route path={`/explore`} element={<UserExplorePage />} />
          <Route path={`/feed`} element={<UserFeedPage />} />
          <Route
            path='/profile'
            element={<UserProfilePage />}
          />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
