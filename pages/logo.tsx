import React from 'react';
import { BlackLogo } from '../src/components/BlackLogo';
import { LabWithLeftBorder } from '../src/components/LabWithLeftBorder';
import { WhiteLogo } from '../src/components/WhiteLogo';
import { Layout } from '../src/features/layout';

export default function Logo() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col justify-center mb-28 fontys-light w-full max-w-screen-lg mx-auto">
					<h1 className="text-5xl tracking-widest mt-32 mb-24">LOGO</h1>
					<article className="flex flex-col text-lg space-y-32">
						<div className="flex flex-1 flex-col text-xl fontys-light tracking-widest">
							<p className="fontys-normal mb-4">
								The use of the logo is based on the use of it. There is
								a formal logo, that is fixed and there is a dynamic logo
								which is more flexible.
								<br />
								First we dive into the formal logo. This logo is as seen
								below black on white or white on black. The colors are
								fixed.
							</p>

							<div className="flex space-x-6">
								<div className="flex-1">
									<WhiteLogo style="w-full" />
								</div>
								<div className="flex-1">
									<BlackLogo style="w-full" />
								</div>
							</div>
						</div>

						<div className="flex items-center">
							<div className="flex-1 space-y-2">
								<h2 className="text-3xl">Dynamic Elements</h2>

								<p className="fontys-normal mb-4">
									The second part is the dynamic logo. This logo has 2
									dynamic elements and a lot more flexibility color
									and shape wise. The 2 elements are the stripe that
									devides the Fontys ICT part and the Innovation Lab
									part. And the second element is the Lab part. Both
									the elements have their own actions and use.
								</p>
							</div>

							<div>
								<LabWithLeftBorder />
							</div>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
