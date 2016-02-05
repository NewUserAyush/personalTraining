(function() {
    'use strict';

    angular
        .module('triangular', [
            'ngMaterial',
            'triangular.layouts', 'triangular.components', 'triangular.themes', 'triangular.directives', 'triangular.router',
            // 'triangular.profiler',
            // uncomment above to activate the speed profiler
            'ui.router'
        ]);
})();