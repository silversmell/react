import React from "react";
import Notification from "./Notification";

const reservedNotifications =[
    {
        message:"Hi, I want to Nocification your plan",
    },
    {
        message:"dinner time",
    },
    {
        message:"ASAP Metting",
    },
];
var timer;
class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { //notifications ÃÊ±âÈ­
            notifications: [],
        };
    }
    componentWillUnmount() {

if (timer) {

clearInterval(timer);

}

}


    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

    }
    render() {
        return (
            <div>
                {this.state.notifications.map((notification,index) => {
                    return <Notification key ={ index } message={notification.message} />;
                })}
            </div>
        );
    }

}
export default NotificationList;