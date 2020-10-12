<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

use App\AssesmentAccess;

class AssesmentEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $datas;
    public $id;
    public $tipe;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($datas, $id, $tipe)
    {
        $this->datas = $datas;
        $this->id = $id;
        $this->tipe = $tipe;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('assesment.channel.' .$this->id);
    }
}
