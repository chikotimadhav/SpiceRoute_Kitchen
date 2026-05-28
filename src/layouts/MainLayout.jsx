import Navbar          from "../components/Navbar";
import Footer          from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import Cart            from "../components/Cart/Cart";
import CheckoutModal   from "../components/Checkout/CheckoutModal";
import AuthModal       from "../components/Auth/AuthModal";

/**
 * Main layout — wraps every public-facing page.
 * Includes the sticky Navbar, page content, footer, and floating WhatsApp/scroll buttons.
 */
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}>
        {children}
      </main>
      <Footer />
      <FloatingButtons />
      <Cart />
      <CheckoutModal />
      <AuthModal />
    </>
  );
}
