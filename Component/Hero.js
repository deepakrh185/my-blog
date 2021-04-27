import classes from "./Hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <div className={classes.hero}>
      <section>
        <div className={classes.image}>
          <Image
            src="/images/my.jpg"
            width={300}
            height={300}
          />
        </div>
        <h1>Hi I am deepak</h1>
        <p>I blog about wed development -- especially in React </p>
      </section>
    </div>
  );
}

export default Hero;
