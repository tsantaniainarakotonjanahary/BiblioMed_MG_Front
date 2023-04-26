import { lazy } from 'react'

const Repertoire = lazy(() => import('../../views/pages/users/repertoire'))
const Accueil = lazy(() => import('../../views/pages/users/accueil'))
const Public = lazy(() => import('../../views/pages/users/public'))
const Upload = lazy(() => import('../../views/pages/users/upload'))
const Pending = lazy(() => import('../../views/pages/users/pending'))
const ByEntity = lazy(() => import('../../views/pages/users/by-entity'))
const Valid = lazy(() => import('../../views/pages/users/valid'))

const UsersRoutes = [
  {
    path: '/user/accueil',
    element: <Accueil />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/upload',
    element: <Upload />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/pending-file',
    element: <Pending />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/file-by-entity',
    element: <ByEntity />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/valid',
    element: <Valid />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/public',
    element: <Public />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/repertoire',
    element: <Repertoire />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
]

export default UsersRoutes
