
export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  WHAT_WE_BUILD = 'WHAT_WE_BUILD',
  INVESTMENT = 'INVESTMENT',
  INSIGHTS = 'INSIGHTS',
  PARTNERS = 'PARTNERS',
  CAREERS = 'CAREERS',
  CONTACT = 'CONTACT'
}

export interface NavItem {
  id: Page;
  label: string;
  icon: string;
}
