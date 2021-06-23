import Head from 'next/head';
import Link from 'next/link';
import { ChatBubble } from '../components/ChatBubble';

export const Layout: React.FC<{ showCorner?: boolean }> = ({
	showCorner = true,
	children
}) => {
	return (
		<div className="home">
			<Head>
				<title>Brandbook</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex">
				<div className="h-screen w-[300px]">
					<div className="fixed left-0 inset-y-0 p-6 w-[300px] h-screen space-y-6 bg-black text-white">
						<div className="square relative">
							<div className="flex items-center absolute inset-0">
								<Link href="/" passHref>
									<a>
										<img
											src="/images/logo-new.png"
											alt=""
											className="w-full"
										/>
									</a>
								</Link>
							</div>
						</div>

						<nav>
							<ul className="space-y-4">
								<LinkItem href="/about">About</LinkItem>
								<LinkItem href="/logo">Logo</LinkItem>
								<LinkItem href="/typography">Typography</LinkItem>
								<LinkItem href="/color">Color</LinkItem>
								<LinkItem href="/branding">Branding</LinkItem>
								<LinkItem href="/dynamic-web-elements">
									Dynamic web elements
								</LinkItem>
								<LinkItem href="/social-media-elements">
									Social media elements
								</LinkItem>
								<LinkItem href="/innovation-lab-tools">
									Innovation Lab tools
								</LinkItem>
								<LinkItem href="/scanner">Scanner</LinkItem>
							</ul>
						</nav>
						<div className="absolute inset-x-0 flex justify-center bottom-10">
							<Link href="/contact" passHref>
								<a>
									<ChatBubble style="text-white" />
								</a>
							</Link>
						</div>
					</div>
				</div>

				<div className="w-full">{children}</div>

				{showCorner && (
					<div className="fixed bottom-0 right-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-72 -mb-24 -mr-16"
							viewBox="0 0 164.51 153.87"
						>
							<defs>
								<style>
									{
										'.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}'
									}
								</style>
								<clipPath
									id="clip-path"
									transform="translate(-276.04 -307.06)"
								>
									<rect className="cls-1" width="405" height="405" />
								</clipPath>
							</defs>
							<g id="Laag_2" data-name="Laag 2">
								<g id="Laag_1-2" data-name="Laag 1">
									<g className="cls-2">
										<circle cx="78.4" cy="33.61" r="0.48" />
										<circle cx="86.57" cy="41.4" r="1.24" />
										<circle
											cx="379.08"
											cy="364.38"
											r="5.52"
											transform="translate(-422.76 59.61) rotate(-44.12)"
										/>
										<circle
											cx="387.46"
											cy="372.2"
											r="6.36"
											transform="translate(-407.24 -75.01) rotate(-28.73)"
										/>
										<circle
											cx="395.87"
											cy="381.52"
											r="6.36"
											transform="translate(-410.69 -69.81) rotate(-28.73)"
										/>
										<circle
											cx="404.91"
											cy="390.2"
											r="6.36"
											transform="translate(-413.75 -64.4) rotate(-28.73)"
										/>
										<circle cx="94.58" cy="49.21" r="3.33" />
										<circle cx="70.56" cy="1.69" r="0.48" />
										<circle cx="78.57" cy="9.64" r="1.24" />
										<circle
											cx="370.76"
											cy="332.95"
											r="5.52"
											transform="translate(-403.51 34.85) rotate(-42.96)"
										/>
										<circle
											cx="378.97"
											cy="340.93"
											r="6.36"
											transform="translate(-390.8 -92.96) rotate(-27.57)"
										/>
										<circle
											cx="387.19"
											cy="350.43"
											r="6.36"
											transform="translate(-394.25 -88.08) rotate(-27.57)"
										/>
										<circle
											cx="396.05"
											cy="359.29"
											r="6.36"
											transform="translate(-397.35 -82.97) rotate(-27.57)"
										/>
										<circle
											cx="405.55"
											cy="367.51"
											r="6.36"
											transform="translate(-400.08 -77.64) rotate(-27.57)"
										/>
										<circle cx="86.42" cy="17.61" r="3.33" />
										<circle cx="53.47" cy="29.09" r="0.48" />
										<circle cx="61.47" cy="37.05" r="1.24" />
										<circle
											cx="353.66"
											cy="360.36"
											r="5.52"
											transform="translate(-426.77 30.55) rotate(-42.96)"
										/>
										<circle
											cx="361.87"
											cy="368.34"
											r="6.36"
											transform="translate(-405.42 -97.76) rotate(-27.57)"
										/>
										<circle
											cx="370.1"
											cy="377.83"
											r="6.36"
											transform="translate(-408.88 -92.88) rotate(-27.57)"
										/>
										<circle
											cx="378.96"
											cy="386.69"
											r="6.36"
											transform="translate(-411.97 -87.77) rotate(-27.57)"
										/>
										<circle
											cx="388.45"
											cy="394.92"
											r="6.36"
											transform="translate(-414.7 -82.44) rotate(-27.57)"
										/>
										<circle
											cx="398.58"
											cy="402.51"
											r="6.36"
											transform="translate(-417.07 -76.89) rotate(-27.57)"
										/>
										<circle cx="69.33" cy="45.02" r="3.33" />
										<circle cx="57.44" cy="55.84" r="0.48" />
										<circle cx="65.44" cy="63.8" r="1.24" />
										<circle
											cx="357.63"
											cy="387.11"
											r="5.52"
											transform="translate(-443.94 40.43) rotate(-42.96)"
										/>
										<circle
											cx="365.84"
											cy="395.09"
											r="6.36"
											transform="translate(-417.35 -92.89) rotate(-27.57)"
										/>
										<circle
											cx="374.07"
											cy="404.58"
											r="6.36"
											transform="translate(-420.81 -88) rotate(-27.57)"
										/>
										<circle
											cx="382.93"
											cy="413.44"
											r="6.36"
											transform="translate(-423.9 -82.9) rotate(-27.57)"
										/>
										<circle
											cx="392.42"
											cy="421.67"
											r="6.36"
											transform="translate(-426.63 -77.57) rotate(-27.57)"
										/>
										<circle cx="73.3" cy="71.77" r="3.33" />
										<circle cx="22.33" cy="44.78" r="0.48" />
										<circle cx="30.33" cy="52.73" r="1.24" />
										<circle
											cx="322.52"
											cy="376.05"
											r="5.52"
											transform="translate(-445.81 13.54) rotate(-42.96)"
										/>
										<circle
											cx="330.73"
											cy="384.03"
											r="6.36"
											transform="translate(-416.22 -110.39) rotate(-27.57)"
										/>
										<circle
											cx="338.96"
											cy="393.52"
											r="6.36"
											transform="translate(-419.68 -105.51) rotate(-27.57)"
										/>
										<circle
											cx="347.82"
											cy="402.38"
											r="6.36"
											transform="translate(-422.77 -100.4) rotate(-27.57)"
										/>
										<circle
											cx="357.31"
											cy="410.61"
											r="6.36"
											transform="translate(-425.5 -95.07) rotate(-27.57)"
										/>
										<circle cx="38.19" cy="60.71" r="3.33" />
										<circle cx="24.53" cy="71.03" r="0.48" />
										<circle cx="32.54" cy="78.98" r="1.24" />
										<circle
											cx="324.72"
											cy="402.3"
											r="5.52"
											transform="translate(-463.11 22.08) rotate(-42.96)"
										/>
										<circle
											cx="332.94"
											cy="410.28"
											r="6.36"
											transform="translate(-428.11 -106.39) rotate(-27.57)"
										/>
										<circle
											cx="341.16"
											cy="419.77"
											r="6.36"
											transform="translate(-431.57 -101.51) rotate(-27.57)"
										/>
										<circle
											cx="350.02"
											cy="428.63"
											r="6.36"
											transform="translate(-434.67 -96.4) rotate(-27.57)"
										/>
										<circle
											cx="359.52"
											cy="436.86"
											r="6.36"
											transform="translate(-437.4 -91.07) rotate(-27.57)"
										/>
										<circle cx="40.39" cy="86.96" r="3.33" />
										<circle cx="1.75" cy="67.23" r="0.48" />
										<circle cx="9.75" cy="75.19" r="1.24" />
										<circle
											cx="301.94"
											cy="398.5"
											r="5.52"
											transform="translate(-466.63 5.54) rotate(-42.96)"
										/>
										<circle
											cx="310.16"
											cy="406.48"
											r="6.36"
											transform="translate(-428.94 -117.37) rotate(-27.57)"
										/>
										<circle
											cx="318.38"
											cy="415.97"
											r="6.36"
											transform="translate(-432.4 -112.48) rotate(-27.57)"
										/>
										<circle
											cx="327.24"
											cy="424.83"
											r="6.36"
											transform="translate(-435.5 -107.37) rotate(-27.57)"
										/>
										<circle
											cx="336.73"
											cy="433.06"
											r="6.36"
											transform="translate(-438.23 -102.05) rotate(-27.57)"
										/>
										<circle cx="17.61" cy="83.16" r="3.33" />
										<circle cx="0.48" cy="88.75" r="0.48" />
										<circle cx="8.49" cy="96.7" r="1.24" />
										<circle
											cx="300.68"
											cy="420.01"
											r="5.52"
											transform="translate(-481.63 10.44) rotate(-42.96)"
										/>
										<circle
											cx="308.89"
											cy="428"
											r="6.36"
											transform="translate(-439.05 -115.51) rotate(-27.57)"
										/>
										<circle
											cx="317.12"
											cy="437.49"
											r="6.36"
											transform="translate(-442.5 -110.62) rotate(-27.57)"
										/>
										<circle
											cx="325.98"
											cy="446.35"
											r="6.36"
											transform="translate(-445.6 -105.52) rotate(-27.57)"
										/>
										<circle
											cx="335.47"
											cy="454.57"
											r="6.36"
											transform="translate(-448.33 -100.19) rotate(-27.57)"
										/>
										<circle cx="16.34" cy="104.68" r="3.33" />
										<circle cx="108.69" cy="23.57" r="0.48" />
										<circle cx="116.7" cy="31.52" r="1.24" />
										<circle
											cx="408.89"
											cy="354.83"
											r="5.52"
											transform="translate(-408.2 66.71) rotate(-42.96)"
										/>
										<circle
											cx="417.1"
											cy="362.82"
											r="6.36"
											transform="translate(-396.59 -72.83) rotate(-27.57)"
										/>
										<circle
											cx="425.33"
											cy="372.31"
											r="6.36"
											transform="translate(-400.05 -67.94) rotate(-27.57)"
										/>
										<circle
											cx="434.19"
											cy="381.17"
											r="6.36"
											transform="translate(-403.15 -62.84) rotate(-27.57)"
										/>
										<circle cx="124.55" cy="39.5" r="3.33" />
										<circle cx="105.86" cy="0.48" r="0.48" />
										<circle cx="113.86" cy="8.44" r="1.24" />
										<circle
											cx="406.05"
											cy="331.75"
											r="5.52"
											transform="translate(-393.23 58.58) rotate(-42.96)"
										/>
										<circle
											cx="414.27"
											cy="339.73"
											r="6.36"
											transform="translate(-386.23 -76.76) rotate(-27.57)"
										/>
										<circle
											cx="422.49"
											cy="349.22"
											r="6.36"
											transform="translate(-389.69 -71.88) rotate(-27.57)"
										/>
										<circle
											cx="431.35"
											cy="358.08"
											r="6.36"
											transform="translate(-392.78 -66.77) rotate(-27.57)"
										/>
										<circle cx="121.72" cy="16.41" r="3.33" />
									</g>
								</g>
							</g>
						</svg>
					</div>
				)}
			</div>
		</div>
	);
};

interface LinkItemInterface {
	href: string;
}

const LinkItem: React.FC<LinkItemInterface> = ({ href, children }) => (
	<li>
		<Link href={href} passHref>
			<a className="transition duration-150 hover:opacity-60">{children}</a>
		</Link>
	</li>
);
