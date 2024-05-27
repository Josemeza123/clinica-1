import Link from "next/link";
import Image from "next/image";
import logo from "../../public/LogoClinica.jpg";

function NavBar() {
  return (
    <nav className="flex w-full h-20">
      <ul className="flex left-0 justify-start w-1/2">
        <div>
          <Image src={logo} width={80} height={80} />
        </div>
      </ul>
      <ul className="flex items-center flex-nowrap gap-4 right-0 justify-around w-1/2 object-center h-full">
        <Link href="/"> Home</Link>
        <Link href="/"> Nosotros</Link>
        <Link href="/"> Especialidades</Link>
        <Link href="/"> Ingresar</Link>
      </ul>
    </nav>
  );
}

export default NavBar;
