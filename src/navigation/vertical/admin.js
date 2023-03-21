import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield } from 'react-feather'
var ability = JSON.parse(localStorage.getItem("userData"))?.ability || [{ action: "lol" }];

export default [
  {
    header: 'Administrations'
  },
  {
    id: 'admin-upload',
    title: 'Upload File',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-admin',
    navLink: '/admin/upload'
  },
  {
    id: 'pending-file',
    title: 'files to validate',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-admin',
    navLink: '/admin/files'
  },
  {
    id: 'admin-entities',
    title: 'Entities',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-admin',
    navLink: '/admin/entities'
  },
  {
    id: 'admin-users',
    title: 'Validate user',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-admin',
    navLink: '/admin/users'
  },
]
