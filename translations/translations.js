if(Meteor.isClient) {
  Meteor.startup(function() {
    i18n.setDefaultLanguage("ee");
    translate("ee");
  });
  
  Template.langNav.events({
    "click #est": function() {
      translate("ee");
    },
    "click #eng": function() {
      translate("en");
    }
  });
}


function translate(lang)
{
  i18n.setLanguage(lang);
  formTranslate();
}

function formTranslate()
{
  Mesosphere.signupForm.fields.name.message = i18n('form.error.name');
  Mesosphere.signupForm.fields.phone.message = i18n('form.error.phone');
  Mesosphere.signupForm.fields.email.message = i18n('form.error.email');
}


i18n.map('en', {
  form: {
    name: 'Name',
    phone: 'Phone',
    email: 'E-mail',
    error: {
      name: 'Please enter a valid name',
      phone: 'Phone must be between 2 and 30 numbers',
      email: 'Invalid email'
    }
  },
  title: 'Meteor multilang example using i18n package!'
});

i18n.map('ee', {
  form: {
    name: 'Nimi',
    phone: 'Telefon',
    email: 'E-post',
    error: {
      name: 'Palun sisestage korrektne nimi',
      phone: 'Telefoni number peab olema vahemikus 2 kui 30 numbrit',
      email: 'Vale e-posti aadress'
    }
  },
  title: 'Eesti keelne naide'
});