import { endUserReferences } from '../../app.routes';

interface NavigationItem {
  label: string;
  reference: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'About Us',
    reference: endUserReferences.AboutUs,
  },
  {
    label: 'For Sale',
    reference: endUserReferences.ForSale,
  },
  {
    label: 'For Rent',
    reference: endUserReferences.ForRent,
  },
  {
    label: 'Services',
    reference: endUserReferences.Services,
  },
  {
    label: 'Contact Us!',
    reference: endUserReferences.ContactUs,
  },
];

export {
  navigationItems
};
