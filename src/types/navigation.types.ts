export interface MenuItem {
  name: string;
  path: string;
}

export interface NavigationState {
  menuItems: MenuItem[];
}