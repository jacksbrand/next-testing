import { useEffect } from "react";
import React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import { themeDark, themeLight } from "../lib/theme";

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		//Remove server-sede injected CSS
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}, []);

	return (
		<ThemeProvider theme={false ? themeDark : themeLight}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
