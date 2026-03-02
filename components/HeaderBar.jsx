import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
  Button,
  Badge,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Switch,
  Tooltip
} from "@heroui/react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function HeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [isDark, setIsDark] = React.useState(true);
  const [notifications] = React.useState([
    "Message to future self scheduled for next week",
    "Delivery success: 1 message sent"
  ]);

  const handleThemeToggle = (val) => {
    setIsDark(val);
    const root = document.documentElement;
    if (val) {
      root.removeAttribute("data-theme"); // dark by default
    } else {
      root.setAttribute("data-theme", "light");
    }
  };

  return (
    <Navbar
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="sticky top-0 z-40 backdrop-blur-md bg-[var(--color-background)]/80 text-[var(--color-text)] border-b border-[var(--color-border)]"
    >
      <NavbarContent justify="start" className="gap-2">
        <NavbarMenuToggle className="text-[var(--color-text)] md:hidden" />
        <NavbarBrand className="pl-2">
          <Link to="/" className="text-[var(--color-text)] font-semibold">
            PingMeLater2
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Input
            aria-label="Search"
            placeholder="Search messages..."
            value={search}
            onValueChange={setSearch}
            classNames={{
              base: "w-80",
              inputWrapper:
                "backdrop-blur-sm bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-sm py-1 focus-within:border-[var(--color-primary)]",
              input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
              label: "text-[var(--color-text)]"
            }}
            startContent={
              <MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />
            }
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2 pr-2">
        <NavbarItem>
          <Tooltip content={<span className="text-[var(--color-text)] text-xs">Toggle theme</span>}>
            <Switch
              aria-label="Toggle theme"
              isSelected={isDark}
              onValueChange={handleThemeToggle}
              size="sm"
              color="secondary"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <SunIcon className={`${className} text-[var(--color-text)]`} />
                ) : (
                  <MoonIcon className={`${className} text-[var(--color-text)]`} />
                )
              }
            />
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                isIconOnly
                className="rounded-full bg-transparent hover:bg-[var(--color-surface)] text-[var(--color-text)] relative"
              >
                <BellIcon className="w-5 h-5 text-[var(--color-text)]" />
                {notifications.length > 0 && (
                  <Badge
                    content={String(notifications.length)}
                    color="warning"
                    className="absolute -top-1 -right-1"
                  />
                )}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Notifications"
              classNames={{
                base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[260px]"
              }}
            >
              {notifications.length === 0 ? (
                <DropdownItem key="none" className="text-[var(--color-text)]">
                  No new notifications
                </DropdownItem>
              ) : (
                notifications.map((n, idx) => (
                  <DropdownItem key={idx} className="text-[var(--color-text)]">
                    {n}
                  </DropdownItem>
                ))
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button className="rounded-full bg-[var(--color-surface)] text-[var(--color-text)] px-2 py-1">
                <div className="flex items-center gap-2">
                  <Avatar name="U" size="sm" className="w-7 h-7" />
                  <ChevronDownIcon className="w-4 h-4 text-[var(--color-text)]" />
                </div>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="User menu"
              classNames={{
                base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[180px]"
              }}
            >
              <DropdownItem
                key="profile"
                className="text-[var(--color-text)]"
                startContent={
                  <UserIcon className="w-4 h-4 text-[var(--color-text)]" />
                }
              >
                Profile
              </DropdownItem>
              <DropdownItem
                key="settings"
                className="text-[var(--color-text)]"
                startContent={
                  <Cog6ToothIcon className="w-4 h-4 text-[var(--color-text)]" />
                }
              >
                Settings
              </DropdownItem>
              <DropdownItem
                key="logout"
                className="text-[var(--color-text)]"
                startContent={
                  <ArrowRightIcon className="w-4 h-4 text-[var(--color-text)]" />
                }
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-[var(--color-background)]/90 backdrop-blur-md border-t border-[var(--color-border)]">
        <NavbarMenuItem>
          <Link to="/" className="text-[var(--color-text)]">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/compose" className="text-[var(--color-text)]">
            Compose
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/scheduled" className="text-[var(--color-text)]">
            Scheduled
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/history" className="text-[var(--color-text)]">
            History
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/settings" className="text-[var(--color-text)]">
            Settings
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/about" className="text-[var(--color-text)]">
            About
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
