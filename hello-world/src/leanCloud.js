import AV from 'leancloud-storage'
var APP_ID = 'QaVDQudQOp6Ydzv5tSJ25RlB-gzGzoHsz';
var APP_KEY = 'dL745liUQ2nrqO7sw0RnOfTi';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
export default AV

export function signUp(email,username,password,successFn,errorFn){
    var user = new AV.User()
    user.setEmail(email)
    user.setUsername(username)
    user.setPassword(password)
    user.signUp().then(function(loginedUser){
        let user = getUserFromAVUser(loginedUser)
        successFn.call(null,user)
    },function(error){
        errorFn.call(null,error)
    })
    return undefined
}
export function signIn(username, password, successFn, errorFn){
    AV.User.logIn(username, password).then(function (loginedUser) {
      let user = getUserFromAVUser(loginedUser)
      successFn.call(null, user)
    }, function (error) {
      errorFn.call(null, error)
    })
  }
export function getCurrentUser(){
    let user = AV.User.current()
    if(user){
      return getUserFromAVUser(user)
    }else{
      return null
    }
  }
  export function signOut(){
    AV.User.logOut()
    return undefined
  } 
  export function sendPasswordResetEmail(email, successFn, errorFn){
    AV.User.requestPasswordReset(email).then(function (success) {
      successFn.call() 
    }, function (error) {
        errorFn.call(null, error)
    })
  }
 
 
 
function getUserFromAVUser(AVUser){
    return{
        id: AVUser.id,
        ...AVUser.attributes
    }
}