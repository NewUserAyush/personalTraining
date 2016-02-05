(function() {
    'use strict';

    angular
        .module('app.examples.extras')
        .controller('TimelineController', TimelineController);

    /* @ngInject */
    function TimelineController() {
        var vm = this;
        vm.events = [{
            title: 'Material Design',
            subtitle: 'We challenged ourselves to create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science.',
            date:'27/6/2015',
            image: 'assets/images/avatars/hair-black-eyes-blue-green-skin-tanned.png',
            content: '<img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg"/>',
            palette: ''
        },{
            title: 'Dorothy Lewis',
            subtitle: 'Design Magazine',
            date:'27/6/2015',
            image: 'assets/images/avatars/hair-black-eyes-brown-skin-tanned.png',
            content: '<p class="padding-10 font-size-3 font-weight-200 line-height-big">This spec is a living document that will be updated as we continue to develop the tenets and specifics of material design.</p>',
            palette: 'cyan:500'
        },{
            title: 'Goals',
            subtitle: 'Create a visual language that synthesizes classic principles of good design with the innovation and possibility of technology and science.',
            date:'26/6/2015',
            image: 'assets/images/avatars/hair-blonde-eyes-brown-skin-light.png',
            content: '<img src="assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg"/>',
            palette: 'cyan:500',
            classes: 'widget-overlay-title'
        },{
            title: 'Principles',
            subtitle: 'A material metaphor is the unifying theory of a rationalized space and a system of motion. ',
            date:'24/6/2015',
            image: 'assets/images/avatars/hair-black-eyes-dark-skin-dark.png',
            content: '<img src="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg"/>'
        },{
            title: 'Joe Ross',
            subtitle: 'CEO Google',
            date:'23/6/2015',
            image: 'assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png',
            content: '<p class="padding-10 font-size-3 font-weight-200 line-height-big">Surfaces and edges of the material provide visual cues that are grounded in reality. The use of familiar tactile attributes helps users quickly understand affordances.</p> ',
            palette: 'purple:500'
        },{
            title: 'Sam Ross',
            subtitle: 'CEO Facebook',
            date:'23/6/2015',
            image: 'assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png',
            content: '<p class="padding-10 font-size-3 font-weight-200 line-height-big">The color palette starts with primary colors and fills in the spectrum to create a complete and usable palette for Android, Web, and iOS.</p> ',
            palette: 'deep-orange:700'
        },{
            title: 'John King',
            subtitle: 'Limit your selection of colors by choosing three hues from the primary palette and one accent color from the secondary palette.',
            date:'17/6/2015',
            image: 'assets/images/avatars/hair-black-eyes-brown-skin-dark.png',
            content: '<img src="assets/images/backgrounds/material-backgrounds/mb-bg-04.jpg"/>',
            palette: 'cyan:500',
            classes: 'widget-overlay-title'
        },{
            title: 'Christos Pantazis',
            subtitle: 'CEO Facebook',
            date:'23/6/2015',
            image: 'assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png',
            content: '<p class="padding-10 font-size-3 font-weight-200 line-height-big">For white or black text on colored backgrounds, see these tables of color palettes for the appropriate contrast ratios and hex values.</p> ',
            palette: 'red:50'
        },{
            title: 'Accent color',
            subtitle: 'Use the accent color for your primary action button and components like switches or sliders.',
            date:'12/6/2015',
            image: 'assets/images/avatars/hair-black-eyes-brown-skin-tanned-2.png',
            content: '<img src="assets/images/backgrounds/material-backgrounds/mb-bg-05.jpg"/>',
            palette: 'cyan:500',
            classes: 'widget-overlay-title'
        }];
    }
})();