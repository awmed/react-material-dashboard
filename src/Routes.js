import React, {
  Suspense,
  Fragment,
  lazy
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import MinimalLayout from 'src/layouts/MinimalLayout';
import LoadingScreen from 'src/components/LoadingScreen';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            exact={route.exact}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            path={route.path}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/',
    layout: MainLayout,
    component: lazy(() => import('src/views/reports/DashboardView'))
  },
  {
    exact: true,
    path: '/dashboard',
    layout: MainLayout,
    component: lazy(() => import('src/views/reports/DashboardView'))
  },
  {
    exact: true,
    path: '/users',
    layout: MainLayout,
    component: lazy(() => import('src/views/user/UserListView'))
  },
  {
    exact: true,
    path: '/products',
    layout: MainLayout,
    component: lazy(() => import('src/views/product/ProductListView'))
  },
  {
    exact: true,
    path: '/typography',
    layout: MainLayout,
    component: lazy(() => import('src/views/typography/TypographyView'))
  },
  {
    exact: true,
    path: '/icons',
    layout: MainLayout,
    component: lazy(() => import('src/views/icons/IconsView'))
  },
  {
    exact: true,
    path: '/account',
    layout: MainLayout,
    component: lazy(() => import('src/views/account/AccountView'))
  },
  {
    exact: true,
    path: '/settings',
    layout: MainLayout,
    component: lazy(() => import('src/views/settings/SettingsView'))
  },
  {
    exact: true,
    path: '/404',
    layout: MinimalLayout,
    component: lazy(() => import('src/views/errors/NotFoundView'))
  },
  {
    exact: true,
    path: '/login',
    layout: MinimalLayout,
    component: lazy(() => import('src/views/auth/LoginView'))
  },
  {
    exact: true,
    path: '/register',
    layout: MinimalLayout,
    component: lazy(() => import('src/views/auth/RegisterView'))
  },
  {
    component: () => <Redirect to="/404" />
  }
];

export default routes;
