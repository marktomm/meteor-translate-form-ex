FrontLang = new Translator();
FrontLang.use("translations/public");

if(Meteor.isClient) {
  Meteor.startup(function() {
    Translator.setDefaultLanguage(['en']);
  });
  
  Template.langNav.events({
    "click #est": function() {
      translate("ee");
    },
    "click #eng": function() {
      translate("en");
    }
  });
  
  Template.body.helpers({
    trans: FrontLang.createHelper()
  });
  
  Template.exampleForm.helpers({
    trans: FrontLang.createHelper()
  });
}

function translate(lang)
{
  Translator.setLanguage([lang]);
  formTranslate();
}

function formTranslate()
{
  Mesosphere.signupForm.fields.name.message = FrontLang.get("form.error.name");
  Mesosphere.signupForm.fields.phone.message = FrontLang.get("form.error.phone");
  Mesosphere.signupForm.fields.email.message = FrontLang.get("form.error.email");
}
