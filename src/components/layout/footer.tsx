import Link from "next/link";
import Image from "next/image";
import { getMenu } from "@/src/lib/shopify";
import { Menu } from "@/src/lib/shopify/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default async function Footer() {
  const menu1 = await getMenu("footer");
  const menu2 = await getMenu("footer-pages");

  console.log(menu1, menu2);
  return (
    <footer className="">
      <div className="grid grid-cols-4 gap-4 ">
        <div className="">
          <Link href={"/"}>
            <Image
              src={"/assets/ar-logo-green.png"}
              alt="AR Clothing Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <nav>
            <h2>Categories</h2>
          {menu1.length > 0 && (
            <ul>
              {menu1.map((item: Menu) => (
                <li key={item.title}>
                  <Link href={item.path}> {item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <nav>
            <h2>Pages</h2>
          {menu2.length > 0 && (
            <ul>
              {menu2.map((item: Menu) => (
                <li key={item.title}>
                  <Link href={item.path}> {item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="">
          <Link href={""}>
            <FontAwesomeIcon icon={faFacebook} style={{width: "40px"}}></FontAwesomeIcon>
          </Link>
          <Link href={""}>
            <FontAwesomeIcon icon={faInstagram} style={{width: "40px"}}></FontAwesomeIcon>
          </Link>
          <div>
            <h2>Contact Us</h2>
            <p>clothingar3@gmail.com</p>
            <p>+92 123456789</p>
          </div>
        </div>
      </div>
      <div>
        <p>Copyright ©  2025 AR Designer. All Rights Reserved</p>
      </div>
    </footer>
  );
}
