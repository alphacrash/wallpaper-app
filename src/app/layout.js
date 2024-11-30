import "./globals.css"

export const metadata = {
	title: "The Wallpaper App",
	description: "Upload and share your wallpapers with the world.",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
