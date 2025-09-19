import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="container mx-auto p-4">
			<div className="flex gap-4">
				<Button asChild>
					<Link href="/sign-in">Sign In</Link>
				</Button>
				<Button asChild>
					<Link href="/sign-up">Sign Up</Link>
				</Button>
			</div>
		</div>
	);
}
