import Navbar from "@/components/Navbar"
import ThemeController from "@/components/ThemeController"

export default function Home() {
	return (
		<>
			<main>
				<section className="2xl:container mx-auto flex justify-end py-2">
					<ThemeController />
				</section>
				<hr />
				<div className="2xl:container mx-auto">
					<Navbar />
				</div>
			</main>
		</>
	)
}
