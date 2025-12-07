import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, ChevronDown, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const navItems = [
  { label: "Industries", href: "/industries", hasDropdown: true },
  { label: "Capabilities", href: "/capabilities", hasDropdown: true },
  { label: "Featured Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "About Us", href: "/about" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-navy text-white">
      <div className="container-wide">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">Consulting</span>
              <span className="text-xs text-white/70">& Company</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-white/80 ${
                  location.pathname === item.href ? "text-white" : "text-white/90"
                }`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
            
            {user ? (
              <Button 
                variant="ghost" 
                size="sm"
                className="hidden lg:flex text-white hover:bg-white/10 gap-2"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="sm"
                className="hidden lg:flex text-white hover:bg-white/10 gap-2"
                asChild
              >
                <Link to="/auth">
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="container-wide py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between py-3 text-base font-medium text-white/90 hover:text-white border-b border-white/10"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
            
            {user ? (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 py-3 text-base font-medium text-white/90 hover:text-white"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            ) : (
              <Link
                to="/auth"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 py-3 text-base font-medium text-white/90 hover:text-white"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
