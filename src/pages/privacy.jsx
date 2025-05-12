
import { Box } from "../components/box";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

export function Privacy() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div>
        <NavBar />
      </div>
      <div className="md:flex md:font-[700] md:text-[36px] md:pt-80 text-white md:pl-40 md:gap-48 font-[700] text-[20px] pt-36 pl-6">
  <a href="/privacy" className="text-[#FE5416] cursor-pointer">
    <span>Privacy Policy</span>
  </a>
  <a href="/terms" className="md:block hidden cursor-pointer">
    <span>Terms Of Services</span>
  </a>
  <a href="/cookie" className="md:block hidden cursor-pointer">
    <span>Cookie Policy</span>
  </a>
</div>


      <div className="md:mt-40 text-white md:font-[400] md:text-[24px] md:pl-28 font-[400] text-[14px] pl-6 pt-8">
      Zenith Studio is committed to respecting your privacy and choices while using our website. This policy applies to information collected by us on our website, www.zenithstudio.in.
      </div>
      <div className="mt-10">
        <Box
          title="1. Personal Information"
          content={
            <>
             We do not collect personally identifiable information about you unless you voluntarily provide it on our website. You may browse our <br /> website without submitting any personal details. However, we collect information you choose to share when you contact us for inquiries, <br /> request quotes, or engage our web services (e.g., website development, design, or maintenance). You may provide this information <br /> directly or indirectly through third-party credentials such as Facebook, Twitter, Google, or LinkedIn. This data may include your name, <br /> email address, phone number, business address, or similar details.<br/> <br/> We use this information to: 
              <li>Respond to your inquiries or process service requests.</li>
            <li>Develop and improve our web services, products, or programs.</li>
             <li> Manage project communications or process orders. </li>
             <br /> <br />
               We also collect non-personally identifiable information, such as standard web log data (e.g., IP address, browser type), device and <br /> software details, and connection information for all website visitors. This data helps us analyze trends, optimize website functionality,<br /> and enhance our services. We may share your information with other Zenith Studio offices worldwide or trusted partners involved in delivering our services. <br /> <br /> Occasionally, we may share data with third-party service providers (e.g., hosting providers, payment processors) who perform tasks on <br />our behalf, under strict confidentiality agreements. We reserve the right to disclose your information to legal or regulatory authorities <br /> or pursuant to judicial orders for compliance. <br /> <br /> In the event of a reorganization, sale, or transfer of all or part of our business, we may share your information with involved third <br /> parties. In such cases, we will seek written assurances to ensure your information remains protected.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="2. Use of Cookies"
          content={
            <>
             Our website uses cookies, which are small text files that store and retrieve information about your visit. Cookies do not inherently <br /> contain personally identifiable information unless you choose to provide it. Each cookie is unique to your device and can only be read by <br /> our server. <br /> <br /> We use cookies to:
             <li> Understand website usage and improve content or service offerings. </li>
             <li>Personalize your experience, such as remembering preferences or streamlining quote requests.</li>
              <br />
              <br />
               You can configure your browser to accept or reject cookies. Most browsers offer a simple procedure to disable cookies, but if you do not <br /> adjust these settings, you will accept cookies from our website. Note that disabling cookies may limit certain features of our website or <br /> services.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="3. Security"
          content={
            <>
             We employ reasonable administrative, technical, and physical measures to safeguard your information from unauthorized access, use, <br /> loss, or destruction. Your data is stored on secure servers managed by Zenith Studio or our authorized agents. <br /> <br /> However, no internet transmission, especially unencrypted data, is entirely secure, and third parties may intercept communications. We <br /> urge you to exercise caution when sharing sensitive information online. Your use of our website and the internet is at your own risk.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="4. Links to Other Websites"
          content={
            <>
            Our website may include links to third-party websites or services (e.g., hosting platforms, analytics tools). Zenith Studio is not <br /> responsible for the privacy practices, statements, or content of these third-party sites.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="5. Access to Your Personal Information"
          content={
            <>
           You may access, update, or correct your personal information held by us, including your profile or preferences, by contacting us at <br /> business@zenithstudio.in. <br /> <br /> You may also request the deletion of your personal information by emailing business@zenithstudio.in. We will make reasonable efforts <br /> to delete your data, though there may be delays, and we cannot guarantee complete removal of content you have posted or made <br /> available through our website.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="6. Authenticity"
          content={
            <>
           Zenith Studio is not responsible for verifying the authenticity of the information you provide. It is your responsibility to ensure the <br /> accuracy and legitimacy of all submitted data.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="7. Children"
          content={
            <>
         Our website is intended for individuals and businesses seeking professional web services. It is not directed at children under thirteen <br /> (13) years of age. We do not knowingly collect or market to children under this age.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="8. Grievance Redressal"
          content={
            <>
          For grievances or complaints regarding the processing of your information, please contact Zenith Studio in writing at <br /> business@zenithstudio.in. We will address your concerns as promptly as possible.
            </>
          }
        />
      </div>
      <div className="mt-20">
        <Box
          title="9. Changes to This Policy"
          content={
            <>
          We may update this Privacy Policy to reflect changes in our practices or legal requirements. When updates occur, we will revise the “Last <br /> Updated” date at the top of this page. Our commitment to protecting your privacy remains unwavering.
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
