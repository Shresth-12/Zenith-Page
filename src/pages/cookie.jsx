
import { Box } from "../components/box";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

export function Cookie() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div>
        <NavBar />
      </div>
      <div className="md:flex md:font-[700] md:text-[36px] md:pt-80 text-white md:pl-40 md:gap-48 font-[700] text-[20px] pt-36 pl-6">
        <span className=" md:block hidden">Privacy Policy</span> 
        <span className="md:block hidden">Terms Of Services</span>
         <span className="text-[#FE5416]">Cookie Policy</span>
      </div>
      <div className="md:mt-40 text-white md:font-[400] md:text-[24px] md:pl-28 font-[400] text-[14px] pl-6 pt-8">
      Zenith Studio uses cookies on our website, www.zenithstudio.in, to enhance your experience while exploring our web services.
      </div>
      <div className="mt-10">
        <Box
          title="1. What Are Cookies?"
          content={
            <>
            Cookies are small text files stored on your device that save and retrieve information about your visit. Cookies do not inherently collect <br /> personally identifiable information unless you choose to provide it. Each cookie is unique to your device and readable only by our server.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="2. Use of Cookies"
          content={
            <>
            We use cookies to:
             <li> Understand website usage and improve our offerings, such as streamlining navigation or quote requests. </li>
             <li>Personalize your experience, such as remembering preferences or service interests.</li>
             <li>Analyze trends to optimize website performance and service delivery.</li>
              <br />
              <br />
              Cookies do not give us direct access to your personal information unless you voluntarily provide it (e.g., through a contact form).
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="3. Types of Cookies"
          content={
            <>
            <li> Essential Cookies: Enable core website functions, such as navigation or form submissions.</li>
            <li> Analytics Cookies: Collect anonymous data on user behavior (e.g., via Google Analytics) to improve our website.</li>
            <li>Marketing Cookies: Deliver targeted ads based on your interests, often set by third-party platforms.</li>
            <li>Functional Cookies: Remember preferences to enhance your experience.</li>
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="4. Third-Party Cookies"
          content={
            <>
            Third-party services (e.g., Google Analytics, advertising networks) may set cookies to track activity for analytics or ads. These are <br />governed by their respective privacy policies.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="5. Managing Cookies"
          content={
            <>
           You can manage cookies through:
           <br />
           <br />
           <li>Your browser’s settings, which allow you to deny or accept cookies. Most browsers provide simple instructions, but disabling <br /> &nbsp; &nbsp; &nbsp; cookies may limit website functionality.</li>
           <li>Our website’s cookie consent banner, where you can adjust preferences for non-essential cookies. If you do not configure your <br /> &nbsp; &nbsp; &nbsp; browser, you will accept cookies from our website.</li> 
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="6. Security"
          content={
            <>
          We use reasonable measures to protect cookie data from unauthorized access. However, no internet transmission is fully secure, and <br /> you use our website at your own risk.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="7. Legal Compliance"
          content={
            <>
        Our cookie practices comply with applicable laws, including:
        <br />
        <br />
        <li> GDPR and ePrivacy Directive (EU): We obtain consent for non-essential cookies.</li>
        <li> CCPA (California): We disclose cookie usage and offer opt-out options. </li>
        <li>PECR (UK): We inform users about cookie purposes.</li>
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="8. Changes to This Policy"
          content={
            <>
          We may update this Cookie Policy to reflect changes in our practices. Updates will be posted with a revised “Last Updated” date. <br /> Continued use of the website constitutes acceptance.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="9. Contact Us"
          content={
            <>
            For questions or grievances, contact us at business@zenithstudio.in. We will address concerns promptly.
            </>
          }
        />
      </div>
      <div className="mt-32">
        <Footer/>
      </div>
    </div>
  );
}
