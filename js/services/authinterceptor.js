function AuthInterceptor(AuthTokenFactory, $q, $location) {

  function addToken(config) {
    var token = AuthTokenFactory.getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  }

  return {
    request: addToken
  };
}

angular
  .module('delivery')
  .factory('AuthInterceptor', AuthInterceptor);