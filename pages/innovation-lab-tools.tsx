import { Layout } from '../src/features/layout';

export default function InnovationLabTools() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col fontys-light items-center w-full max-w-screen-lg mx-auto">
					<h1 className="text-5xl tracking-widest mt-32 mb-24 w-full">
						INNOVATION LAB TOOLS
					</h1>
					<article className="flex flex-col text-lg space-y-6 w-full">
						<h2 className="text-xl">
							Here are all the for download available tools that we made
							for the Innovation lab.
						</h2>

						<div className="flex flex-col w-full space-y-4">
							<div className="flex items-center">
								<span className="w-40">Countdown app</span>
								<button
									type="button"
									className="transition duration-150 hover:opacity-80 bg-black text-white border-black rounded-lg py-3 px-6"
									style={{ borderWidth: '2px' }}
								>
									Download
								</button>
								<div className="w-6"></div>
								<a
									href="https://dep-di.netlify.app/v4/"
									target="_blank"
									className="transition duration-150 hover:bg-black hover:text-white bg-white text-black border-black rounded-lg focus:outline-none py-3 px-12"
									style={{ borderWidth: '2px' }}
								>
									Show
								</a>
							</div>

							<div className="flex items-center">
								<span className="w-40">Audio visualizer</span>
								<button
									type="button"
									className="transition duration-150 hover:opacity-80 bg-black text-white border-black rounded-lg py-3 px-6"
									style={{ borderWidth: '2px' }}
								>
									Download
								</button>
								<div className="w-6"></div>
								<a
									href="https://dynamic-identity-audio.netlify.app/"
									target="_blank"
									className="transition duration-150 hover:bg-black hover:text-white bg-white text-black border-black rounded-lg focus:outline-none py-3 px-12"
									style={{ borderWidth: '2px' }}
								>
									Show
								</a>
							</div>

							<div className="flex items-center ">
								<span className="w-40">Calendar</span>
								<button
									type="button"
									className="transition duration-150 hover:opacity-80 bg-black text-white border-black rounded-lg py-3 px-6"
									style={{ borderWidth: '2px' }}
								>
									Download
								</button>
								<div className="w-6"></div>
								<a
									href="https://www.youtube.com/watch?v=QUIpb8k8ty4&ab_channel=JVK"
									target="_blank"
									className="transition duration-150 hover:bg-black hover:text-white bg-white text-black border-black rounded-lg focus:outline-none py-3 px-12"
									style={{ borderWidth: '2px' }}
								>
									Show
								</a>
							</div>

							<div className="flex items-center ">
								<span className="w-40">Instagram filter</span>
								<button
									type="button"
									className="transition duration-150 hover:opacity-80 bg-black text-white border-black rounded-lg py-3 px-6"
									style={{ borderWidth: '2px' }}
								>
									Download
								</button>
								<div className="w-6"></div>
								<a
									href="https://dynamic-identity-audio.netlify.app/"
									target="_blank"
									className="transition duration-150 hover:bg-black hover:text-white bg-white text-black border-black rounded-lg focus:outline-none py-3 px-12"
									style={{ borderWidth: '2px' }}
								>
									Show
								</a>
							</div>

							<div className="flex items-center ">
								<span className="w-40">Transition packs</span>
								<button
									type="button"
									className="transition duration-150 hover:opacity-80 bg-black text-white border-black rounded-lg py-3 px-6"
									style={{ borderWidth: '2px' }}
								>
									Download
								</button>
								<div className="w-6"></div>
								<a
									href="/Sprint 3 demo video v2.mp4"
									target="_blank"
									className="transition duration-150 hover:bg-black hover:text-white bg-white text-black border-black rounded-lg focus:outline-none py-3 px-12"
									style={{ borderWidth: '2px' }}
								>
									Show
								</a>
							</div>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
