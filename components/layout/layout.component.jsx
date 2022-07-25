import { Fragment } from 'react';
import Navigation from "./navigation.component"

function Layout(props) {
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
