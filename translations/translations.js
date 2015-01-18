FrontLang = new Translator();
FrontLang.use("translations/public");

if(Meteor.isClient) {
  Meteor.startup(function() {
    Translator.setDefaultLanguage(['en']);
  });
  
  Template.langNav.events({
    "click #est": function() {
      Translator.setLanguage(["ee"]);
    },
    "click #eng": function() {
      Translator.setLanguage(["en"]);
    }
  });
}