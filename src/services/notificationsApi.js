import { fullPath } from "./baseUrl";

export default class NotificationsApi{

  updateAllNotifications(){
    return fetch(fullPath(`/notifications/update`), {'method': 'GET'}).then(res => res.json())
  }

  getList(){
    return fetch(fullPath(`/notifications`), {'method': 'GET'}).then(res => res.json())
  }

}