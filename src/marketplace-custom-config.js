/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'towels',
    label: 'Towels',
  },
  {
    key: 'bathroom',
    label: 'Bathroom',
  },
  {
    key: 'swimming_pool',
    label: 'Swimming pool',
  },
  {
    key: 'own_drinks',
    label: 'Own drinks allowed',
  },
  {
    key: 'jacuzzi',
    label: 'Jacuzzi',
  },
  {
    key: 'audiovisual_entertainment',
    label: 'Audiovisual entertainment',
  },
  {
    key: 'barbeque',
    label: 'Barbeque',
  },
  {
    key: 'own_food_allowed',
    label: 'Own food allowed',
  },
];



export const categories = [
  { key: 'Baecker', label: 'Bäcker' },
  { key: 'cafe', label: 'Cafe' },
  { key: 'Fahrradladen', label: 'Fahrradladen' },
  { key: 'friseur', label: 'Friseur' },
  { key: 'Getraenke', label: 'Getränkeladen' },
  { key: 'Metzger', label: 'Metzger' },
  { key: 'Reinigung', label: 'Reinigung' },
  { key: 'restaurant', label: 'Restaurant' },
  { key: 'Schreibwaren', label: 'Schreibwaren' },
  { key: 'Tierhandlung', label: 'Tierhandlung' },
  { key: 'Schuster', label: 'Schuster' },
  { key: 'andere', label: 'Andere' }
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};
