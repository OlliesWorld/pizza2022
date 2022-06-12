import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import pizza from './pizza';
import topping from './topping';
import person from './person';
import storeSettings from './storeSettings';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([pizza, topping, person, storeSettings]),
});
