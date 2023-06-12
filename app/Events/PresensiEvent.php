<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class PresensiEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $id_cu,$id_user,$kode;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($kode,$id_user,$id_cu)
    {
        $this->id_cu = $id_cu;
        $this->id_user = $id_user;
        $this->kode = $kode;
    }

    public function broadcastWith () {
        return [
            'id_cu'       => $this->id_cu,
            'id_user'     => $this->id_user,
            'kode'        => $this->kode
        ];
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('presensi.channel.'.$this->id_user);
    }

    
}
