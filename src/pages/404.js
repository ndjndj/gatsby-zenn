import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NOT_FOUND_IMG from '../../static/logo.png';

export default function NotFound() {
    return (
        <Layout>
            <SEO title="404 Not Found" desciption="ページが見つかりません" />
            <div className="not-found-message">
                <h1>404 not found</h1>
                <Link to="/">back to toppage.</Link>
            </div>
            <img src={NOT_FOUND_IMG} className="not-found-image" alt="not found" />
        </Layout>
    );
}