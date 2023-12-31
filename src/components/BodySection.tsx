import { ReactElement } from "react"
import './BodySection.css'
import { Container } from "react-bootstrap"

export const BodySection = (): ReactElement => {
    return (
        <div className="container2">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <img
                        src="/images/InstaFarmImg.png"
                        alt=""
                        className="img-fluid"
                        style={{ height: '500px', width: "95%", zIndex: "-1", position: "relative", borderRadius: "15px", marginTop: "10px" }}
                    />
                </div>
                <Container>
                    <form className='search'>
                        <div className='search-container'>
                            <label >Location</label>
                            <input id='location' type='text' placeholder='Search your location' />
                        </div>
                        <div className='search-container'>
                            <label >Guests</label>
                            <input id='guests' type='text' />
                        </div>
                        <div className='row-container'>
                            <div className='search-container'>
                                <label>Check in</label>
                                <input id='check-in' type='date' />
                            </div>
                            <div className='search-container'>
                                <label>Check out</label>
                                <input id='check-out' type='date' />
                            </div>

                        </div>
                        <div className='search-container'>
                            <button
                                className='hero-btn'
                                type='button'
                                onClick={() => console.log("hi")}
                            >
                                search
                            </button>
                        </div>
                    </form>
                    </Container>
                </div>
     
        </div>
        // <Container>

        //     <img src='/images/InstaFarmImg.png' alt="none" className="image-sec"/> 
        //     <h1>Escape | Rejuvenate</h1>
        //     <p>EXPERIENCE LIFE & EXPLORE THE NATURE</p>

        //     <form className='search'>
        //         <div className='search-container'>
        //             <label >Location</label>
        //             <input id='location' type='text' placeholder='Search your location' />
        //         </div>
        //         <div className='search-container'>
        //             <label >Guests</label>
        //             <input id='guests' type='text' />
        //         </div>
        //         <div className='row-container'>
        //             <div className='search-container'>
        //                 <label>Check in</label>
        //                 <input id='check-in' type='date' />
        //             </div>
        //             <div className='search-container'>
        //                 <label>Check out</label>
        //                 <input id='check-out' type='date' />
        //             </div>

        //         </div>
        //         <div className='search-container'>
        //             <button
        //                 className='hero-btn'
        //                 type='submit'
        //                 onClick={() => console.log("hi")}
        //             >
        //                 Explore
        //             </button>
        //         </div> 
        //     </form>
        // </Container>
    )
}