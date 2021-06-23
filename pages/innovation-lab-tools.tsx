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
									className="transition duration-150 hover:opacity-80 bg-black text-white rounded-full py-3 px-6"
								>
									Download
								</button>
							</div>

							<div className="flex items-center">
								<span className="w-40">Audio visualizer</span>
								<button
									type="button"
									className="transition duration-150 hover:opacity-80 bg-black text-white rounded-full py-3 px-6"
								>
									Download
								</button>
							</div>

							<div className="flex items-center ">
								<span className="w-40">Instagram layer</span>
								<button
									type="button"
									className="transition duration-150 hover:opacity-80 bg-black text-white rounded-full py-3 px-6"
								>
									Download
								</button>
							</div>

							<div className="flex items-center">
								<span className="w-40">Template pack</span>
								<button
									type="button"
									className="transition duration-150 hover:opacity-80 bg-black text-white rounded-full py-3 px-6"
								>
									Download
								</button>
							</div>

							<div className="flex items-center ">
								<span className="w-40">Animation pack</span>
								<button
									type="button"
									className="transition duration-150 hover:opacity-80 bg-black text-white rounded-full py-3 px-6"
								>
									Download
								</button>
							</div>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
