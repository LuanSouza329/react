import Link from "next/link";

export function Topo (){
  return(
    <header className="flex gap-4 justify-between items-center p-3 bg-amber-600">
      <div>LOGO</div>
      <nav style={style}>
        <Link href="/" style={styleLink}>
          Home
        </Link>
        <Link href="/produtos" style={styleLink}>
          Produtos
        </Link>
        <Link href={"/estados"} style={styleLink}>
          Estados
        </Link>
      </nav>
    </header>
  );
}

const style = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center"
}

const styleLink = {
  color: "white",
  textDecoration: "none",
}
