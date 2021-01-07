<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class PemilihanCalonEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $skor;
    public $pemilihan_calon_id;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($skor, $pemilihan_calon_id)
    {
        $this->skor = $skor;
        $this->pemilihan_calon_id = $pemilihan_calon_id;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('pemilihanCalon.channel.' .$this->pemilihan_calon_id);
    }
}
