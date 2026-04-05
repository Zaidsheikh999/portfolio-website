import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Results-driven <strong>iOS Engineer</strong> with 4+ years of
          hands-on experience designing, building, and shipping high-quality
          mobile applications. Currently at{" "}
          <strong>IDENFO</strong>, building cutting-edge KYC solutions that
          leverage facial comparison SDKs, biometric verification, and ID&amp;V
          technology — alongside fintech platforms including{" "}
          <strong>IDENFO GLOBAL, HBL-AMC, Faysal Funds,</strong> and{" "}
          <strong>5th Pillar</strong>.
        </p>
        <p className="para">
          Deep expertise in <strong>Swift, SwiftUI, UIKit</strong>, RESTful API
          integration, and scalable architectures such as{" "}
          <strong>MVC, MVVM, and VIPER</strong>. Proven track record delivering
          secure, high-performance applications in regulated financial and
          identity verification environments.
        </p>

        <div className="about-highlights">
          <div className="about-highlight-item">
            <span className="highlight-number">4+</span>
            <span className="highlight-label">Years Experience</span>
          </div>
          <div className="about-highlight-item">
            <span className="highlight-number">10+</span>
            <span className="highlight-label">Apps Shipped</span>
          </div>
          <div className="about-highlight-item">
            <span className="highlight-number">3</span>
            <span className="highlight-label">Architectures Mastered</span>
          </div>
        </div>

        <div className="about-skills">
          <span className="about-skill-tag">Swift</span>
          <span className="about-skill-tag">SwiftUI</span>
          <span className="about-skill-tag">UIKit</span>
          <span className="about-skill-tag">Xcode</span>
          <span className="about-skill-tag">MVVM</span>
          <span className="about-skill-tag">VIPER</span>
          <span className="about-skill-tag">MVC</span>
          <span className="about-skill-tag">REST APIs</span>
          <span className="about-skill-tag">KYC / ID&amp;V</span>
          <span className="about-skill-tag">Biometrics</span>
          <span className="about-skill-tag">Core Data</span>
          <span className="about-skill-tag">Git</span>
        </div>
      </div>
    </div>
  );
};

export default About;

