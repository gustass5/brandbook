interface FourDotsnterface {
	style?: string;
}

export const FourDots: React.FC<FourDotsnterface> = ({ style = '' }) => (
	<svg
		className={style}
		version="1.2"
		baseProfile="tiny-ps"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 59"
		width="10"
		height="59"
	>
		<g id="fourDots">
			<g id="Group 41">
				<path
					id="Ellipse 223"
					className="fill-current"
					d="M5.45 43C3.06 43 1.13 41.07 1.13 38.68C1.13 36.29 3.06 34.36 5.45 34.36C7.84 34.36 9.77 36.29 9.77 38.68C9.77 41.07 7.84 43 5.45 43Z"
				/>
				<path
					id="Ellipse 229"
					className="fill-current"
					d="M7.75 56.03C7.43 57.47 6 58.38 4.55 58.06C3.11 57.74 2.2 56.32 2.52 54.87C2.84 53.42 4.27 52.51 5.71 52.83C7.16 53.15 8.07 54.58 7.75 56.03Z"
				/>
				<path
					id="Ellipse 236"
					className="fill-current"
					d="M5.2 26.96C2.59 26.96 0.48 24.85 0.48 22.24C0.48 19.63 2.59 17.51 5.2 17.51C7.82 17.51 9.93 19.63 9.93 22.24C9.93 24.85 7.82 26.96 5.2 26.96Z"
				/>
				<path
					id="Ellipse 237"
					className="fill-current"
					d="M5.27 9.54C2.66 9.54 0.55 7.43 0.55 4.82C0.55 2.21 2.66 0.1 5.27 0.1C7.89 0.1 10 2.21 10 4.82C10 7.43 7.89 9.54 5.27 9.54Z"
				/>
			</g>
		</g>
	</svg>
);
