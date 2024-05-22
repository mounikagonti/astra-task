import {lazy, Suspense} from 'react'
import {createBrowserRouter} from 'react-router-dom'

// Components
const Header = lazy(() => import('../Shared/Header/Header'))
const Footer = lazy(() => import('../Shared/Footer/Footer'))
const HomePage = lazy(() => import('../Modules/HomePage/HomePage'))
const ContactUs = lazy(() => import('../Modules/Contact/ContactUs'))
const TaskPage = lazy(() => import('../Modules/TaskPage'))
const NotFound = lazy(() => import('../Modules/NotFound'))
const Skeleton = lazy(() => import('../Shared/Skeleton/Skeleton'))

const Layout = ({children}: {children: JSX.Element}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Suspense fallback={<Skeleton />}>
          <HomePage />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Suspense fallback={<Skeleton />}>
        <Layout>
          <ContactUs />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/task-page',
    element: (
      <Suspense fallback={<Skeleton />}>
        <Layout>
          <TaskPage />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <NotFound />
        </Layout>
      </Suspense>
    ),
  },
])
