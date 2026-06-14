import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="flex min-h-screen flex-col items-center justify-center mesh-gradient px-4"
      >
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
        <Button asChild className="mt-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}
