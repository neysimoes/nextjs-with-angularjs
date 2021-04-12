(function() {
  angular
    .module('app', [])
    .controller('AppController', AppController)
    .factory('GithubService', GithubService);
    
  function GithubService($http) {
    var service = {
      query: function(url, config, params) {
        var req = {
          url: 'https://api.github.com' + url,
          method: 'GET'
        };
        if(params) {
          req.params = params;
        }
        angular.extend(req, config || {})

        return $http(req);
      }
    };

    return service;
  };
    
  function AppController(GithubService) {
    var vm = this;
    vm.order = order;
    vm.languages = [];
    vm.languageFilter = languageFilter;

    function init() {
      GithubService.query('/users/wilfernandesjr')
      .then(function(response) {
        vm.user = response.data;
        console.log(vm.user);
      });

      GithubService.query('/users/wilfernandesjr/starred')
      .then(function(response) {
        vm.starred = response.data;
        vm.languages = (vm.starred || [])
        .map(function(item, pos, self) {
          return item.language;
        })
        .filter(function(item, pos, self) {
          if(item && self.indexOf(item) == pos)
          return item
        });
        vm.languages.push('All');
      });
    }

    function order(by) {
      vm.starred = vm.starred.sort(function(a, b) {
        if (a[by] < b[by]) {
          return angular.isNumber(a[by]) ? 1 : -1;
        }
        if (a[by] > b[by]) {
          return angular.isNumber(a[by]) ? -1 : 1;;
        }
        return 0;
      })
    }

    function languageFilter(language) {
      vm.selectedLanguage = language;
    }

    init()
    return vm;
  }
})();