import React, { useEffect, useState} from 'react'
import NotificationsApi from '../services/notificationsApi';

export default function MyNotifications() {
  const[notifications, setNotifications] = useState([])
  useEffect(() => {
    loadNotifications()
  }, [])
  return (
  
    <div>{renderList()}</div>                
 
  )
  function loadNotifications(){
    new NotificationsApi().getList().then(
      (result) => {
        setNotifications(result.notifications)          
      })
  }
  
  function renderList(){
    return(
      notifications.map(notification => {
        return (
          <div key={notification.id} className={notification.status == 'new' ? 'notification new_notification' : 'notification viewd_notification' }>{notification.body}</div>
        )
      })
    )
  }
}