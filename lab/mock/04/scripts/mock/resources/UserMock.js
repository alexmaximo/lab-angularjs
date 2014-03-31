var UserMock = (function() {

  // Some statefullness
  var users = {
    0: {userName: 'mock backend user', userId: 0}
  };
  var userId = 1;

  //---

  var angular, httpBackend, regexpUrl;

  //---

  function Config( _angular_, _httpBackend_, _regexpUrl_ ) {
    angular = _angular_;
    httpBackend = _httpBackend_;
    regexpUrl = _regexpUrl_;

    routes();
  }

  //---

  function routes() {

    httpBackend.when('GET', '/users')
      .respond(function(method, url, data) {
        return [200, angular.copy(users)];
      });

    //--

    httpBackend.when('GET', regexpUrl(/users\/(\d+)/))
      .respond(function(method, url, data) {
        data = angular.fromJson(data);
        return [200, angular.copy(users[data.userId])];
      });

    //---

    httpBackend.when('POST', '/users')
      .respond(function(method, url, data) {
        data = angular.fromJson(data);

        var newUser = {userName: data.userName, userId: userId};

        users[userId] = newUser;
        userId++;

        return [200, angular.copy(newUser)];
      });

  }

  return {
    config: Config
  };

})();
