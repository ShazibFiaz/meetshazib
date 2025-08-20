import { Container } from './styles'
import { SOCIALS } from '../../constants'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.upwork.com/freelancers/~0148f4014bd2c73604" className="logo">
        <span>MeetShazib</span>
      </a>
      <div>
        <p>
          Happy Coding 😄
        </p>
      </div>
      <div className="social-media">
        {SOCIALS.map((social, index)=>{
          return  <a
          key= {index}
          href={social.url}
          target="_blank"
          rel="noreferrer"
        >
          <img src={social.img} alt={social.title}/>
        </a>
        })}
       
        {/* <a
          href="https://api.whatsapp.com/send/?phone=%2B9279958988&text=Hello+Shazib+I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a> */}
      </div>
    </Container>
  )
}
