import Footer from "./Footer";
import azureIcon from "../resources/img/azure.png";
import awsIcon from "../resources/img/aws.png";
import "./../resources/css/Certificates.css"
function Certificates() {
  return (
    <div >
      <img className="CertLogo" src={azureIcon} alt="Microsoft Azure icon" />
      <section className="TextCert">
        <h3 >Azure Developer Associate</h3>
        <p>
          Valid from<span>24/07/2020 24/07/2022</span>
        </p>
        <p>
          Certification ID <span>H472-5773</span>
        </p>
      </section>
      <img className="CertLogo" src={awsIcon} alt="Microsoft Azure icon" />
      <section className="TextCert">
        <h3>AWS Developer Associate</h3>
        <p>
          Valid from<span>25/04/2019 - 25/04/2022</span>
        </p>
        <p>
          Certification ID <span>PXVP8C31BEQ11J93</span>
        </p>
      </section>
      <img className="CertLogo" src={awsIcon} alt="Microsoft Azure icon" />
      <section className="TextCert">
        <h3>AWS Solutions Architect - Associate</h3>
        <p>
          Valid from<span>10/10/2018 - 10/10/2021</span>
        </p>
        <p>
          Certification ID <span>EV17R761K2VQQ7K0</span>
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Certificates;
