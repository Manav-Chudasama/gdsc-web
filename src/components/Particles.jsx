import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffffff", // Clean white background
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push", // On click, add more particles
          },
          onHover: {
            enable: true,
            mode: "grab", // Repulse effect on hover
          },
        },
        modes: {
          push: {
            quantity: 4, // Adds more particles on click
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"], // Sharp Google colors
        },
        links: {
          color: "#0000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
          //enable: true, // Disabling link lines for a cleaner look
        },
        move: {
          enable: true,
          speed: { min: 2, max: 4 },
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80, // Number of particles
        },
        opacity: {
          value: 1, // Full opacity for sharp color
        },
        shape: {
          type: "circle", // Google-inspired simple circle shapes
        },
        size: {
          value: { min: 4, max: 8 }, // Bigger circles for better visibility
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesContainer;
