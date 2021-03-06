import React from 'react';
import Link from '../../components/link';

const LinkTest = () => (
  <section
    className="pa3 pa5-ns">
    <h5>Links</h5>

    <p
      className="mv2">
      <Link
        label="Add Review" />
    </p>

    <p
      className="mv2">
      <Link
        icon="arrow_back"
        label="Back" />
    </p>

    <p
      className="mv2">
      <Link
        active
        icon="phone_iphone"
        ellipsis={true}
        label="Apple iPhone 7 (Jet Black, 256 GB)" />
    </p>
  </section>
);

export default LinkTest;
