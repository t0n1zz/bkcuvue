<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class VotingEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $skor;
    public $skor_tanggapan;
    public $voting_id;
    public $voting_pilihan_id;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($skor, $skor_tanggapan, $voting_id, $voting_pilihan_id)
    {
        $this->skor = $skor;
        $this->skor_tanggapan = $skor_tanggapan;
        $this->voting_id = $voting_id;
        $this->voting_pilihan_id = $voting_pilihan_id;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('voting.channel.' .$this->voting_id);
    }
}
