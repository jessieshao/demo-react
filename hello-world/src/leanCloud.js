import AV from 'leancloud-storage'
var APP_ID = 'QaVDQudQOp6Ydzv5tSJ25RlB-gzGzoHsz';
var APP_KEY = 'dL745liUQ2nrqO7sw0RnOfTi';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
export default AV

export function signUp(username,password,successFn,errorFn){
    var user = new AV.User()
    user.setUsername(username)
    user.setPassword(password)
    user.signUp().then(function(loginedUser){
        let user = getUserFromAVUser(loginedUser)
        successFn.call(null,user)
    },function(error){
        error.call(null,error)
    })
    return undefined
}
function getUserFromAVUser(AVUser){
    return{
        id: AVUser.id,
        ...AVUser.attributes
    }
}