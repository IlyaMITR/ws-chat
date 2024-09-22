import { useEffect, useState } from "react"
import { webSocket } from "../shared/webSocket";

const MainPage = () => {
	const [messages, setMessages] = useState<any[]>([]);
	const [text, setText] = useState('');

	useEffect(() => {
		webSocket.onmessage = msg => {
			console.log(msg)
			setMessages(prev => [...prev, msg.data]);
		}
	}, []);

	const onSend = () => {
		webSocket.send(text);
		setText('');
	};

	return (
		<div>
			{messages.map((msg, index) => <div key={index}>{msg}</div>)}
			<input type="text" value={text} onChange={e => setText(e.target.value)}/>
			<button onClick={onSend}>Send</button>
		</div>
	)
}

export default MainPage