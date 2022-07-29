import { Fragment } from 'react';
import Footer from '../footer/footer.component';
import Navigation from "./navigation.component"

function Layout(props) {
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
