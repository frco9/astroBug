import { Class } from 'meteor/jagi:astronomy';

import { Offers } from '/imports/collections/offers.js';
import { Bar } from '/imports/classes/bar.js';

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
    bar: {
      type: Bar,
      default() {
        return new Bar();
      }
    }
  }
});

export { Offer };
