import AboutHero from "../../../assets/About/about-hero.svg";

export default function HeroSection() {
  return (
    <>
      <h5>About Us</h5>
      <h2>We are a leading beauty clinic that has been around since 2002</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis
      </p>

      <div>
        <img src={AboutHero} alt="" />
      </div>
    </>
  );
}
