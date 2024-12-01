import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Link from "next/link"

export default function Home() {
	return (
		<>
			<div className="relative">
				<header className="sticky top-0 z-40 ">
					<Navbar />
				</header>
				<main>
					<div className="grid grid-cols-6">
						<div className="col-span-1">
							<Sidebar />
						</div>
						<div className="col-span-5 border px-8 py-8 grid gap-4">
							<div>
								<ul className="flex gap-2">
									<li>
										<Link
											className="border rounded-full px-4 py-1"
											href="/popular-wallpapers"
										>
											Popular
										</Link>
									</li>
									<li>
										<Link
											className="border rounded-full px-4 py-1"
											href="/discover-wallpaper"
										>
											Discover
										</Link>
									</li>
									<li>
										<Link
											className="border rounded-full px-4 py-1"
											href="/random-wallpapers"
										>
											Random
										</Link>
									</li>
								</ul>
							</div>
							<hr />
							<div>
								<div className="grid grid-cols-3 gap-4">
									{/* image grid */}
									{Array.from({ length: 20 }, (element, index) => (
										<>
											<div
												key={index}
												className="overflow-hidden rounded-xl h-full w-full"
											>
												<Link
													href="https://random.imagecdn.app/1920/1080"
													target="_blank"
												>
													<img
														className="object-cover h-full w-full"
														src="https://random.imagecdn.app/1920/1080"
														alt="random images"
													/>
												</Link>
											</div>
										</>
									))}
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
