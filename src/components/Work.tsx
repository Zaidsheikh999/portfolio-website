import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  const apps = [
    {
      name: "Idenfo Global",
      category: "KYC & Identity Verification",
      description: "State-of-the-art identity verification using card reading, NFC scanning, and e-passport validation via ICAO.",
      tools: "Swift, SwiftUI, Face SDK, NFC, ICAO",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/52/d2/95/52d295be-e2b0-1573-2469-24fdc279e822/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
      link: "https://apps.apple.com/gb/app/idenfo-global/id6449458587",
    },
    {
      name: "HBL Asset",
      category: "Finance · Mutual Funds",
      description: "Portfolio visibility, real-time transactions, and diversified fund management for HBL Asset Management.",
      tools: "Swift, UIKit, RESTful APIs, MVVM",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/78/91/a2/7891a2b7-aef8-8d8b-fcd9-30b2e39ad586/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
      link: "https://apps.apple.com/nz/app/hbl-asset/id1589436981",
    },
    {
      name: "5th Pillar Humrah",
      category: "Finance · Takaful",
      description: "Empowers agents to manage portfolios, track check-ins, monitor KPIs, and access detailed MIS reports.",
      tools: "Swift, SwiftUI, CoreData, MVVM",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1b/93/bb/1b93bbd8-f06a-8b56-2777-33adedc2e2af/AppIcon-0-0-1x_U007emarketing-0-12-0-85-220.png/512x512bb.jpg",
      link: "https://apps.apple.com/nz/app/5th-pillar-humrah/id6737698654",
    },
    {
      name: "5th Pillar Niyyat",
      category: "Finance · Islamic Travel",
      description: "Shariah-compliant Hajj savings plan with Takaful memberships, branch locator, and end-to-end pilgrimage services.",
      tools: "Swift, SwiftUI, MapKit, VIPER",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/17/05/72/17057210-68cf-8cd0-2b6b-e76d4362ecf1/AppIcon-1x_U007epad-0-1-0-85-220-0.png/512x512bb.jpg",
      link: "https://apps.apple.com/nz/app/5th-pillar-niyyat/id6596748529",
    },
    {
      name: "NCC BioVerify",
      category: "Fintech · Biometric Verification",
      description: "Secure biometric identity verification by National Clearing Company of Pakistan for regulated financial operations.",
      tools: "Swift, UIKit, Biometrics, Face SDK",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/49/fb/b6/49fbb66a-7527-4d89-c379-c7050ad322ae/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
      link: "https://apps.apple.com/pk/app/ncc-bioverify/id6444863273",
    },
    {
      name: "Faysal Funds",
      category: "Finance · Asset Management",
      description: "E-transactions for mutual fund investment, conversion & redemption with performance insights and market news.",
      tools: "Swift, UIKit, RESTful APIs, MVC",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/44/1e/d8/441ed863-aef6-3e8d-41e8-84ef26fd2efc/AppIcon-0-0-1x_U007ephone-0-10-0-sRGB-85-220.png/512x512bb.jpg",
      link: "https://apps.apple.com/nz/app/faysal-funds/id1601380758",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {apps.map((app, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{app.name}</h4>
                    <p>{app.category}</p>
                  </div>
                </div>
                <h4>Tools &amp; Stack</h4>
                <p>{app.tools}</p>
                <p className="work-desc">{app.description}</p>
              </div>
              <WorkImage image={app.icon} alt={app.name} link={app.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
