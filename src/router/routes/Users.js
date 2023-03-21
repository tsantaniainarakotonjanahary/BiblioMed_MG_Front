import { lazy } from 'react'

const Upload = lazy(() => import('../../views/pages/users/upload'))
const Pending = lazy(() => import('../../views/pages/users/pending'))
const ByEntity = lazy(() => import('../../views/pages/users/by-entity'))
const Valid = lazy(() => import('../../views/pages/users/valid'))

const UsersRoutes = [
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
]

export default UsersRoutes
