import Hero            from "../../components/Hero";
import FeaturedDishes  from "../../components/FeaturedDishes";
import About           from "../../components/About";
import MenuSection     from "../../components/MenuSection";
import Gallery         from "../../components/Gallery";
import Reviews         from "../../components/Reviews";
import Instagram       from "../../components/Instagram";
import Reservation     from "../../components/Reservation";
import Location        from "../../components/Location";

/**
 * Home page — assembles all landing-page sections in order.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <About />
      <MenuSection />
      <Gallery />
      <Reviews />
      <Instagram />
      <Reservation />
      <Location />
    </>
  );
}
