import { lazy } from 'react'

const Entities = lazy(() => import('../../views/pages/admin/entities'))
const Files = lazy(() => import('../../views/pages/admin/files'))
const Upload = lazy(() => import('../../views/pages/admin/upload'))
const Valid = lazy(() => import('../../views/pages/admin/valid'))
const Users = lazy(() => import('../../views/pages/admin/users')) 

const AdminRoutes = [
  {
    path: '/admin/upload',
    element: <Upload />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },
  {
    path: '/admin/files',
    element: <Files />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },
  {
    path: '/admin/entities',
    element: <Entities />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },
  {
    path: '/admin/valid',
    element: <Valid />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },
  {
    path: '/admin/users',
    element: <Users />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },
]

export default AdminRoutes
