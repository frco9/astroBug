import { Class } from 'meteor/jagi:astronomy';
import { Bars } from '/imports/collections/bars.js';

const Bar = Class.create({
  name: 'Bar',
  collection: Bars,
  fields: {
    description: {
      type: String
    },
    title: {
      type: String
    }
  }
});

export { Bar };
