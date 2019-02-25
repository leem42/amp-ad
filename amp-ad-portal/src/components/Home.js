import React from "react"
import PropTypes from "prop-types"
import asyncComponent from "./AsyncComponent"

const Welcome = asyncComponent(() => import("./Welcome"))
const Explore = asyncComponent(() => import("./HomeExplore-Syn.js"))
const Programs = asyncComponent(() => import("./Programs.jsx"))
const WhatsNew = asyncComponent(() => import("./WhatsNew.jsx"))

const Home = props => (
  <div>
    <Welcome
      markdown={props.welcomeHeaderMarkdown}
      markdownText={props.welcomeHeaderMarkdownText}
      handleChanges={props.handleChanges}
    />
    <Explore
      SynapseConstants={props.SynapseConstants}
      SynapseComponents={props.SynapseComponents}
      synapseLoaded={props.synapseLoaded}
    />
    <Programs
      SynapseConstants={props.SynapseConstants}
      SynapseComponents={props.SynapseComponents}
      defaultData={props.defaultData}
    />
    <WhatsNew
      defaultData={props.defaultData}
      handleNestedChanges={props.handleNestedChanges}
      SynapseComponents={props.SynapseComponents}
    />
  </div>
)

Home.propTypes = {
  token: PropTypes.object,
  handleChanges: PropTypes.func.isRequired,
  whatsNewMarkdownSegs: PropTypes.array.isRequired,
  handleNestedChanges: PropTypes.func.isRequired,
  SynapseConstants: PropTypes.object.isRequired,
  SynapseComponents: PropTypes.object.isRequired,
  defaultData: PropTypes.object.isRequired,
  synapseLoaded: PropTypes.bool.isRequired,
}

Home.defaultProps = {
  token: { sessionToken: "" },
}

export default Home
