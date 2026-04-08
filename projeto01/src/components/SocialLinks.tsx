function SocialLinks({ href, src, alt }: { href: string, src: string, alt: string }) {
    return (
        <a href={href}
            target="_blank"
            rel="noopener noreferrer">
            <img className="links-images"
                src={src}
                alt={alt}
            />
        </a>
    );
}

export default SocialLinks;