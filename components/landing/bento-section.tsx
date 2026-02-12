import MagicBento from "../react-bits/MagicBento";
import ShinyText from "../react-bits/ShinyText";

interface BentoSectionProps {
  className: string;
}

export function BentoSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between text-center gap-4 mb-12 lg:mb-16">
        <h2></h2>
        <ShinyText
          text="مرزهای خلاقیت در دنیای وب"
          speed={2}
          delay={0}
          color="#a855f7"
          shineColor="#f472b6"
          spread={120}
          direction="right"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className=" text-3xl md:text-4xl lg:text-5xl font-bold"
        />
        <p className="text-lg text-center lg:text-xl text-gray-800 dark:text-gray-200">زیرساختی ایده‌آل برای ساخت سریع‌ترین و زیباترین وب‌سایت‌ها</p>
      </div>
      <MagicBento
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={400}
        particleCount={12}
        glowColor="132, 0, 255"
        disableAnimations={false}
      />
    </div>
  );
}
