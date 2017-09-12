'use strict';

// Setting up route
angular.module('mean.meanStarter').config(['$meanStateProvider', '$urlRouterProvider',
  function ($meanStateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $meanStateProvider
      .state('home', {
        url: '/',
        templateUrl: 'meanStarter/views/system/index.html'
      });

      $meanStateProvider
      .state('practice', {
        url: '/practice',
        templateUrl: 'meanStarter/views/system/practice.html'
      });

      $meanStateProvider
      .state('s-vidia', {
        url: '/s-vidia',
        templateUrl: 'meanStarter/views/system/s-vidia.html'
      });

      $meanStateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'meanStarter/views/system/about.html'
      });

      $meanStateProvider
      .state('basicSys', {
        url: '/basicSys',
        templateUrl: 'meanStarter/views/system/basicSys.html'
      });

      $meanStateProvider
      .state('busSys', {
        url: '/busSys',
        templateUrl: 'meanStarter/views/system/busSys.html'
      });

      $meanStateProvider
      .state('Cameras', {
        url: '/Cameras',
        templateUrl: 'meanStarter/views/system/Cameras.html'
      });

      $meanStateProvider
      .state('contactSupport', {
        url: '/contactSupport',
        templateUrl: 'meanStarter/views/system/contactSupport.html'
      });

      $meanStateProvider
      .state('contactUs', {
        url: '/contactUs',
        templateUrl: 'meanStarter/views/system/contactUs.html'
      });

      $meanStateProvider
      .state('DIYkits', {
        url: '/DIYkits',
        templateUrl: 'meanStarter/views/system/DIYkits.html'
      });

      $meanStateProvider
      .state('Downloads', {
        url: '/Downloads',
        templateUrl: 'meanStarter/views/system/Downloads.html'
      });

      $meanStateProvider
      .state('FAQ', {
        url: '/FAQ',
        templateUrl: 'meanStarter/views/system/FAQ.html'
      });

      $meanStateProvider
      .state('homeDiy', {
        url: '/homeDiy',
        templateUrl: 'meanStarter/views/system/homeDiy.html'
      });

      $meanStateProvider
      .state('homeSys', {
        url: '/homeSys',
        templateUrl: 'meanStarter/views/system/homeSys.html'
      });

      $meanStateProvider
      .state('investorInfo', {
        url: '/investorInfo',
        templateUrl: 'meanStarter/views/system/investorInfo.html'
      });

      $meanStateProvider
      .state('liveDemo', {
        url: '/liveDemo',
        templateUrl: 'meanStarter/views/system/liveDemo.html'
      });

      $meanStateProvider
      .state('mobileclients', {
        url: '/mobileclients',
        templateUrl: 'meanStarter/views/system/mobileclients.html'
      });

      $meanStateProvider
      .state('multiserver', {
        url: '/multiserver',
        templateUrl: 'meanStarter/views/system/multiserver.html'
      });

      $meanStateProvider
      .state('pcclient', {
        url: '/pcclient',
        templateUrl: 'meanStarter/views/system/pcclient.html'
      });

      $meanStateProvider
      .state('Privacy', {
        url: '/Privacy',
        templateUrl: 'meanStarter/views/system/Privacy.html'
      });

      $meanStateProvider
      .state('Product_Documentation', {
        url: '/Product_Documentation',
        templateUrl: 'meanStarter/views/system/Product_Documentation.html'
      });

      $meanStateProvider
      .state('proxy_encoder', {
        url: '/proxy_encoder',
        templateUrl: 'meanStarter/views/system/proxy_encoder.html'
      });

      $meanStateProvider
      .state('Recorders', {
        url: '/Recorders',
        templateUrl: 'meanStarter/views/system/Recorders.html'
      });

      $meanStateProvider
      .state('reqPerDemo', {
        url: '/reqPerDemo',
        templateUrl: 'meanStarter/views/system/reqPerDemo.html'
      });

      $meanStateProvider
      .state('RMA', {
        url: '/RMA',
        templateUrl: 'meanStarter/views/system/RMA.html'
      });

      $meanStateProvider
      .state('sbDiy', {
        url: '/sbDiy',
        templateUrl: 'meanStarter/views/system/sbDiy.html'
      });

      $meanStateProvider
      .state('server_application', {
        url: '/server_application',
        templateUrl: 'meanStarter/views/system/server_application.html'
      });

      $meanStateProvider
      .state('Software', {
        url: '/Software',
        templateUrl: 'meanStarter/views/system/Software.html'
      });

      $meanStateProvider
      .state('softwareContact', {
        url: '/softwareContact',
        templateUrl: 'meanStarter/views/system/softwareContact.html'
      });

      $meanStateProvider
      .state('softwaredownload', {
        url: '/softwaredownload',
        templateUrl: 'meanStarter/views/system/softwaredownload.html'
      });

      $meanStateProvider
      .state('Support', {
        url: '/Support',
        templateUrl: 'meanStarter/views/system/Support.html'
      });

      $meanStateProvider
      .state('TermsAndConditions', {
        url: '/TermsAndConditions',
        templateUrl: 'meanStarter/views/system/TermsAndConditions.html'
      });

      $meanStateProvider
      .state('videotools', {
        url: '/videotools',
        templateUrl: 'meanStarter/views/system/videotools.html'
      });

      $meanStateProvider
      .state('WarrantyReqInfo', {
        url: '/WarrantyReqInfo',
        templateUrl: 'meanStarter/views/system/WarrantyReqInfo.html'
      });
      
      
  }
]).config(['$locationProvider',
  function ($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);