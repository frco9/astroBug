import { Class } from 'meteor/jagi:astronomy';
import { Foos } from '/imports/collections/foos.js';
import { Offer } from '/imports/classes/offer.js';

const Foo = Class.create({
  name: 'Foo',
  collection: Foos,
  fields: {
    description: {
      type: String
    },
    title: {
      type: String
    },
    offers: {
      type: [Offer],
      default: () => [new Offer()]
    }
  }
});

export { Foo };
