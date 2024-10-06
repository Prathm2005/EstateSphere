export const searchFilters = [
  {
    options: [
      { label: 'Purchase', key: 'for-sale' },
      { label: 'Lease', key: 'for-rent' },
    ],
    placeholder: 'Transaction Type',
    filterParam: 'dealType',
  },
  {
    options: [
      { label: 'Daily', key: 'daily' },
      { label: 'Weekly', key: 'weekly' },
      { label: 'Monthly', key: 'monthly' },
      { label: 'Yearly', key: 'yearly' },
    ],
    placeholder: 'Frequency of Rent',
    filterParam: 'rentCycle',
  },
  {
    options: [
      { label: '10K AED', key: '10000' },
      { label: '20K AED', key: '20000' },
      { label: '30K AED', key: '30000' },
      { label: '40K AED', key: '40000' },
      { label: '50K AED', key: '50000' },
      { label: '60K AED', key: '60000' },
      { label: '85K AED', key: '85000' },
    ],
    placeholder: 'Minimum Price',
    filterParam: 'priceMin',
  },
  {
    options: [
      { label: '50K AED', key: '50000' },
      { label: '60K AED', key: '60000' },
      { label: '85K AED', key: '85000' },
      { label: '110K AED', key: '110000' },
      { label: '135K AED', key: '135000' },
      { label: '160K AED', key: '160000' },
      { label: '200K AED', key: '200000' },
      { label: '300K AED', key: '300000' },
      { label: '400K AED', key: '400000' },
      { label: '500K AED', key: '500000' },
      { label: '600K AED', key: '600000' },
      { label: '1M AED', key: '1000000' },
    ],
    placeholder: 'Maximum Price',
    filterParam: 'priceMax',
  },
  {
    options: [
      { label: 'Lowest to Highest', key: 'price-asc' },
      { label: 'Highest to Lowest', key: 'price-desc' },
      { label: 'Newest Listings', key: 'date-asc' },
      { label: 'Oldest Listings', key: 'date-desc' },
      { label: 'Verified Listings', key: 'verified-score' },
      { label: 'City Score', key: 'city-score' },
    ],
    placeholder: 'Sorting Options',
    filterParam: 'order',
  },
  {
    options: [
      { label: '1000 sqft', key: '1000' },
      { label: '2000 sqft', key: '2000' },
      { label: '5000 sqft', key: '5000' },
      { label: '10000 sqft', key: '10000' },
    ],
    placeholder: 'Max Area (sqft)',
    filterParam: 'maxArea',
  },
  {
    options: [
      { label: '1 Room', key: '1' },
      { label: '2 Rooms', key: '2' },
      { label: '3 Rooms', key: '3' },
      { label: '4 Rooms', key: '4' },
      { label: '5 Rooms', key: '5' },
    ],
    placeholder: 'Minimum Rooms',
    filterParam: 'minRooms',
  },
  {
    options: [
      { label: '1 Bath', key: '1' },
      { label: '2 Baths', key: '2' },
      { label: '3 Baths', key: '3' },
      { label: '4 Baths', key: '4' },
      { label: '5 Baths', key: '5' },
    ],
    placeholder: 'Minimum Baths',
    filterParam: 'minBaths',
  },
  {
    options: [
      { label: 'Furnished', key: 'furnished' },
      { label: 'Unfurnished', key: 'unfurnished' },
    ],
    placeholder: 'Furnishing Status',
    filterParam: 'furnishState',
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
    ],
    placeholder: 'Property Category',
    filterParam: 'propertyTypeID',
  },
];

export const mapFilterParams = (selectedFilters) => {
  const {
    dealType,
    rentCycle,
    propertyTypeID,
    priceMin,
    priceMax,
    maxArea,
    minRooms,
    minBaths,
    order,
    locationIDs,
  } = selectedFilters;

  return [
    { param: 'dealType', value: dealType },
    { param: 'rentCycle', value: rentCycle },
    { param: 'priceMin', value: priceMin },
    { param: 'priceMax', value: priceMax },
    { param: 'maxArea', value: maxArea },
    { param: 'minRooms', value: minRooms },
    { param: 'minBaths', value: minBaths },
    { param: 'order', value: order },
    { param: 'locationIDs', value: locationIDs },
    { param: 'propertyTypeID', value: propertyTypeID },
  ];
};
