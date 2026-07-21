import Hero from "@/components/home/Hero/Hero";
import Navbar from "@/components/layout/Navbar";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero name={profile.name} role={profile.role}/>
    </main>
  );
}
