import { Layout } from '../src/features/layout';

export default function Logo() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col fontys-light items-center w-3/4 mx-auto">
					<h1 className="text-6xl my-32">LOGO</h1>
					<article className="text-lg space-y-6">
						<p>
							The use of the logo is based on the use of it. There is a
							formal logo, that is fixed and there is a dynamic logo which
							is more flexible. First we dive into the formal logo. This
							logo is as seen below black on white or white on black. The
							colors are fixed.
						</p>
						<p>
							The second part is the dynamic logo. This logo has 2 dynamic
							elements and a lot more flexibility color and shape wise.
							The 2 elements are the stripe that devides the Fontys ICT
							part and the Innovation Lab part. And the second element is
							the Lab part. Both the elements have their own actions and
							use.
						</p>
						<p>
							For more information about this part of the identity see the
							Branding page
						</p>
					</article>
				</section>
			</div>
		</Layout>
	);
}
