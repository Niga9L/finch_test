import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Rapido from "./containers/Rapido/Rapido";


class App extends React.Component {
  render() {
    return (
      <Layout>
        <Rapido>
        </Rapido>
      </Layout>

    )
  }

}

export default App;
