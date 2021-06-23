import { Layout } from '../src/features/layout';

export default function SocialMediaElements() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col fontys-light items-center w-full max-w-screen-lg mx-auto">
					<h1 className="text-5xl tracking-widest mt-32 mb-24 w-full">
						SOCIAL MEDIA ELEMENTS
					</h1>
					<article className="flex flex-col text-lg space-y-12">
						<p>
							To expand the brand awareness of Fontys ICT InnovationLab
							outside Strijp TQ, there is been looked at the dynamic
							possibilities with the logo for Social Media. Taking the in
							advance decided dynamic elements of the logo into account,
							there is been made a static but dynamic design for the
							Instagram of InnovationLab. The on research based designs
							have been put together which gives an example of how the
							Social Media of Fontys ICT InnovationLab could look like.
						</p>
						<div>
							<h1 className="text-3xl mb-6">Dynamic tabs</h1>
							<p>
								According to research, a Social media page should
								reflect the brand and have a recognizable style. This
								way it will strengthen te engagement with visitors and
								improves brand awareness. To combine the logo/brand and
								the dynamic wish with static photos, the dynamic tab
								concept has been made.
							</p>
						</div>

						<div>
							<h3 className="text-xl mb-6">Final</h3>
							<div className="flex mb-8">
								<img
									className="w-64 h-64"
									src="/images/Middel 21.png"
									alt=""
								/>
								<img
									className="ml-16 h-64"
									src="/images/insta-tabs-mock.png"
									alt=""
								/>
							</div>

							<h3 className="text-xl mb-6">Explorations</h3>
							<div className="flex">
								<img
									className="w-48 h-48"
									src="/images/Middel -1.png"
									alt=""
								/>
								<img
									className="w-48 h-48 mx-6"
									src="/images/Middel 20.png"
									alt=""
								/>
								<img
									className="w-48 h-48"
									src="/images/Middel 22.png"
									alt=""
								/>
							</div>
						</div>

						<div>
							<h1 className="text-3xl mb-6">Profile image</h1>
							<p>
								The Fontys ICT InnovationLab logo is a long logo with
								different elements. When the whole logo is used as
								image, especially the Fontys ICT part will not be
								readable. So to create a recognizable and readable
								profile picture without changing the elements, the lab
								part has been used as image. Because of the dots, it
								will still be linked with the company.
							</p>
						</div>

						<div>
							<h3 className="text-xl">Final</h3>
							<img
								className="my-6 w-72"
								src="/images/Middel 26.png"
								alt=""
							/>

							<h3 className="text-xl mb-6">Explorations</h3>
							<div className="flex">
								<img
									className="w-40"
									src="/images/Middel 23.png"
									alt=""
								/>
								<img
									className="w-40 mx-6"
									src="/images/Middel -2.png"
									alt=""
								/>
								<img
									className="w-40"
									src="/images/Middel 25.png"
									alt=""
								/>
							</div>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
