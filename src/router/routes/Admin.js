import { lazy } from 'react'
const SousThematique = lazy(() => import('../../views/pages/admin/sousThematique'))
const Thematique = lazy(() => import('../../views/pages/admin/thematique'))
const Entities = lazy(() => import('../../views/pages/admin/entities'))
const Files = lazy(() => import('../../views/pages/admin/files'))
const Upload = lazy(() => import('../../views/pages/admin/upload'))
const Valid = lazy(() => import('../../views/pages/admin/valid'))
const PendingUsers = lazy(() => import('../../views/pages/admin/pending-users')) 
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
    path: '/admin/thematique',
    element: <Thematique />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },
  {
    path: '/admin/sousThematique',
    element: <SousThematique />,
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
    path: '/admin/pending-users',
    element: <PendingUsers />,
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
