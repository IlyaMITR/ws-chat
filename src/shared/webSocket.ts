export const webSocket = new WebSocket("ws://localhost:9000");

webSocket.onopen = () => {
	console.log('подключился');
};

// обработчик сообщений от сервера
webSocket.onmessage = (message) => {
	console.log('Message: %s', message.data);
};
