import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import sunImg from "../images/sun-img.png";
import graduationCapImg from "../images/graduation-cap.png";
import profileImg from "../images/profile-img.png";
import codehubImg from "../images/codehub.png";
import exchangoImg from "../images/exchango.png";
import quickstayImg from "../images/quickstay.png";

const Page = () => {
  const profileRef = useRef();

  useGSAP(() => {
    gsap.to(profileRef.current, {
      scale: 0.95,
    });
    gsap.from(profileRef.current, {
      x: -80,
      y: 40,
      duration: 0.8,
      delay: 1,
      borderRadius: 20,
    });
  });

  useGSAP(() => {
    gsap.from(".bento-div", {
      opacity: 0,
      duration: 1,
      delay: 1.7,
      scale: 0.9,
    });
  });

  useGSAP(() => {
    gsap.from(".bento-text", {
      opacity: 0,
      y: 20,
      duration: 0.7,
      delay: 2.5,
    });
  });

  useGSAP(() => {
    gsap.from(".bento-side", {
      opacity: 0,
      x: 30,
      duration: 0.7,
      delay: 2.5,
    });
  });

  useGSAP(() => {
    gsap.from(".bento-side2", {
      opacity: 0,
      x: -30,
      duration: 0.7,
      delay: 2.5,
    });
  });

  useGSAP(() => {
    gsap.from(".bento-img", {
      opacity: 0,
      rotate: 270,
      duration: 1.5,
      delay: 2.5,
      scale: 0.5,
    });
  });

  const handleContactClick = (event) => {
    event?.preventDefault();

    try {
      const email = "soumitrimishra1@gmail.com";
      const mailto = `mailto:${email}`;
      window.location.href = mailto;
    } catch (error) {
      console.error("Failed to open mailto link:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row g-3">
          <div className="col-md-12">
            <div className="bento-navbar bento-div d-flex justify-content-between">
              <h6 className="bento-text text-uppercase">
                Soumitri <span className="fst-italic fw-lighter">Mishra</span>
              </h6>
              <div className="d-flex justify-content-between">
                <p className="bento-text text-uppercase mx-2 bento-hide">
                  <a
                    href="https://github.com/soumitri-2005?tab=repositories"
                    className="link-offset-2 link-underline link-underline-opacity-0 text-uppercase m-3 fw-lighter"
                  >
                    Projects
                  </a>
                </p>
                <p className="bento-text text-uppercase mx-3">
                  <a
                    href="https://www.linkedin.com/in/soumitri-mishra/details/skills"
                    className="link-offset-2 link-underline link-underline-opacity-0 text-uppercase m-3 fw-lighter"
                  >
                    Skills
                  </a>
                </p>
                <p
                  className="bento-text text-uppercase mx-3 fw-lighter bento-hide"
                  onClick={handleContactClick}
                >
                  contact
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row g-3">
              <div className="col-md-12 ">
                <div className="row g-3">
                  <div className="col-md-8">
                    <div className="bento-heading bento-div p-3 d-flex flex-column justify-content-between">
                      <div>
                        <img
                          src={sunImg}
                          alt="Sun"
                          className="bento-img img-fluid float-end m-1"
                        />
                      </div>
                      <div>
                        <h1 className="bento-side2 lh-1">
                          Let's write code <br />
                          to <span className="bento-span fst-italic">
                            make
                          </span>{" "}
                          your life <br />
                          responsive.
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bento-pic bento">
                      <img ref={profileRef} src={profileImg} alt="profile" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="bento-about bento-div p-3 d-flex flex-column justify-content-between">
                      <div>
                        <img
                          src={graduationCapImg}
                          className="bento-text img-fluid float-start"
                          alt="graduation"
                        />
                      </div>
                      <div>
                        <p className="bento-text mb-0">
                          Computer Science student at Ajay Binay Institute of
                          Technology with an 8.75 CGPA, completed 10th with 83%
                          and 12th with 72%. Proficient in C, Java, and
                          JavaScript, with hands-on experience in HTML, CSS,
                          ReactJS, Python, and Django. Strong problem-solving
                          skills, disciplined work ethic, and a focus on
                          building maintainable full-stack applications; seeking
                          internships and collaborative projects.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bento-contact bento-div p-2 d-flex flex-column justify-content-between">
                      <div className="d-flex justify-content-between">
                        <p className="bento-text text-uppercase p-2">
                          Have some <br /> questions ?
                        </p>
                        <a href="">
                          <FontAwesomeIcon
                            icon={faLocationArrow}
                            className="bento-text arrow-icon p-2"
                            onClick={handleContactClick}
                          />
                        </a>
                      </div>
                      <div>
                        <h3 className="bento-text m-0 ps-1">
                          Contact <span className="fst-italic">me</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row g-3">
              <div className="col-md-12">
                <div className="bento-project bento-div p-1 pt-4">
                  <a href="https://github.com/soumitri-2005?tab=repositories">
                    <FontAwesomeIcon
                      icon={faLocationArrow}
                      className="bento-side arrow-icon"
                    />
                  </a>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="bento-side accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          QuickStay
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <hr className="my-0 mx-3" />
                        <div className="accordion-body">
                          <a
                            href="https://quick-stay-coral.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={quickstayImg}
                              alt="Code Hub"
                              style={{ cursor: "pointer" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <hr className="my-1 mx-3" />
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="bento-side accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Code Hub
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <hr className="my-0 mx-3" />

                        <div className="accordion-body">
                          <a
                            href="https://github.com/soumitri-2005/code-hub"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={codehubImg}
                              alt="Code Hub"
                              style={{ cursor: "pointer" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <hr className="my-1 mx-3" />
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="bento-side accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Exchango
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <hr className="my-0 mx-3" />

                        <div className="accordion-body">
                          <a
                            href="https://soumitri-2005.github.io/Exchango-currency-converter/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={exchangoImg}
                              alt="Code Hub"
                              style={{ cursor: "pointer" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="bento-footer bento-div d-flex justify-content-between">
                  <a
                    href="https://www.linkedin.com/in/soumitri-mishra/"
                    className="bento-text link-offset-2 link-underline link-underline-opacity-0 text-uppercase"
                  >
                    linkedin
                  </a>
                  <a
                    href="https://leetcode.com/u/soumitri-2005/"
                    className="bento-text link-offset-2 link-underline link-underline-opacity-0 text-uppercase"
                  >
                    leetcode
                  </a>
                  <a
                    href="https://github.com/soumitri-2005"
                    className="bento-text link-offset-2 link-underline link-underline-opacity-0 text-uppercase"
                  >
                    github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
