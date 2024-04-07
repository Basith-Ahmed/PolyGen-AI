import { UserButton } from "@clerk/nextjs";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
    return (
        <div className="flex items-center p-4">
            <HamburgerMenu />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )
}