import Head from 'next/head';
import Link from 'next/link';
import { FourDots } from '../components/FourDots';
import { ChatBubble } from '../components/ChatBubble';
import { Logo } from './logo';

export const Layout: React.FC = ({ children }) => {
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
										<Logo className="w-full" />
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
							</ul>
						</nav>
						<div className="absolute inset-x-0 flex justify-center bottom-10">
							<ChatBubble style="text-white" />
						</div>
					</div>
				</div>

				<div className="w-full">{children}</div>
				<FourDots style="fixed bottom-8 right-8" />
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
