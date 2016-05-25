import { Class } from 'meteor/jagi:astronomy';

import { Offers } from '/imports/collections/offers.js';
import { Foo } from '/imports/classes/foo.js';

const Offer = Class.create({
  name: 'Offer',
  collection: Offers,
  fields: {
    description: {
      type: String
    },
    title: {
      type: String
    },
    foo: {
      type: Foo
    }
  }
});

export { Offer };
