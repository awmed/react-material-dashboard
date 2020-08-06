import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import MinimalLayout from 'src/layouts/MinimalLayout';
import DashboardView from 'src/views/reports/DashboardView';
import AccountView from 'src/views/account/AccountView';
import ProductListView from 'src/views/product/ProductListView';
import SettingsView from 'src/views/settings/SettingsView';
import UserListView from 'src/views/user/UserListView';
import LoginView from 'src/views/auth/LoginView';
import RegisterView from 'src/views/auth/RegisterView';
import NotFoundView from 'src/views/errors/NotFoundView';

const routes = [
  {
    path: 'app',
    element: <MainLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'account', element: <AccountView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'users', element: <UserListView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MinimalLayout />,
    children: [
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
