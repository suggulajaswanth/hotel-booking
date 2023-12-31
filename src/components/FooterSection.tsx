import { ReactElement } from "react";
import './FooterSection.css'

export const FooterSection = (): ReactElement => {
  return (

    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h6>Top Locations</h6>

          </div>
          <div className='footer-link-items'>
            <h6>Top Collections</h6>

          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h6>About InstaFarm</h6>

          </div>
          <div className='footer-link-items'>
            <h6>Support</h6>
          </div>
        </div>
      </div>

    </div>

  )
};