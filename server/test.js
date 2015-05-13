var collection = new Mongo.Collection(null);

collection.find().observe({
  added: function () {
    console.log('added', arguments);
  },
  changed: function () {
    console.log('changed', arguments);
  },
  removed: function () {
    console.log('removed', arguments);
  }
});

var array = []

var id = collection.insert({a: array});

Meteor.startup(function () {
  for (var i = 0; i < 5; i++) {
    array.push('' + i);
    collection.update(id, {a: array});
    // The following query works.
    //collection.update(id, EJSON.clone({a: array}));
  }
});
