import Container from "./Container"
import Logo from "./navbar/Logo"
import Search from "./navbar/Search"
import UserMenu from "./navbar/UserMenu"


function NavBar() {
  return (
    <nav className="w-full">
        <div className="w-full py-4 border-b-[1px]">
            <Container>
                   <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <Logo/>
                    <Search/>
                    <UserMenu/>
                   </div>
            </Container>
        </div>
    </nav>
  )
}

export default NavBar