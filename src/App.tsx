
import Layout from './components/Layout';

function App() {
  return (
    <Layout >
      <Layout.Header>
        <Layout.Header.Left>
          <Layout.Header.Left.Title >All List Data</Layout.Header.Left.Title>
        </Layout.Header.Left>
        <Layout.Header.Right>
          <Layout.Header.Right.PrimaryCTA >
            Primary CTA
          </Layout.Header.Right.PrimaryCTA>
          <Layout.Header.Right.SecondaryCTA>
            Primary CTA
          </Layout.Header.Right.SecondaryCTA>
        </Layout.Header.Right>
      </Layout.Header>
      <Layout.Content>
        <div style={{ height: 600, display: "flex", justifyContent: "center", alignItems: "center" }}>The Content</div>
      </Layout.Content>
    </Layout>
  );
}

export default App;
