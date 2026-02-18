import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex w-full max-w-3xl flex-col py-16 px-16 bg-white dark:bg-black">
				<div className="flex  flex-col items-center  my-8">
					<Link href={"/about"} className="text-xl font-bold m-4">What Is Kefir?</Link>
					<Link href={"/kefir-care"} className="text-xl font-bold m-4">Kefir Care and Feeding</Link>
					<Link href={"/storing-kefir"} className="text-xl font-bold m-4">Storing Ready Kefir</Link>
				</div>
				<div className="flex justify-center items-center">
					<p className="w-[400] h-[200] border-2 border-amber-500 content-center text-center">Placeholder for image of kefir grain</p>
				</div>
			</main>
		</div>
	);
}
