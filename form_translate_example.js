Forms = new Meteor.Collection('forms');

/*
  Mesosphere and server method should both run in shared space for dual client/server
  validation to work.
 */
Mesosphere({
    name: 'signupForm',
    method: 'signupUser',
    fields: {
        name: {
            required: true,
            format: 'alphanumeric',
            message: 'Please enter a valid name'
        },
        phone: {
            required: true,
            format: 'phone',
            rules: {
                minLength: 2,
                maxLength: 30,
            },
            message: "Phone must be between 2 and 30 numbers"
        },
        email: {
            required: true,
            format: 'email',
            message: "Invalid e-mail"
        }
    }

});

Meteor.methods({
  signupUser: function (rawData) {
    Mesosphere.signupForm.validate(rawData, function(errors, formData){
        if(!errors){
            console.log("No Errors Found");
            Meteor.call("addFormToDb", formData);
            //Do what you want with the validated data.
        }else{
            _(errors).each( function( value, key ) {
              console.log(key+": "+value.message);
            });
        }
    });
  },
  addFormToDb: function (formData) {
    Forms.insert({
      createdAt: new Date(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email
    });
  },
});


if (Meteor.isClient) {
  Meteor.subscribe('forms');
  
  Template.body.helpers({
    getFormEntriesFromDb: function () {
      return Forms.find({});
    }
  });
};

if (Meteor.isServer) {
  Meteor.publish('forms', function() {
    return Forms.find({});
  });
};