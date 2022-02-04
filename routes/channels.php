<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.User.{id}', function ($user, $id) {
    // return (int) $user->id === (int) $id;
});

Broadcast::channel('assesment.channel.{id}', function () {
    return true;
});

Broadcast::channel('pemilihan.channel.{id}', function () {
    return true;
});

Broadcast::channel('voting.channel.{id}', function () {
    return true;
});
