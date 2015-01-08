function UserFactory($http, AuthTokenFactory, $q) {

    
    function login(username, password) {
        return $http.post( _config['domain'] + 'login', {
            username: username,
            password: password
        }).then(function success(response) {
            AuthTokenFactory.setToken(response.data.token);
            return response;
        });
    }

    function logout() {
        AuthTokenFactory.setToken();
    }

    return {
        login: login,
        logout: logout
    };

}

angular
    .module('delivery')
    .factory('UserFactory', UserFactory);