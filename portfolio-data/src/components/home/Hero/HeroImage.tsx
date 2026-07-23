import Image from "next/image";
export default function HeroImage(){
    return(
        <Image
            src="/profile.png"
            alt="Foto de perfil Luan Souza"
            width={420}
            height={420}
            priority
        >

        </Image>
    );
}