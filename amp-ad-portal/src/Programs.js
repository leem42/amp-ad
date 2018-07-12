import React from "react"

const Programs = (props) => {
  return (
    <section className="programs row">
      <div className="content col-xs-12 col-sm-9">
        <div className="row between-xs middle-xs title-row">
          <div className="col-xs-6 col-sm-6">
            <h2>
Programs
            </h2>
          </div>
          <div className="col-xs-3 col-sm-2 content-width">
            <a className="align-right" href="/">
              See All Programs
            </a>
          </div>
        </div>

        <div className="row between-xs center-xs middle-xs">
          <div className="programs box col-sm-3">
            <div className="box-text-image">
              <img
                src={require("./images/consortium.svg")}
                alt="consortium molecule"
                className="svg-large-icon"
              />
              <h4>
AMP-AD
              </h4>
              <p>
                Reduce time to discovery of drugs and potential drug targets for
                AD treatment and prevention through analyses, network modeling,
                and experimental validation of large-scale molecular data from
                human brain samples.
              </p>
            </div>
            <button
              className="btn"
              onClick={(event) => {
                event.preventDefault()
                window.open(
                  "https://www.synapse.org/#!Synapse:syn2580853/wiki/409849",
                  "_blank",
                )
              }}
            >
              View
            </button>
          </div>

          <div className="programs box col-sm-3">
            <div className="box-text-image">
              <img
                src={require("./images/brain-heart.svg")}
                alt="an illustration of brain overlapping a heart"
                className="svg-large-icon"
              />
              <h4>
M2OVE-AD Consortium
              </h4>
              <p>
                Generate a deeper understanding of the phenotypes of risk and
                the molecular mechanisms linking vascular risk factors,
                cerebrovascular disease and AD.
              </p>
            </div>
            <button
              className="btn"
              onClick={(event) => {
                event.preventDefault()
                window.open(
                  "https://www.synapse.org/#!Synapse:syn2580853/wiki/409849",
                  "_blank",
                )
              }}
            >
              View
            </button>
          </div>

          <div className="programs box col-sm-3">
            <div className="box-text-image">
              <img
                src={require("./images/mouse.svg")}
                alt="illustration of mouse"
                className="svg-large-icon"
              />
              <h4>
Model AD Program
              </h4>
              <p>
                Bridge the preclinical to clinical development gap by developing
                AD animal models and a process for rigorous preclinical efficacy
                testing of biomarkers.
              </p>
            </div>
            <button
              className="btn"
              onClick={(event) => {
                event.preventDefault()
                window.open(
                  "https://www.synapse.org/#!Synapse:syn2580853/wiki/409849",
                  "_blank",
                )
              }}
            >
              View
            </button>
          </div>

          <div className="programs box col-sm-3">
            <div className="box-text-image">
              <img
                src={require("./images/dna.svg")}
                alt="dna double helix"
                className="svg-large-icon"
              />
              <h4>
Resilience-AD Program
              </h4>
              <p>
                Understand the mechanisms by which gene-environment interactions
                lead to cognitive resilience in the presence of high risk for
                disease.
              </p>
            </div>
            <button
              className="btn"
              onClick={(event) => {
                event.preventDefault()
                window.open(
                  "https://www.synapse.org/#!Synapse:syn2580853/wiki/409849",
                  "_blank",
                )
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs