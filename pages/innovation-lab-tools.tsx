import { Layout } from '../src/features/layout';

export default function InnovationLabTools() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col fontys-light items-center w-3/4 mx-auto">
					<h1 className="text-6xl my-32">INNOVATION LAB TOOLS</h1>
					<article className="flex flex-col text-lg space-y-6">
						<h2 className="text-xl">
							Here are all the for download available tools that we made
							for the Innovation lab.
						</h2>

						<div className="flex flex-col w-full space-y-4">
							<div className="flex items-center">
								<span className="w-40">Countdown app</span>
								<span className="bg-black text-white rounded-full py-3 px-6">
									Download
								</span>
							</div>

							<div className="flex items-center">
								<span className="w-40">Audio visualizer</span>
								<span className="bg-black text-white rounded-full py-3 px-6">
									Download
								</span>
							</div>

							<div className="flex items-center ">
								<span className="w-40">Instagram layer</span>
								<span className="bg-black text-white rounded-full py-3 px-6">
									Download
								</span>
							</div>

							<div className="flex items-center">
								<span className="w-40">Template pack</span>
								<span className="bg-black text-white rounded-full py-3 px-6">
									Download
								</span>
							</div>

							<div className="flex items-center ">
								<span className="w-40">Animation pack</span>
								<span className="bg-black text-white rounded-full py-3 px-6">
									Download
								</span>
							</div>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
