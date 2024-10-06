export const searchFilters = [
  {
    options: [
      { label: 'Buy', key: 'for-sale' },
      { label: 'Rent', key: 'for-rent' },
    ],
    placeholder: 'Purpose',
    paramName: 'dealType',
  },
  {
    options: [
      { label: 'Daily', key: 'daily' },
      { label: 'Weekly', key: 'weekly' },
      { label: 'Monthly', key: 'monthly' },
      { label: 'Yearly', key: 'yearly' },
    ],
    placeholder: 'Rent Frequency',
    paramName: 'rentCycle',
  },
  {
    options: [
      { label: '10,000', key: '10000' },
      { label: '20,000', key: '20000' },
      { label: '30,000', key: '30000' },
      { label: '40,000', key: '40000' },
      { label: '50,000', key: '50000' },
      { label: '60,000', key: '60000' },
      { label: '85,000', key: '85000' },
    ],
    placeholder: 'Min Price (AED)',
    paramName: 'priceMin',
  },
  {
    options: [
      { label: '50,000', key: '50000' },
      { label: '60,000', key: '60000' },
      { label: '85,000', key: '85000' },
      { label: '110,000', key: '110000' },
      { label: '135,000', key: '135000' },
      { label: '160,000', key: '160000' },
      { label: '185,000', key: '185000' },
      { label: '200,000', key: '200000' },
      { label: '300,000', key: '300000' },
      { label: '400,000', key: '400000' },
      { label: '500,000', key: '500000' },
      { label: '600,000', key: '600000' },
      { label: '700,000', key: '700000' },
      { label: '800,000', key: '800000' },
      { label: '900,000', key: '900000' },
      { label: '1,000,000', key: '1000000' },
    ],
    placeholder: 'Max Price (AED)',
    paramName: 'priceMax',
  },
  {
    options: [
      { label: 'Lowest Price', key: 'price-asc' },
      { label: 'Highest Price', key: 'price-desc' },
      { label: 'Newest', key: 'date-asc' },
      { label: 'Oldest', key: 'date-desc' },
      { label: 'Verified', key: 'verified-score' },
      { label: 'City Level Score', key: 'city-level-score' },
    ],
    placeholder: 'Sort By',
    paramName: 'sortOrder',
  },
  {
    options: [
      { label: '1,000', key: '1000' },
      { label: '2,000', key: '2000' },
      { label: '3,000', key: '3000' },
      { label: '4,000', key: '4000' },
      { label: '5,000', key: '5000' },
      { label: '10,000', key: '10000' },
      { label: '20,000', key: '20000' },
    ],
    placeholder: 'Max Area (sqft)',
    paramName: 'areaMax',
  },
  {
    options: [
      { label: '1', key: '1' },
      { label: '2', key: '2' },
      { label: '3', key: '3' },
      { label: '4', key: '4' },
      { label: '5', key: '5' },
      { label: '6', key: '6' },
      { label: '7', key: '7' },
      { label: '8', key: '8' },
      { label: '9', key: '9' },
      { label: '10', key: '10' },
    ],
    placeholder: 'Rooms',
    paramName: 'roomsMin',
  },
  {
    options: [
      { label: '1', key: '1' },
      { label: '2', key: '2' },
      { label: '3', key: '3' },
      { label: '4', key: '4' },
      { label: '5', key: '5' },
      { label: '6', key: '6' },
      { label: '7', key: '7' },
      { label: '8', key: '8' },
      { label: '9', key: '9' },
      { label: '10', key: '10' },
    ],
    placeholder: 'Bathrooms',
    paramName: 'bathsMin',
  },
  {
    options: [
      { label: 'Furnished', key: 'furnished' },
      { label: 'Unfurnished', key: 'unfurnished' },
    ],
    placeholder: 'Furnishing Status',
    paramName: 'furnishStatus',
  },
  {
    options: [
      { label: 'Apartment', key: '4' },
      { label: 'Townhouse', key: '16' },
      { label: 'Villa', key: '3' },
      { label: 'Penthouse', key: '18' },
      { label: 'Hotel Apartment', key: '21' },
      { label: 'Villa Compound', key: '19' },
      { label: 'Residential Plot', key: '14' },
      { label: 'Residential Floor', key: '12' },
      { label: 'Residential Building', key: '17' },
    ],
    placeholder: 'Property Type',
    paramName: 'propertyType',
  },
];

export const mapFilterParams = (selectedFilters) => {
  const {
    dealType,
    rentCycle,
    propertyType,
    priceMin,
    priceMax,
    areaMax,
    roomsMin,
    bathsMin,
    sortOrder,
    locationIDs,
  } = selectedFilters;

  const filterParams = [
    { param: 'dealType', value: dealType },
    { param: 'rentCycle', value: rentCycle },
    { param: 'priceMin', value: priceMin },
    { param: 'priceMax', value: priceMax },
    { param: 'areaMax', value: areaMax },
    { param: 'roomsMin', value: roomsMin },
    { param: 'bathsMin', value: bathsMin },
    { param: 'sortOrder', value: sortOrder },
    { param: 'locationIDs', value: locationIDs },
    { param: 'propertyType', value: propertyType },
  ];

  return filterParams;
};
       
