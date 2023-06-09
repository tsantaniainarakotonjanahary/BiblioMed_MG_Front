import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield , Home , Plus  , Loader , Share2 , BookOpen , Globe , Check , FolderPlus} from 'react-feather'

export default [
  { header: 'Users' },
  { id: 'user-home', title: 'Accuei et Dashboard ', icon: <Home size={20} />, action: 'manage', resource: 'for-user', navLink: '/user/accueil' },
  { id: 'user-upload', title: 'Ajouter nouveau', icon: <Plus size={20} />, action: 'manage', resource: 'for-user', navLink: '/user/upload' },
  { id: 'pending-file', title: 'En attente', icon: <Loader size={20} />, action: 'manage', resource: 'for-user', navLink: '/user/pending-file' },
  { id: 'file-by-entity', title: 'Partagé', icon: <Share2 size={20} />, action: 'manage', resource: 'for-user', navLink: '/user/file-by-entity' },
  { id: 'user-valid', title: 'Fichier validé', icon: <Check size={20} />, action: 'manage', resource: 'for-user', navLink: '/user/valid' },
  { id: 'user-public', title: 'Fichier public', icon: <Globe size={20} />, action: 'manage', resource: 'for-user', navLink: '/user/public' },
  { id: 'user-repertoire', title: 'Repertoire', icon: <FolderPlus size={20} />, action: 'manage', resource: 'for-user', navLink: '/user/repertoire' },
  
]
