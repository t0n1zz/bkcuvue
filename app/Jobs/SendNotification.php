<?php

namespace App\Jobs;

use App\Support\NotificationHelper;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendNotification implements ShouldQueue
{
    private $id_user,$tipe,$message;
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($id_user,$tipe,$message)
    {
        $this->id_user = $id_user;
        $this->tipe = $tipe;
        $this->message = $message;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        NotificationHelper::upload_notification($this->id_user,$this->tipe,$this->message);
    }
}
