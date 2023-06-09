import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import charts from './charts'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import users from './users'
import admin from './admin'

var ability = JSON.parse(localStorage.getItem("userData"))?.ability || [{ action: "lol" }];

export default [ ...dashboards,  ...apps,  ...pages,  ...uiElements,  ...forms, ...tables, ...charts, ...others , ...users , ...admin ]
