import { Container } from 'react-bootstrap'
import './NewsLetter.css'
export const NewsLetter = () => {
    return (
        <Container>
        <div className='entire-box'>
            <div className="div">
                <div className="div-2">
                    <div className="column">
                        <div className="div-3">
                            <div className="div-4">Subscribe Newsletter</div>
                            <div className="div-5">The Travel</div>
                            <div className="div-6">
                                Get inspired! Receive travel discounts, tips and behind the
                                scenes stories.
                            </div>
                            <div className="div-7">
                                <div className="div-8">
                                    <input type='text' className="div-9" placeholder='Your email address' style={{ outline: 'none', border: 'none', boxShadow: 'none', width: '300px' }}></input>
                                </div>
                                <button className="div-10">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="column-2">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d0bac04e6aba987294ce37d2e80dc7895dad2462cef06b5d6a2781c5315b2c2?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                            className="img"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}