export default function Page() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="kefir-care-content flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start" aria-label="Milk Kefir Care Guide">
				<div>
					<h1 className="text-3xl font-bold">Storing Kefir</h1>
					<section className="my-4" aria-labelledby="storing-instructions">
						<h2 className="font-bold text-xl" id="storing-instructions">Storing Finished Kefir</h2>
						<section className="my-4" aria-labelledby="chilling-storage">
							<h2 className="font-bold text-xl" id="chilling-storage">Chilling, Thickening, and Storage</h2>
							<p>After straining, freshly fermented kefir can be consumed immediately. However, many people prefer to refrigerate it for improved flavor and texture.</p>
							<h3 className="font-bold mt-2">Chilling for Flavor and Thickness</h3>
							<p>Once strained:</p>
							<ol className="list-inside list-decimal mb-2">
								<li>Transfer the finished kefir to a sealed glass container.</li>
								<li>Place it in the refrigerator for at least 12–24 hours before consuming.</li>
							</ol>
							<p>During refrigeration:</p>
							<ul className="list-disc list-inside mb-2">
								<li>The flavor becomes milder and more balanced.</li>
								<li>The texture often thickens slightly.</li>
								<li>Effervescence may increase gently as residual fermentation continues at a slower pace.</li>
							</ul>
							<p>This resting period allows the acids and fermentation byproducts to integrate more fully, resulting in a smoother taste.</p>
							<p>If a thicker consistency is desired, kefir may also undergo a brief second fermentation at room temperature (without the grains), optionally with fruit or flavorings, before refrigeration. Once refrigerated, fermentation slows significantly.</p>
							<h3 className="font-bold mt-2">Safe Storage Duration</h3>
							<p>Refrigerated kefir is generally best consumed within 7–10 days for optimal flavor and probiotic activity. It often remains safe beyond that window if properly refrigerated, but taste and texture may become increasingly sour over time.</p>
							<p>Signs that kefir should be discarded include:</p>
							<ul className="list-disc list-inside mb-2">
								<li>Unpleasant or rotten odor (distinct from normal tanginess)</li>
								<li>Visible mold growth (fuzzy or colored spots)</li>
								<li>Unusual discoloration</li>
							</ul>
							<p>Separation into curds and whey during storage is normal and not a sign of spoilage. Simply shake or stir before serving.</p>
							<p>For longest quality, store kefir in a sealed container in the coldest part of the refrigerator, ideally below 40°F (4°C).</p>
							<p>With proper refrigeration, kefir remains a stable, living food that continues to evolve slowly in flavor while maintaining its beneficial microbial profile.</p>
						</section>

					</section>
				</div>
			</main>
		</div>
	)
}