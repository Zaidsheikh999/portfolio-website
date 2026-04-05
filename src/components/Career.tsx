import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Emeriosoft</h5>
              </div>
              <h6>JUL 2021 - DEC 2021</h6>
            </div>
            <p>
              Gained foundational experience in mobile and web development, built customer focused interfaces meeting usability
              and performance standards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Software Engineer</h4>
                <h5>CCODEZ</h5>
              </div>
              <h6>JAN 2022 - MAR 2022</h6>
            </div>
            <p>
              Developed a solid foundation in mobile and web development, delivering user centric interfaces with improved usability and performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer iOS</h4>
                <h5>Cubix</h5>
              </div>
              <h6>JUN 2022 - NOV 2023</h6>
            </div>
            <p>
              - Developed and maintained iOS applications using Swift (SwiftUI / UIKit), Cocoa Touch, and third-party libraries.<br />
              - Performed technical design and end-to-end implementation of iOS apps following Agile/Scrum processes.<br />
              - Collaborated with product managers and designers to define rich, user-centric iOS experiences.<br />
              - Conducted code reviews and upheld coding standards; supported architect in improving native iOS codebase.<br />
              - Researched and evaluated new technologies, sharing findings and recommendations with the team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer iOS</h4>
                <h5>IDENFO</h5>
              </div>
              <h6>CURRENT</h6>
            </div>
            <p>
              - Building a KYC (Know Your Customer) solution integrating facial comparison SDKs and biometric verification for
              identity & document verification (ID&V) on iOS.<br />
              - Implementing facial recognition and liveness detection flows using biometric SDKs, ensuring compliance with
              financial industry identity verification standards.<br />
              - Lead iOS development of HBL-AMC, a fintech app for asset management and banking services, serving thousands of
              active users.<br />
              - Actively contributing to Faysal Funds and 5th Pillar — investment and financial services platforms built with
              performance and security at the core.<br />
              - Architect and implement high-performance, scalable, and secure financial transaction flows using Swift and SwiftUI.<br />
              - Integrate RESTful APIs, payment gateways, and analytics tools to power seamless user experiences.<br />
              - Apply MVVM and VIPER design patterns to ensure maintainable, testable codebases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
