import React from "react";
import "./TermsConditions.css";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
    const navigate = useNavigate()
  return (
    <section className="terms-page">
      <div className="terms-container">
        <h1 className="title">Terms <span className="highlight">and</span> Conditions of Use</h1>

        <p className="desc">
          These Terms and Conditions govern your access to and use of the
          BlitzURL website. By accessing or using the
          Service, you agree to be bound by these Terms and Conditions. If you
          disagree with any part of these terms, you may not access the Service.
        </p>

        <h2>1. Use of the Service</h2>

        <p>
          1.1. You agree to use the Service only for lawful purposes and in
          accordance with these Terms and Conditions.
        </p>
        <p>
          1.2. You are solely responsible for the content of the URLs you
          shorten using the Service. You may not use the Service to link to any
          content that is unlawful, defamatory, obscene, offensive, or otherwise
          objectionable.
        </p>
        <p>
          1.3. You may not use the Service in any manner that could damage,
          disable, overburden, or impair the Service or interfere with any other
          party's use and enjoyment of the Service.
        </p>

        <h2>2. Intellectual Property Rights</h2>

        <p>
          2.1. The content, features, and functionality of the Service are owned
          by BliztURL and are protected by copyright, trademark, and
          other intellectual property laws.
        </p>
        <p>
          2.2. You may not modify, reproduce, distribute, or create derivative
          works based on the content of the Service without the prior written
          consent of BlitzURL.
        </p>

        <h2>3. Limitation of Liability</h2>

        <p>
          3.1. BLitzURL shall not be liable for any damages arising
          out of the use or inability to use the Service, including but not
          limited to direct, indirect, incidental, special, or consequential
          damages.
        </p>
        <p>
          3.2. In no event shall BLitzURL's total liability to you for
          all damages, losses, and causes of action (whether in contract, tort,
          or otherwise) exceed the amount paid by you, if any, for accessing or
          using the Service.
        </p>

        <h2>4. Changes to Terms and Conditions</h2>

        <p>
          4.1. BlitzURL reserves the right to modify or replace these
          Terms and Conditions at any time. Any changes will be effective
          immediately upon posting the revised Terms and Conditions on the
          Service. Your continued use of the Service after any such changes
          constitutes your acceptance of the new Terms and Conditions.
        </p>

        <h2>5. Privacy Policy</h2>

        <p>
          5.1. Your use of the Service is also governed by our Privacy Policy.
          By using the Service, you consent to the collection and use of your
          information as described in our Privacy Policy.
        </p>

        <h2>6. Termination</h2>

        <p>
          6.1. BlitzURL may terminate or suspend your access to the
          Service immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach these Terms and
          Conditions.
        </p>

        <h2>7. Governing Law</h2>

        <p>
          7.1. These Terms and Conditions shall be governed by and construed in
          accordance with the laws, without regard to its
          conflict of law provisions.
        </p>

        <h2>8. Contact Us</h2>

        <p>
          8.1. If you have any questions about these Terms and Conditions,
          please contact us at <strong onClick={() => navigate('/contact')}>Click Here</strong>
        </p>

        <p>
          By using the Service, you acknowledge that you have read, understood,
          and agree to be bound by these Terms and Conditions. If you do not
          agree to these Terms and Conditions, please do not use the Service.
        </p>
      </div>
    </section>
  );
};

export default TermsConditions;
