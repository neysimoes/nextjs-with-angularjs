export default `<div ng-app="app" ng-controller="AppController as vm">
  <div class="filters">
    <label class="filter">
      Order By:
      <select
        name="oder_by"
        id="oder_by"
        ng-model="vm.oderBy"
        ng-change="vm.order(vm.oderBy)">
        <option value="name">Name</option>
        <option value="forks_count">Forks Count</option>
        <option value="open_issues_count">Open Issues</option>
        <option value="stargazers_count">Stars</option>
        <option value="watchers_count">Watchers</option>

      </select>
    </label>
    <label class="filter">
      Filter By Language:
      <select
        name="filter_by"
        id="filter_by"
        ng-model="vm.filterByLanguage"
        ng-change="vm.languageFilter(vm.filterByLanguage)">
        <option ng-repeat="language in vm.languages" ng-value="language">{{language}}</option>

      </select>
    </label>
  </div>
  <div class="card"
    ng-repeat="starred in vm.starred"
    ng-if="!vm.selectedLanguage || vm.selectedLanguage == 'All' || vm.selectedLanguage == starred.language">
    <div class="card-header">
      {{starred.name}}
    </div>
    <div class="card-body clearfix">
      <img class="card-img clearfix" ng-src="{{starred.owner.avatar_url}}" alt="">
      <span ng-if="starred.description" class="card-description">
        {{starred.description}}
      </span>
      <span ng-if="starred.language" class="label label-blue">
        {{starred.language}}
      </span>
      <ul class="card-list">
        <li><strong>Forks:</strong> {{starred.forks_count}}</li>
        <li><strong>Issues:</strong> {{starred.open_issues_count}}</li>
        <li><strong>Stars:</strong> {{starred.stargazers_count}}</li>
        <li><strong>watchers:</strong> {{starred.watchers_count}}</li>
        <li><strong>Created at:</strong> {{ starred.created_at |  date: 'dd/MM/yy HH:mm' }}</li>
        <li><strong>Pushed at:</strong> {{ starred.pushed_at |  date: 'dd/MM/yy HH:mm' }}</li>
      </ul>
    </div>

  </div>
</div>`