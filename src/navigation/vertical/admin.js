import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield , Users , Book} from 'react-feather'
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
    title: 'Entité',
    icon: <Users size={12} />,
    action: 'manage',
    resource: 'for-admin',
    navLink: '/admin/entities'
  },
  {
    id: 'admin-thematique',
    title: 'Thématique',
    icon: <Book size={12} />,
    action: 'manage',
    resource: 'for-admin',
    navLink: '/admin/thematique'
  },
  {
    id: 'admin-sous-thematique',
    title: 'Sous-thématique',
    icon: <Book size={12} />,
    action: 'manage',
    resource: 'for-admin',
    navLink: '/admin/sousThematique'
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
