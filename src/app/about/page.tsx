export default function Page() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start" aria-label="Milk Kefir Care Guide">
				<div>
					<h2 className="text-xl font-bold">What is Kefir</h2>
					<section className="my-4" aria-labelledby="introduction">
						<h3 className="font-bold" id="introduction">Introduction</h3>
						<p>Milk kefir is a traditional cultured dairy beverage made by fermenting milk with kefir grains. These small, cauliflower-shaped clusters contain a living community of beneficial bacteria and yeast that transform fresh milk into a tangy, probiotic-rich drink. With simple daily care, kefir grains can remain healthy and active for many years, continually producing fresh kefir.</p>
						<p>Proper care ensures consistent fermentation, balanced flavor, and strong grain growth. The process is straightforward, but because kefir grains are living organisms, they respond best to regular feeding and gentle handling.</p>
					</section>
					<hr className="my-4"/>
					<section className="my-4" aria-labelledby="pronunciation">
						<h3 className="font-bold" id="pronunciation">Pronunciation Guide</h3>
						<p>Kefir is typically pronounced:</p>
						<p><em>kuh-FEER</em> <code>(IPA: /kəˈfɪr/)</code></p>
						<p>In some regions it may also be pronounced <strong>KEE-feer</strong>, but kuh-FEER is the most widely accepted pronunciation in English.</p>
					</section>
					<hr className="my-4"/>
					<section className="my-4" aria-labelledby="what-are-kefir-grains">
						<h3 className="font-bold" id="what-are-kefir-grains">What Are Kefir Grains? <span className="sr-only">(Understanding the SCOBY)</span></h3>
						<p>Kefir grains are not actual grains. They are a <strong>SCOBY</strong>, which stands for <em>Symbiotic Culture of Bacteria and Yeast</em>. This means they are a stable, cooperative community of microorganisms living together in a matrix of proteins and polysaccharides.</p>
						<p>Within milk kefir grains, beneficial bacteria and yeast work in partnership:</p>
						<ul>
							<li>The bacteria ferment lactose (milk sugar) into lactic acid.</li>
							<li>The yeast contribute mild carbonation and additional fermentation byproducts.</li>
							<li>Together, they create kefir’s characteristic tangy flavor, slight effervescence, and creamy texture.</li>
						</ul>
						<p>The grains grow and multiply when properly fed, forming soft, white or off-white clusters with a texture similar to small florets of cauliflower.</p>
					</section>
				</div>
			</main>
		</div>
	)
}