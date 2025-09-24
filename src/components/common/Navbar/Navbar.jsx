import * as React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  // TODO: added to the icon after path in navbar
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/category" },
    { name: "Products", path: "/products" },
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "Elements", path: "/elements" },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Left - Logo & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold">
            Foodzy
          </Link>
        </div>

        {/* Center - Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link to={item.path} className="px-3 py-2">
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right - Button */}
        <div className="flex items-center">
          <span>(+88)-01814-82602</span>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path} className="block px-2 py-2">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
