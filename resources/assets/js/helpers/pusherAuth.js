import Echo from 'laravel-echo';

export function PusherAuth() {
    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: '78628710210a2fcca97b',
        cluster: 'ap1',
        encrypted: true,
        auth: {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            },
        },
    });
}