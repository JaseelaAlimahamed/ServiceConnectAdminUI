import NotificationTable from "../../../components/adminComponents/notificationsComponents/NotificationTable"
import NotificationForm from "../../../components/adminComponents/notificationsComponents/NotificationCreateForm"

const NotificationPage =()=>{
    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="col-4 ml-12 me-24">
            <NotificationTable/>
            </div>
            <div className="col-4 ml-12 me-24 mt-12">
            <NotificationForm/>
            </div>
            
           
        </div>
    )
}


export default NotificationPage