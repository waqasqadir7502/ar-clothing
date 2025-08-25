import { getMenu } from "@/src/lib/shopify";
import { Menu } from "@/src/lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import { Search } from "./search";
import MobileMenu from "./mobile-menu";
import CartModal from "../../cart/modal";



export async function Navbar() {
  const menu = await getMenu("ar-main-menu");

  console.log(menu);

  return (
    <nav>
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="full-nav">
        <div className="siteLogo">
          <Link href={"/"}>
            <Image src={"/assets/ar-logo-green.png"} alt="AR Clothing Logo" width={100} height={100} />
          </Link>
        </div>

        <div className="menu-ul">
          {menu.length > 0 ? (
            <ul>
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link href={item.path} prefetch={true} className="">{item.title}</Link>
                </li>
              ))} 
            </ul>
          ) : null}
        </div>

        <div>
          <Search/>
        </div>
        <div>
          <CartModal/>
        </div>
      </div>
    </nav>
  );
}
