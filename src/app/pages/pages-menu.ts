import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Global Dashboard',
    icon: 'home-outline',
    link: '/pages/main-dashboard',
    home: true,
  },
  {
    title: 'Sense Dashboard',
    icon: 'pie-chart-outline',
    link: '/pages/sense-dashboard',
    hidden:false,
    group:true

  },
  {
    title: 'Leaflet Map',
    icon: 'map-outline',
    link: '/pages/maps/leaflet',
  },

];
