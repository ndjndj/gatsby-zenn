import React from 'react';
import { Link } from 'gatsby';

export default function Page2() {
    return (
        <React.Fragment>
            <div>Page2</div>
            <Link to='/'>back to home.</Link>
        </React.Fragment>
    );
}
