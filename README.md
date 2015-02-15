# Meteor app translation example with copleykj:mesosphere form

Theere are three branches. Each branch has a different translation package.

## master: tap:i18n package 
Haven't figured out how to translate error messages for form, 
because mesosphere autoform has dual client/server validation 
and tap:i18n javascript TAPi18n.__() function expects different
arguments for server and client side
## Nemo64-package: nemo64:translator package
Everything translates OK, but get console warnings when translating
form messages:

Translation of 'form.error.phone' requested outside of a reactive context!
## anit-i18n-package: anti:i18n package

