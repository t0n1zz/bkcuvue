import Echo from 'laravel-echo';

export function PusherAuth() {
    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: 'ed245ede9de31499ae1b',
        cluster: 'ap1',
        encrypted: true,
        auth: {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            },
        },
    });
}