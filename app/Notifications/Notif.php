<?php

namespace App\Notifications;

use Auth;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class Notif extends Notification
{
    use Queueable;

    private $user_id;
    private $tipe;
    private $url;
    private $message;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($tipe, $url, $message)
    {   
        $this->user_id = Auth::id();
        $this->tipe = $tipe;
        $this->url = $url;
        $this->message = $message;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
		}
		
    public function toDatabase($notifiable)
    {
        return [
            'user_id' => $this->user_id,
            'tipe' => $this->tipe,
            'url' => $this->url,
            'message' => $this->message
        ];
    }
}
