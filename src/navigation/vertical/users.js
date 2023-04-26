import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield } from 'react-feather'

export default [
  {
    header: 'Users'
  },
  {
    id: 'user-upload',
    title: 'Ajouter fichier',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-user',
    navLink: '/user/upload'
  },
  {
    id: 'pending-file',
    title: 'En attente',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-user',
    navLink: '/user/pending-file'
  },
  {
    id: 'file-by-entity',
    title: 'Partagé',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-user',
    navLink: '/user/file-by-entity'
  },
  {
    id: 'user-valid',
    title: 'Fichier validé',
    icon: <Shield size={12} />,
    action: 'manage',
    resource: 'for-user',
    navLink: '/user/valid'
  },
]
