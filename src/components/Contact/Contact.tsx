import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { DEVELOPER_DATA } from "../../constants";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href={`mailto:${DEVELOPER_DATA.email}`}><img src={emailIcon} alt="Email" /></a> 
          <a href={`mailto:${DEVELOPER_DATA.email}`}>{DEVELOPER_DATA.email}</a>
        </div>
        <div>
        <a href={`tel:${DEVELOPER_DATA.phone}`}><img src={phoneIcon} alt="Phone No" /></a>
          <a href={`tel:${DEVELOPER_DATA.phone}`}>{DEVELOPER_DATA.phone}</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}