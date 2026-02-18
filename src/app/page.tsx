import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col py-16 px-16 bg-white dark:bg-black sm:items-start">
				<div className="flex justify-between">
					<Link href={"/kefir-care"} className="text-xl font-bold m-4">Kefir Care</Link>
					<Link href={"/about"} className="text-xl font-bold m-4">What Is Kefir?</Link>
				</div>
				<div className="flex m-8 border-2 p-8">
					<p>Placeholder for image of kefir grain</p>
				</div>
			</main>
		</div>
	);
}
