(function() {
    'use strict';

    angular
        .module('app.examples.email')
        .filter('emailSearchFilter', emailSearchFilter);

    function emailSearchFilter() {
        return filterFilter;

        ////////////////

        function filterFilter(emails, emailSearch) {
            return emails.filter(function(email) {
                if(email.from.name.indexOf(emailSearch) > -1) {
                    return email;
                }
                if(email.subject.indexOf(emailSearch) > -1) {
                    return email;
                }
            });
        }
    }

})();