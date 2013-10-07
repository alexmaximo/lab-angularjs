describe('Angular.js \'app\' Module', function() {

  var module;

  beforeEach(function() {
    module = angular.module('app');
  });

  it("should be registered", function() {
    expect(module).not.toEqual(null);
  });

  describe("Dependencies:", function() {

    var deps;

    var hasModule = function(m) {
      return deps.indexOf(m) >= 0;
    };

    beforeEach(function() {
      deps = module.value('appName').requires;
    });

    it('should have app.dep as a dependency', function() {
      expect(hasModule('app.dep')).toEqual(true);
    });

  });

});