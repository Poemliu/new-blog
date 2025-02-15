"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Usable, use } from "react";
import { customerTheme } from "../store/store";
import useStore from "../store/store";
const dropDownItems: customerTheme[] = ["light", "dark", "system"];
export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function HeaderNav({
  getNav,
}: {
  getNav: Usable<Record<string, string>[]>;
}) {
  const handleThemeButtonClick = () => {};
  const setTheme = useStore.use.setTheme();
  const navItems = use(getNav);
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map(({ title, link }) => (
          <NavbarItem key={title}>
            <Link color="foreground" href={`/${link}`}>
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="flat" onPress={handleThemeButtonClick}>
                theme
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              {dropDownItems.map((item) => (
                <DropdownItem
                  key={item}
                  onPress={() => {
                    const theme =
                      item === "system"
                        ? window.matchMedia("prefers-color-scheme:dark").matches
                          ? "dark"
                          : "light"
                        : item;
                    localStorage.setItem("local-theme", theme);
                    setTheme(theme);
                  }}
                >
                  {item}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
