if(Meteor.isClient) {
  Meteor.startup(function() {
    TAPi18n.setLanguage("ee");
  });
  
  Template.langNav.events({
    "click #est": function() {
      TAPi18n.setLanguage("ee");
    },
    "click #eng": function() {
      TAPi18n.setLanguage("en");
    }
  });
}

