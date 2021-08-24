import React from "react"
import Layout from "../components/Layout/layout"

const TestPage = props => {
  const testData = props.data.allTestJson.nodes[0]
  if (testData) {
    return (
      <Layout page={"test"}>
        <div className="test-class">{testData.title}</div>
      </Layout>
    )
  }
}

export default TestPage;

export const query = graphql`
  query {
    allTestJson {
      nodes {
        title
      }
    }
  }
`
