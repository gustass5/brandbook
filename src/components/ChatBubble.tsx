interface ChatBubbleInterface {
	style?: string;
}

export const ChatBubble: React.FC<ChatBubbleInterface> = ({ style = '' }) => (
	<svg
		className={style}
		version="1.2"
		baseProfile="tiny-ps"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 27 27"
		width="27"
		height="27"
	>
		<g id="chatBubble">
			<path
				id="ic_chat_bubble_24px"
				className="fill-current"
				d="M25 7L9 7C7.9 7 7 7.9 7 9L7 27L11 23L25 23C26.1 23 27 22.1 27 21L27 9C27 7.9 26.1 7 25 7Z"
			/>
			<path
				id="ic_chat_bubble_24px"
				className="fill-current"
				d="M15.5 2L3.5 2C2.67 2 2 2.67 2 3.5L2 17L5 14L15.5 14C16.32 14 17 13.32 17 12.5L17 3.5C17 2.67 16.32 2 15.5 2Z"
			/>
		</g>
	</svg>
);
