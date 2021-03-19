import { fullPath } from "./baseUrl";
import $ from 'jquery'

export default class UserApi {

  deleteSession(){
    return fetch(fullPath("/users/sign_out"),{
      "method": "DELETE",
      })
      .catch(err => {
        console.log(err);
    });
  }

  editProfile(data){
    return $.ajax({
      method: "PATCH",
      url: fullPath("/api/user"),
      data: data,
      dataType: 'json',
      cache: false,
      processData: false,
      contentType: false
    })
  }

  profileInfo(){
    return fetch(fullPath("/api/user"))
    .then(res => res.json())
  }

  userProfileInfo(email){
    return fetch(fullPath(`/api/user_profile?email=${email}`))
    .then(res => res.json())
  }
}