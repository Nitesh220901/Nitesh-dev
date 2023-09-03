export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Nitesh</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          A passionate Front-end React Developer . 📍
          </p>
        </div>
        <a href="https://github.com/Nitesh220901" target="_blank" className="btn btn-primary">Visit My Github</a>
      </div>
      <div className="hero--section--img">
      
        <img src="./img/dummy-profile-pic-male1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
