import React from 'react';
import { Layout } from '../src/features/layout';

export default function Color() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col justify-center mb-28 fontys-light w-full max-w-screen-lg mx-auto">
					<h1 className="text-5xl tracking-widest mt-32 mb-24">COLOR</h1>
					<article className="flex flex-col text-lg space-y-32">
						<div className="flex flex-1 flex-col text-xl fontys-light tracking-widest">
							<p className="fontys-normal mb-16">
								Use of color is the same as with the logo guidelines.
								With the formal/fixed elements the only colors that are
								allowed are black and white.
							</p>

							<div className="flex mb-16">
								<div className="flex-1 flex flex-col items-center justify-center space-y-6">
									<img src="/images/Group 41306.png" alt="" />

									<h2 className="tracking-widest text-5xl">
										#000000
									</h2>
								</div>
								<div className="flex-1 flex flex-col items-center justify-center space-y-6">
									<img src="/images/Group 41307.png" alt="" />

									<h2 className="tracking-widest text-5xl">
										#FFFFFF
									</h2>
								</div>
							</div>

							<p className="fontys-normal mb-4">
								For the dynamic elements there are endless possibilities
								for color usage. The guideline for these type of outages
								are free as long as the only other dynamic parts are
								again the stripe and “lab” part as mentioned in the logo
								section. The explorations below are some of the
								possibilities.
								<br />
								Explorations
							</p>

							<div className="space-y-10">
								<div className="flex space-x-6">
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 104.png"
											alt=""
										/>
									</div>
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 102.png"
											alt=""
										/>
									</div>
								</div>

								<div className="flex space-x-6">
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 31.png"
											alt=""
										/>
									</div>
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 34.png"
											alt=""
										/>
									</div>
								</div>

								<div className="flex space-x-6">
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 32.png"
											alt=""
										/>
									</div>
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 37.png"
											alt=""
										/>
									</div>
								</div>

								<div className="flex space-x-6">
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 42.png"
											alt=""
										/>
									</div>
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 44.png"
											alt=""
										/>
									</div>
								</div>

								<div className="flex space-x-6">
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 95.png"
											alt=""
										/>
									</div>
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 94.png"
											alt=""
										/>
									</div>
								</div>

								<div className="flex space-x-6">
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 103.png"
											alt=""
										/>
									</div>
									<div className="flex-1">
										<img
											className="w-full"
											src="/images/Original – 65.png"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
