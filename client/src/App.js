import React from "react";
import { Outlet,Navigate, Routes,Route, useLocation } from "react-router-dom";
import { Home, Login, Profile, Register, ResetPassword } from "./pages";
function Layout() {
  const user=null;
  const location= useLocation();

  return user?.token? (
    <Outlet></Outlet>
  ):(
    <Navigate to='/login' state={{from:location}} replace></Navigate>
  );
}
function App() {
  return (
    <div className="w-full  min-h-[100vh]">
     <Routes>
      <Route element={<Layout></Layout>} >
        <Route path="/" element={<Home />}/>
        <Route path="/profile/:id?" element={<Profile />}  />
      </Route>

      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/reset-password" element={<ResetPassword />}/>
     </Routes>
    </div>
  );
}

export default App;
