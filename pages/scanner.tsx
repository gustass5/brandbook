import React from 'react';
import { Layout } from '../src/features/layout';

export default function Scanner() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col justify-center mb-28 fontys-light w-full max-w-screen-lg mx-auto">
					<h1 className="text-5xl tracking-widest mt-32 mb-24">SCANNER</h1>
					<article className="flex flex-col text-lg space-y-32">
						<div className="flex flex-1 flex-col text-xl fontys-light tracking-widest">
							<p className="fontys-normal mb-10">
								To expand the brand awareness of Fontys ICT Innovation
								Lab outside Strijp TQ, there is been looked at the
								dynamic possibilities with the logo for Social Media.
								Taking the in advance decided dynamic elements of the
								logo into account, there is been made a static but
								dynamic design for the Instagram of InnovationLab. The
								on research based designs have been put together which
								gives an example of how the Social Media of Fontys ICT
								InnovationLab could look like.
							</p>

							<div className="">
								<iframe
									className="w-full"
									height="700"
									src="https://www.youtube.com/embed/1ujiyOzYFM8"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
