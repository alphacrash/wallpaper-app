import StoreProvider from "@/components/StoreProvider"
import { APP_DESC, APP_NAME } from "@/lib/constant"
import "./globals.css"

export const metadata = {
	title: APP_NAME,
	description: APP_DESC,
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-theme="light"
		>
			<body>
				<StoreProvider>
					{children}
				</StoreProvider>
			</body>
		</html>
	)
}
