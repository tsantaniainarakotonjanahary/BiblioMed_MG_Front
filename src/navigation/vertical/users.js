// ** Icons Import
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield } from 'react-feather'
var ability = JSON.parse(localStorage.getItem("userData"))?.ability || [{ action: "lol" }];


export default [
  {
    header: 'Users'
  },
  {
    id: 'user-upload',
    title: 'Upload File',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-user',
    navLink: '/user/upload'
  },
  {
    id: 'pending-file',
    title: 'Pending files',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-user',
    navLink: '/user/pending-file'
  },
  {
    id: 'file-by-entity',
    title: 'Shared for my entity',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-user',
    navLink: '/user/file-by-entity'
  },
  {
    id: 'user-valid',
    title: 'Validated files',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-user',
    navLink: '/user/valid'
  },
]
