## NOTE 1

Had to change ng-template to a regular div because otherwise I could not apply animations, seems because ng-template isnt rendered in the DOM (see one of the comments here):

https://stackoverflow.com/questions/60434192/angular-ng-template-animation-on-open-close-status

Also seems to be problematic with ngIf and ngFor, so best way is to sorrund everything with a div with no conditions, directives or such, and apply animation there
