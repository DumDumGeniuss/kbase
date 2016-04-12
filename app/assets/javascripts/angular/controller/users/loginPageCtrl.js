KBase.controller('loginPageCtrl', ['$scope','$http','Auth',function($scope,$http,Auth){
  

  //initial
  $scope.loginOrNot = false;
  Auth.currentUser().
    then(function(user){
      $scope.loginOrNot = true;
      $scope.userData = user;
      $scope.userName = user.user_name;
      $scope.robotName = user.robot_name;
      console.log("User ID: " + $scope.userData.id);
    }).then(function(error){
      console.log("Something's error when login");
    });
  if($scope.loginOrNot!==null){
    $scope.showLoginBtn = true;
  }else{
    $scope.showLoginBtn = false;
  }
  console.log("Login or not:" + $scope.showLoginBtn);

  
  //Sign Out
  $scope.signOut = function(){
    var config = {
        headers: {
            'X-HTTP-Method-Override': 'DELETE'
        }
    };
    Auth.logout(config).then(function(oldUser) {
      console.log(oldUser.id + "you're signed out now.");
      $scope.loginOrNot = false;
    })
    .then(function(error) {
      console.log("An error occurred logging out.");
    });
  };

  //Get Info
  $scope.getInfo = function(){
    url = "/user_admins/" + $scope.userData.id;
    $http.get(url).success( function(data){
      console.log("User Info: " + data);
      $scope.userInfo = data;
    });
  };

  //Updatte User Name
  $scope.updateUserInfo = function(){
    params={
      user:{
        user_name:$scope.userName,
        robot_name:$scope.robotName
      } ,
      id:$scope.userData.id
    };
    $http({
      method:"POST",
      url:"/user_admins",
      data: params
    }).success(function(data){
      $scope.userName = data.user_name;
      $scope.userData.user_name = data.user_name;
      $scope.robotName = data.robot_name;
      $scope.userData.robot_name = data.robot_name;
    });
  };


}]);
