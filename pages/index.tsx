import { Container, Typography, Box, Button } from "@material-ui/core";
import Link from "next/link";

export default function Home() {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js example - I have updated this page - did it go live
					automatically?
				</Typography>
				<Link href="/about">
					<Button variant="contained" color="primary">
						Go to the about page
					</Button>
				</Link>
			</Box>
		</Container>
	);
}
