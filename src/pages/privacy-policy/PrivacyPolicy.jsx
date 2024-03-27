import React from "react";
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <section className="privacy-page">
      <div className="privacy-container">
        <h1 className="title">Privacy <span className="highlight">Policy</span></h1>
        <p className="desc">
          Thank you for using our Short URL service. Your privacy is important
          to us, and we are committed to protecting it. This Privacy Policy
          explains how we collect, use, and disclose information about you when
          you use our service.
        </p>
        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>URLs:</strong> When you use our service to shorten URLs, we
            collect the original URL and the shortened URL for tracking
            purposes.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect information about how
            you interact with our service, such as the time and date of your
            visits, the pages you visit, and the actions you take.
          </li>
        </ul>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>
            <strong>Shortened URLs:</strong> We use the information collected to
            generate and manage shortened URLs for you. This helps us track
            usage and improve our service.
          </li>
          <li>
            <strong>Analytics:</strong> We may use analytics tools to analyze
            usage data and trends, which helps us improve the service and
            provide better user experiences.
          </li>
        </ul>
        <h2>Data Sharing</h2>
        <ul>
          <li>
            <strong>Third Parties:</strong> We do not share your personal
            information with third parties except as necessary to provide the
            service, comply with legal obligations, or protect our rights.
          </li>
          <li>
            <strong>Google Ads:</strong> In the future, we may use Google Ads to
            display advertisements. Google's use of advertising cookies enables
            it and its partners to serve ads based on your visit to our site and
            other sites on the Internet.
          </li>
        </ul>
        <h2>Your Choices</h2>
        <ul>
          <li>
            <strong>Opt-Out:</strong> You can opt out of personalized
            advertising by visiting Google's Ads Settings. Alternatively, you
            can opt out of a third-party vendor's use of cookies for
            personalized advertising by visiting{" "}
            <a href="https://www.aboutads.info" target="_blank">www.aboutads.info</a>.
          </li>
        </ul>
        <h2>Data Security</h2>
        <ul>
          <li>
            <strong>Security Measures:</strong> We take reasonable measures to
            protect your information against unauthorized access, alteration,
            disclosure, or destruction.
          </li>
        </ul>
        <h2>Updates to this Policy</h2>
        <ul>
          <li>
            <strong>Policy Changes:</strong> We may update this Privacy Policy
            from time to time. We will notify you of any changes by posting the
            new Privacy Policy on this page.
          </li>
        </ul>
        <div className="policy-contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{' '}
          <a href="mailto:">your.email@example.com</a>.
        </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
