import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Analytics from "./pages/Analytics.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Sidebar from "./layout/index.jsx";
import UsersList from "./pages/users/UsersList.jsx";
import UserAdd from "./pages/users/UserAdd.jsx";
import EditUser from "./pages/users/EditUser.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithoutSidebarLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <WithSidebarLayout>
              <Dashboard />
            </WithSidebarLayout>
          }
        />
        <Route
          path="/users"
          element={
            <WithSidebarLayout>
              <UsersList />
            </WithSidebarLayout>
          }
        />
        <Route
          path="/adduser"
          element={
            <WithSidebarLayout>
              <UserAdd />
            </WithSidebarLayout>
          }
        />
        <Route
          path="/edituser"
          element={
            <WithSidebarLayout>
              <EditUser />
            </WithSidebarLayout>
          }
        />
        <Route
          path="/analytics"
          element={
            <WithSidebarLayout>
              <Analytics />
            </WithSidebarLayout>
          }
        />
        <Route
          path="/comment"
          element={
            <WithSidebarLayout>
              <Comment />
            </WithSidebarLayout>
          }
        />
        <Route
          path="/product"
          element={
            <WithSidebarLayout>
              <Product />
            </WithSidebarLayout>
          }
        />
        <Route
          path="/productlist"
          element={
            <WithSidebarLayout>
              <ProductList />
            </WithSidebarLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function WithSidebarLayout({ children }) {
  return <Sidebar>{children}</Sidebar>;
}

function WithoutSidebarLayout() {
  return <Outlet />;
}
