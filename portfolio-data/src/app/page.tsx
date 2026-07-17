import Hero from "@/components/home/Hero";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main>
        <Hero name={profile.name} role={profile.role}/>
    </main>
  );
}
