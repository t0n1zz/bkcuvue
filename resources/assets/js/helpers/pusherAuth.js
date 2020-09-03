import Echo from 'laravel-echo';
import Pusher from "pusher-js";

export function PusherAuth() {
    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: 'a34885976ae0803ba2a7',
        cluster: 'ap1',
        encrypted: true,
        auth: {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            },
        },

    });
}