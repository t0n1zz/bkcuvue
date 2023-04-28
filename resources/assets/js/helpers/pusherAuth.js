import Echo from "laravel-echo";

export function PusherAuth() {
  window.Echo = new Echo({
    broadcaster: "pusher",
    key: "234af075126a679e4900",
    cluster: "ap1",
    encrypted: true,
    auth: {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    },
  });
}
