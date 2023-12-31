import { ReactElement, useContext } from "react"
import './Test.css'
import { Actions, Context } from "./reducer"
import { Container } from "react-bootstrap";

export const Test = (): ReactElement => {
    const { dispatch } = useContext(Context);

    const openLoginPopUp = () => {
        dispatch({
            type: Actions.SET_LOGIN,
            data: true
        })
    }

    return (
        <div className="div">
            <div className="div-2">
                <div className="div-8">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f356ae1a24735400c273a45913f7587ad0b0835dcb55a91dee6aff720991316e?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                        className="img-3"
                    />
                    <div className="div-9">
                        <div className="div-10">Explore</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8831b9e4f5180a39ba1901fafe581fc1c2be1696c3d7ba99752c50bcf0e7551c?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                            className="img-4"
                        />
                        <button className="div-11">List Your Farm</button>
                        <div className="div-12">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/45093f2328ded81dc23fc395e57af793e47523600e3d3e8ab61defab9039ab89?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-5"
                            />
                            <div className="div-13">+91 77777 77777</div>
                        </div>
                    </div>
                    <div className="div-14">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/992e134296e6e4fc22a0ef0e7e25849b90edf34cd113dc40d1532bbd8e7b3d9f?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                            className="img-6"
                        />
                        <div className="div-15" onClick={openLoginPopUp}>Login</div>
                    </div>
                </div>
            </div>
            <div className="div-16">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b9ac1424cee016bd743d830fafe802311c275976c19c29dcb79a5bcde50df88d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9ac1424cee016bd743d830fafe802311c275976c19c29dcb79a5bcde50df88d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9ac1424cee016bd743d830fafe802311c275976c19c29dcb79a5bcde50df88d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9ac1424cee016bd743d830fafe802311c275976c19c29dcb79a5bcde50df88d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9ac1424cee016bd743d830fafe802311c275976c19c29dcb79a5bcde50df88d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9ac1424cee016bd743d830fafe802311c275976c19c29dcb79a5bcde50df88d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9ac1424cee016bd743d830fafe802311c275976c19c29dcb79a5bcde50df88d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9ac1424cee016bd743d830fafe802311c275976c19c29dcb79a5bcde50df88d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                    className="img-7"
                />
                <div className="div-17">
                    <div className="div-18">
                        Welcome
                        <br />
                        <span style={{ fontWeight: "800", fontStyle: "italic", fontSize: "23.010000228881836px" }}>
                            Find Your Next Stay
                        </span>
                    </div>
                    <div className="div-19">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ee04cb17b7c71ef6541cad7164faebbed24ead8f46aa8b5a7774000bce4ea99?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                            className="img-8"
                        />
                        <input type="text" className="div-20" placeholder="Search Farm"></input>
                        <div className="div-21">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3497901f0236f40efaf1ff0634d0a88a5d3e142676259bfd387a1b7a81be9b83?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-9"
                            />
                        </div>
                    </div>
                </div>
                <div className="div-22">Escape | Rejuvenate</div>
                <div className="div-23">
                    Experience Life & <br />
                    Explore the Nature
                </div>
                <div className="div-24">Special Offers Tailored to Your Dreams</div>

            </div>
            <div style={{alignSelf:"center"}}>
                <form className='search'>
                    <div className='search-container'>
                        <label >Location</label>
                        <input id='location' type='text' placeholder='Search your location' />
                    </div>
                    <div className='search-container'>
                        <label >Guests</label>
                        <input id='guests' type='text'  />
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
            </div>
            <div className="div-55">
                <div className="div-56">
                    <div className="div-57">Discover Your Dream Retreat</div>
                    <div className="div-58">
                        Explore Our Serene Farmhouses & Play Areas
                    </div>
                </div>
                <div className="div-59">See more places</div>
            </div>
            <div className="div-60">
                <div className="div-61">
                    <div className="column-6">
                        <div className="div-62">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0c6546b935c4bfc56178a56f085efc57fd73c29afb74655aa336a263a8da93e?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0c6546b935c4bfc56178a56f085efc57fd73c29afb74655aa336a263a8da93e?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0c6546b935c4bfc56178a56f085efc57fd73c29afb74655aa336a263a8da93e?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0c6546b935c4bfc56178a56f085efc57fd73c29afb74655aa336a263a8da93e?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0c6546b935c4bfc56178a56f085efc57fd73c29afb74655aa336a263a8da93e?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0c6546b935c4bfc56178a56f085efc57fd73c29afb74655aa336a263a8da93e?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0c6546b935c4bfc56178a56f085efc57fd73c29afb74655aa336a263a8da93e?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0c6546b935c4bfc56178a56f085efc57fd73c29afb74655aa336a263a8da93e?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-16"
                            />
                            <div className="div-63">
                                <div className="div-64">XXXXXXXXXXXX</div>
                                <div className="div-65">
                                    <div className="div-66">XXXXX</div>
                                    <div className="div-67">•</div>
                                    <div className="div-68">XXXXX</div>
                                    <div className="div-69">•</div>
                                    <div className="div-70">XXXXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-7">
                        <div className="div-71">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/77044f3a7b497dabc35a8ebc8cd9b81d2fd4ba09930a99b116d473c9a36a5fe6?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/77044f3a7b497dabc35a8ebc8cd9b81d2fd4ba09930a99b116d473c9a36a5fe6?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77044f3a7b497dabc35a8ebc8cd9b81d2fd4ba09930a99b116d473c9a36a5fe6?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/77044f3a7b497dabc35a8ebc8cd9b81d2fd4ba09930a99b116d473c9a36a5fe6?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/77044f3a7b497dabc35a8ebc8cd9b81d2fd4ba09930a99b116d473c9a36a5fe6?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77044f3a7b497dabc35a8ebc8cd9b81d2fd4ba09930a99b116d473c9a36a5fe6?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/77044f3a7b497dabc35a8ebc8cd9b81d2fd4ba09930a99b116d473c9a36a5fe6?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/77044f3a7b497dabc35a8ebc8cd9b81d2fd4ba09930a99b116d473c9a36a5fe6?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-17"
                            />
                            <div className="div-72">
                                <div className="div-73">XXXXXXXXXXXX</div>
                                <div className="div-74">
                                    <div className="div-75">XXXXX</div>
                                    <div className="div-76">•</div>
                                    <div className="div-77">XXXXX</div>
                                    <div className="div-78">•</div>
                                    <div className="div-79">XXXXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-8">
                        <div className="div-80">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7a66847cd51ed8ffd2c681e0d01509adf369b860a8c575a00f10e4c56fa11eee?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a66847cd51ed8ffd2c681e0d01509adf369b860a8c575a00f10e4c56fa11eee?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a66847cd51ed8ffd2c681e0d01509adf369b860a8c575a00f10e4c56fa11eee?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a66847cd51ed8ffd2c681e0d01509adf369b860a8c575a00f10e4c56fa11eee?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a66847cd51ed8ffd2c681e0d01509adf369b860a8c575a00f10e4c56fa11eee?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a66847cd51ed8ffd2c681e0d01509adf369b860a8c575a00f10e4c56fa11eee?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a66847cd51ed8ffd2c681e0d01509adf369b860a8c575a00f10e4c56fa11eee?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a66847cd51ed8ffd2c681e0d01509adf369b860a8c575a00f10e4c56fa11eee?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-18"
                            />
                            <div className="div-81">
                                <div className="div-82">XXXXXXXXXXXX</div>
                                <div className="div-83">
                                    <div className="div-84">XXXXX</div>
                                    <div className="div-85">•</div>
                                    <div className="div-86">XXXXX</div>
                                    <div className="div-87">•</div>
                                    <div className="div-88">XXXXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-89">
                <div className="div-90">
                    <div className="column-9">
                        <div className="div-91">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/70c445f238bd27a2b7cef0404b4b3304ab584ae9fd61b0efa7dab14d467c0d4d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70c445f238bd27a2b7cef0404b4b3304ab584ae9fd61b0efa7dab14d467c0d4d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70c445f238bd27a2b7cef0404b4b3304ab584ae9fd61b0efa7dab14d467c0d4d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70c445f238bd27a2b7cef0404b4b3304ab584ae9fd61b0efa7dab14d467c0d4d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70c445f238bd27a2b7cef0404b4b3304ab584ae9fd61b0efa7dab14d467c0d4d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70c445f238bd27a2b7cef0404b4b3304ab584ae9fd61b0efa7dab14d467c0d4d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70c445f238bd27a2b7cef0404b4b3304ab584ae9fd61b0efa7dab14d467c0d4d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70c445f238bd27a2b7cef0404b4b3304ab584ae9fd61b0efa7dab14d467c0d4d?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-19"
                            />
                            <div className="div-92">
                                <div className="div-93">XXXXXXXXXXXX</div>
                                <div className="div-94">
                                    <div className="div-95">XXXXX</div>
                                    <div className="div-96">•</div>
                                    <div className="div-97">XXXXX</div>
                                    <div className="div-98">•</div>
                                    <div className="div-99">XXXXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-10">
                        <div className="div-100">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/16bd8af57c6d09ca88ff2ad869248ca0b762a157e61b752478e9e1b9d71f7135?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bd8af57c6d09ca88ff2ad869248ca0b762a157e61b752478e9e1b9d71f7135?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bd8af57c6d09ca88ff2ad869248ca0b762a157e61b752478e9e1b9d71f7135?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bd8af57c6d09ca88ff2ad869248ca0b762a157e61b752478e9e1b9d71f7135?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bd8af57c6d09ca88ff2ad869248ca0b762a157e61b752478e9e1b9d71f7135?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bd8af57c6d09ca88ff2ad869248ca0b762a157e61b752478e9e1b9d71f7135?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bd8af57c6d09ca88ff2ad869248ca0b762a157e61b752478e9e1b9d71f7135?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bd8af57c6d09ca88ff2ad869248ca0b762a157e61b752478e9e1b9d71f7135?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-20"
                            />
                            <div className="div-101">
                                <div className="div-102">XXXXXXXXXXXX</div>
                                <div className="div-103">
                                    <div className="div-104">XXXXX</div>
                                    <div className="div-105">•</div>
                                    <div className="div-106">XXXXX</div>
                                    <div className="div-107">•</div>
                                    <div className="div-108">XXXXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-11">
                        <div className="div-109">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34fb29d636bf2abdc28419a442b8919945391746fa127f25c4a4229107fa0162?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fb29d636bf2abdc28419a442b8919945391746fa127f25c4a4229107fa0162?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fb29d636bf2abdc28419a442b8919945391746fa127f25c4a4229107fa0162?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fb29d636bf2abdc28419a442b8919945391746fa127f25c4a4229107fa0162?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fb29d636bf2abdc28419a442b8919945391746fa127f25c4a4229107fa0162?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fb29d636bf2abdc28419a442b8919945391746fa127f25c4a4229107fa0162?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fb29d636bf2abdc28419a442b8919945391746fa127f25c4a4229107fa0162?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fb29d636bf2abdc28419a442b8919945391746fa127f25c4a4229107fa0162?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-21"
                            />
                            <div className="div-110">
                                <div className="div-111">XXXXXXXXXXXX</div>
                                <div className="div-112">
                                    <div className="div-113">XXXXX</div>
                                    <div className="div-114">•</div>
                                    <div className="div-115">XXXXX</div>
                                    <div className="div-116">•</div>
                                    <div className="div-117">XXXXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-118">
                <div className="div-119">
                    <div className="column-12">
                        <div className="div-120">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc1b1bb0b4783c684b4945cbd09dd0e58fe185b0f09ba24a6cf93b6d2e6bea81?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc1b1bb0b4783c684b4945cbd09dd0e58fe185b0f09ba24a6cf93b6d2e6bea81?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc1b1bb0b4783c684b4945cbd09dd0e58fe185b0f09ba24a6cf93b6d2e6bea81?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc1b1bb0b4783c684b4945cbd09dd0e58fe185b0f09ba24a6cf93b6d2e6bea81?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc1b1bb0b4783c684b4945cbd09dd0e58fe185b0f09ba24a6cf93b6d2e6bea81?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc1b1bb0b4783c684b4945cbd09dd0e58fe185b0f09ba24a6cf93b6d2e6bea81?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc1b1bb0b4783c684b4945cbd09dd0e58fe185b0f09ba24a6cf93b6d2e6bea81?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc1b1bb0b4783c684b4945cbd09dd0e58fe185b0f09ba24a6cf93b6d2e6bea81?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-22"
                            />
                            <div className="div-121">
                                <div className="div-122">XXXXXXXXXXXX</div>
                                <div className="div-123">
                                    <div className="div-124">XXXXX</div>
                                    <div className="div-125">•</div>
                                    <div className="div-126">XXXXX</div>
                                    <div className="div-127">•</div>
                                    <div className="div-128">XXXXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-13">
                        <div className="div-129">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/21892b2386b0b26a9af9648573ffe335ed274d6ae41c56e8a84b5b25b47a92ef?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/21892b2386b0b26a9af9648573ffe335ed274d6ae41c56e8a84b5b25b47a92ef?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21892b2386b0b26a9af9648573ffe335ed274d6ae41c56e8a84b5b25b47a92ef?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/21892b2386b0b26a9af9648573ffe335ed274d6ae41c56e8a84b5b25b47a92ef?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/21892b2386b0b26a9af9648573ffe335ed274d6ae41c56e8a84b5b25b47a92ef?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21892b2386b0b26a9af9648573ffe335ed274d6ae41c56e8a84b5b25b47a92ef?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/21892b2386b0b26a9af9648573ffe335ed274d6ae41c56e8a84b5b25b47a92ef?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/21892b2386b0b26a9af9648573ffe335ed274d6ae41c56e8a84b5b25b47a92ef?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-23"
                            />
                            <div className="div-130">
                                <div className="div-131">XXXXXXXXXXXX</div>
                                <div className="div-132">
                                    <div className="div-133">XXXXX</div>
                                    <div className="div-134">•</div>
                                    <div className="div-135">XXXXX</div>
                                    <div className="div-136">•</div>
                                    <div className="div-137">XXXXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-14">
                        <div className="div-138">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8fc23623cd4cdd32195504c0a44c16530327bcec1c6b73c18fa9be72d55df90?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8fc23623cd4cdd32195504c0a44c16530327bcec1c6b73c18fa9be72d55df90?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8fc23623cd4cdd32195504c0a44c16530327bcec1c6b73c18fa9be72d55df90?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8fc23623cd4cdd32195504c0a44c16530327bcec1c6b73c18fa9be72d55df90?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8fc23623cd4cdd32195504c0a44c16530327bcec1c6b73c18fa9be72d55df90?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8fc23623cd4cdd32195504c0a44c16530327bcec1c6b73c18fa9be72d55df90?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8fc23623cd4cdd32195504c0a44c16530327bcec1c6b73c18fa9be72d55df90?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8fc23623cd4cdd32195504c0a44c16530327bcec1c6b73c18fa9be72d55df90?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-24"
                            />
                            <div className="div-139">
                                <div className="div-140">XXXXXXXXXXXX</div>
                                <div className="div-141">
                                    <div className="div-142">XXXXX</div>
                                    <div className="div-143">•</div>
                                    <div className="div-144">XXXXX</div>
                                    <div className="div-145">•</div>
                                    <div className="div-146">XXXXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-147">
                <div className="div-148">
                    <div className="div-149">Awaken Your Inner Wanderlust</div>
                    <div className="div-150">
                        Celebrate the Season with Us! Whether you're staying close to home
                        or venturing to new places, InstaFarms has the travel tools to
                        make your journey seamless. Explore our serene farmhouses and play
                        areas for an unforgettable experience.
                    </div>
                </div>{" "}
                <div className="div-151">See All</div>
            </div>{" "}
            <div className="div-152">
                <div className="div-153">
                    <div className="column-15">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                            className="img-25"
                        />
                    </div>{" "}
                    <div className="column-16">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                            className="img-26"
                        />
                    </div>{" "}
                    <div className="column-17">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                            className="img-27"
                        />
                    </div>{" "}
                    <div className="column-18">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b79891a247d9e8a0b4abcd78fde226af74eb54aaa1efd482895a78375c450d0?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                            className="img-28"
                        />
                    </div>
                </div>
            </div>{" "}
            <div className="div-154">
                <div className="div-155">
                    <div className="div-156">Awaken Your Inner Wanderlust</div>{" "}
                    <div className="div-157">
                        Celebrate the Season with Us! Whether you're staying close to home
                        or venturing to new places, InstaFarms has the travel tools to
                        make your journey seamless. Explore our serene farmhouses and play
                        areas for an unforgettable experience.
                    </div>
                </div>
                <div className="div-158">See All</div>
            </div>
            <div className="div-159">
                <div className="div-160">
                    <div className="column-19">
                        <div className="div-161">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e627bc91-7340-4c37-8388-42cb4acb97ba?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e627bc91-7340-4c37-8388-42cb4acb97ba?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e627bc91-7340-4c37-8388-42cb4acb97ba?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e627bc91-7340-4c37-8388-42cb4acb97ba?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e627bc91-7340-4c37-8388-42cb4acb97ba?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e627bc91-7340-4c37-8388-42cb4acb97ba?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e627bc91-7340-4c37-8388-42cb4acb97ba?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e627bc91-7340-4c37-8388-42cb4acb97ba?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-29"
                            />
                            <div className="div-162">Farm House Stay, Hyderabad</div>
                            <div className="div-163">
                                Entire Farm I Max 12 Guests | 4 Rooms | 5 Baths
                            </div>
                        </div>
                    </div>
                    <div className="column-20">
                        <div className="div-164">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db90a655-3153-4592-a458-0b7695a04257?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db90a655-3153-4592-a458-0b7695a04257?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db90a655-3153-4592-a458-0b7695a04257?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db90a655-3153-4592-a458-0b7695a04257?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db90a655-3153-4592-a458-0b7695a04257?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db90a655-3153-4592-a458-0b7695a04257?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db90a655-3153-4592-a458-0b7695a04257?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db90a655-3153-4592-a458-0b7695a04257?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-30"
                            />
                            <div className="div-165">Farm House Stay, Hyderabad</div>
                            <div className="div-166">
                                Entire Farm I Max 12 Guests | 4 Rooms | 5 Baths
                            </div>
                        </div>
                    </div>
                    <div className="column-21">
                        <div className="div-167">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1378e4f9-adae-4f63-85ac-3a9421b12767?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1378e4f9-adae-4f63-85ac-3a9421b12767?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1378e4f9-adae-4f63-85ac-3a9421b12767?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1378e4f9-adae-4f63-85ac-3a9421b12767?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1378e4f9-adae-4f63-85ac-3a9421b12767?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1378e4f9-adae-4f63-85ac-3a9421b12767?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1378e4f9-adae-4f63-85ac-3a9421b12767?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1378e4f9-adae-4f63-85ac-3a9421b12767?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-31"
                            />
                            <div className="div-168">Farm House Stay, Hyderabad</div>
                            <div className="div-169">
                                Entire Farm I Max 12 Guests | 4 Rooms | 5 Baths
                            </div>
                        </div>
                    </div>
                    <div className="column-22">
                        <div className="div-170">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8f00005f-f7e5-4b9e-b1fe-34b073b23e36?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f00005f-f7e5-4b9e-b1fe-34b073b23e36?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f00005f-f7e5-4b9e-b1fe-34b073b23e36?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f00005f-f7e5-4b9e-b1fe-34b073b23e36?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f00005f-f7e5-4b9e-b1fe-34b073b23e36?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f00005f-f7e5-4b9e-b1fe-34b073b23e36?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f00005f-f7e5-4b9e-b1fe-34b073b23e36?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f00005f-f7e5-4b9e-b1fe-34b073b23e36?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-32"
                            />
                            <div className="div-171">Farm House Stay, Hyderabad</div>
                            <div className="div-172">
                                Entire Farm I Max 12 Guests | 4 Rooms | 5 Baths
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-173">
                <div className="div-174">View Farm</div>
                <div className="div-175">
                    <div className="div-176">₹ 33,000</div>
                    <div className="div-177">₹ 23,000</div>
                </div>
                <div className="div-178">View Farm</div>
                <div className="div-179">
                    <div className="div-180">₹ 33,000</div>
                    <div className="div-181">₹ 23,000</div>
                </div>
                <div className="div-182">View Farm</div>
                <div className="div-183">
                    <div className="div-184">₹ 33,000</div>
                    <div className="div-185">₹ 23,000</div>
                </div>
                <div className="div-186">View Farm</div>
                <div className="div-187">
                    <div className="div-188">₹ 33,000</div>
                    <div className="div-189">₹ 23,000</div>
                </div>
            </div>
            <div className="div-190">
                <div className="div-191">
                    <div className="div-192">
                        Fall into travel
                        <br />
                    </div>
                    <div className="div-193">
                        Going somewhere to celebrate this season? Whether you’re going
                        home or somewhere to roam, we’ve got the travel tools to get you
                        to your destination.
                    </div>
                </div>
                <div className="div-194">See All</div>
            </div>
            <div className="div-195">
                <div className="div-196">
                    <div className="column-23">
                        <div className="div-197">
                            <div className="div-198">
                                <div className="div-199">Backpacking to Serene Farms</div>
                                <div className="div-200">
                                    <div className="div-201">From</div>
                                    <div className="div-202">
                                        <span style={{ fontWeight: 700, color: "rgba(255,255,255,1)" }}>
                                            ₹
                                        </span>
                                        <span style={{ fontWeight: 700 }}>7000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="div-203">
                                Traveling is a unique experience as it's the best way to
                                unplug from the pushes and pulls of daily life. It helps us to
                                forget about our problems, frustrations, and fears at home.
                                During our journey, we experience life in different ways. We
                                explore new places, cultures, cuisines, traditions, and ways
                                of living.
                            </div>{" "}
                            <div className="div-204">Book Farm House</div>
                        </div>
                    </div>{" "}
                    <div className="column-24">
                        <div className="div-205">
                            <div className="div-206">
                                <div className="div-207">
                                    <div className="column-25">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0c1991485da69ec82739feec43162d7dba3725ec07dac4d51413f85eed8ae?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0c1991485da69ec82739feec43162d7dba3725ec07dac4d51413f85eed8ae?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0c1991485da69ec82739feec43162d7dba3725ec07dac4d51413f85eed8ae?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0c1991485da69ec82739feec43162d7dba3725ec07dac4d51413f85eed8ae?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0c1991485da69ec82739feec43162d7dba3725ec07dac4d51413f85eed8ae?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0c1991485da69ec82739feec43162d7dba3725ec07dac4d51413f85eed8ae?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0c1991485da69ec82739feec43162d7dba3725ec07dac4d51413f85eed8ae?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0c1991485da69ec82739feec43162d7dba3725ec07dac4d51413f85eed8ae?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                            className="img-33"
                                        />
                                    </div>{" "}
                                    <div className="column-26">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5eee8f0b72b2ce1b6fff4e66274f1292eb7764e0fa6ebec38a60b57ef09bd85b?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eee8f0b72b2ce1b6fff4e66274f1292eb7764e0fa6ebec38a60b57ef09bd85b?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eee8f0b72b2ce1b6fff4e66274f1292eb7764e0fa6ebec38a60b57ef09bd85b?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eee8f0b72b2ce1b6fff4e66274f1292eb7764e0fa6ebec38a60b57ef09bd85b?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eee8f0b72b2ce1b6fff4e66274f1292eb7764e0fa6ebec38a60b57ef09bd85b?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eee8f0b72b2ce1b6fff4e66274f1292eb7764e0fa6ebec38a60b57ef09bd85b?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eee8f0b72b2ce1b6fff4e66274f1292eb7764e0fa6ebec38a60b57ef09bd85b?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eee8f0b72b2ce1b6fff4e66274f1292eb7764e0fa6ebec38a60b57ef09bd85b?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                            className="img-34"
                                        />
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="div-208">
                                <div className="div-209">
                                    <div className="column-27">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bb29dab24d0dd652d0ddabb00f2fc02d3dfb0e57319d306d65f7c1891e4a602c?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb29dab24d0dd652d0ddabb00f2fc02d3dfb0e57319d306d65f7c1891e4a602c?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb29dab24d0dd652d0ddabb00f2fc02d3dfb0e57319d306d65f7c1891e4a602c?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb29dab24d0dd652d0ddabb00f2fc02d3dfb0e57319d306d65f7c1891e4a602c?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb29dab24d0dd652d0ddabb00f2fc02d3dfb0e57319d306d65f7c1891e4a602c?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb29dab24d0dd652d0ddabb00f2fc02d3dfb0e57319d306d65f7c1891e4a602c?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb29dab24d0dd652d0ddabb00f2fc02d3dfb0e57319d306d65f7c1891e4a602c?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb29dab24d0dd652d0ddabb00f2fc02d3dfb0e57319d306d65f7c1891e4a602c?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                            className="img-35"
                                        />
                                    </div>{" "}
                                    <div className="column-28">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d752ec2b43f6734c8a280994f8bd39e6592dec0a252bdbfc3e13f3d9f69e9543?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d752ec2b43f6734c8a280994f8bd39e6592dec0a252bdbfc3e13f3d9f69e9543?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d752ec2b43f6734c8a280994f8bd39e6592dec0a252bdbfc3e13f3d9f69e9543?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d752ec2b43f6734c8a280994f8bd39e6592dec0a252bdbfc3e13f3d9f69e9543?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d752ec2b43f6734c8a280994f8bd39e6592dec0a252bdbfc3e13f3d9f69e9543?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d752ec2b43f6734c8a280994f8bd39e6592dec0a252bdbfc3e13f3d9f69e9543?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d752ec2b43f6734c8a280994f8bd39e6592dec0a252bdbfc3e13f3d9f69e9543?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d752ec2b43f6734c8a280994f8bd39e6592dec0a252bdbfc3e13f3d9f69e9543?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                            className="img-36"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="div-210">
                <div className="div-211">
                    <div className="div-212">
                        <div className="column-29">
                            <div className="div-213">
                                <div className="div-214">The Travel</div>{" "}
                                <div className="div-215">
                                    Get inspired! Receive travel discounts, tips and behind the
                                    scenes stories.
                                </div>{" "}
                                <div className="div-216">
                                    <div className="div-217">
                                        <div className="div-218">Your email address</div>
                                    </div>{" "}
                                    <div className="div-219">Subscribe</div>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="column-30">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d0bac04e6aba987294ce37d2e80dc7895dad2462cef06b5d6a2781c5315b2c2?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-37"
                            />
                        </div>
                    </div>
                </div>{" "}
                <div className="div-220">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a32f5f8ee4eafee631cd010c2dda6293aa22d91216880bb66a7443702460de03?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a32f5f8ee4eafee631cd010c2dda6293aa22d91216880bb66a7443702460de03?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a32f5f8ee4eafee631cd010c2dda6293aa22d91216880bb66a7443702460de03?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a32f5f8ee4eafee631cd010c2dda6293aa22d91216880bb66a7443702460de03?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a32f5f8ee4eafee631cd010c2dda6293aa22d91216880bb66a7443702460de03?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a32f5f8ee4eafee631cd010c2dda6293aa22d91216880bb66a7443702460de03?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a32f5f8ee4eafee631cd010c2dda6293aa22d91216880bb66a7443702460de03?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a32f5f8ee4eafee631cd010c2dda6293aa22d91216880bb66a7443702460de03?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                        className="img-38"
                    />{" "}
                    <div className="div-221">
                        <div className="div-222">
                            <div className="column-31">
                                <div className="div-223">
                                    <div className="div-224">Top Locations</div>{" "}
                                    <div className="div-225">Lonavala</div>{" "}
                                    <div className="div-226">Alibaug</div>{" "}
                                    <div className="div-227">Karjat</div>{" "}
                                    <div className="div-228">Kasauli</div>{" "}
                                    <div className="div-229">Mahabaleshwar</div>{" "}
                                    <div className="div-230">Nashik</div>{" "}
                                    <div className="div-231">Goa</div>{" "}
                                    <div className="div-232">Shimla</div>
                                </div>
                            </div>{" "}
                            <div className="column-32">
                                <div className="div-233">
                                    <div className="div-234">
                                        <div className="div-235">Top Collections</div>{" "}
                                        <div className="div-236">About StayVista</div>
                                    </div>{" "}
                                    <div className="div-237">
                                        <div className="div-238">
                                            <div className="column-33">
                                                <div className="div-239">
                                                    <div className="div-240">Luxury Villas</div>{" "}
                                                    <div className="div-241">Newly Launched</div>{" "}
                                                    <div className="div-242">Festive Favourites</div>{" "}
                                                    <div className="div-243">
                                                        Heated Pool Collection
                                                    </div>{" "}
                                                    <div className="div-244">Pet-Friendly Villas</div>{" "}
                                                    <div className="div-245">
                                                        Impeccable View Villas
                                                    </div>{" "}
                                                    <div className="div-246">
                                                        Corporate Offsite Villas
                                                    </div>{" "}
                                                    <div className="div-247">Kid-Friendly Villas</div>{" "}
                                                    <div className="div-248">
                                                        Off for your Get-aways
                                                    </div>{" "}
                                                    <div className="div-249">Handpicked Villas</div>{" "}
                                                    <div className="div-250">Beach Villas</div>{" "}
                                                    <div className="div-251">
                                                        Celebrity Choice Villas
                                                    </div>{" "}
                                                    <div className="div-252">
                                                        Stay Access Collection
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="column-34">
                                                <div className="div-253">
                                                    <div className="div-254">Our story</div>{" "}
                                                    <div className="div-255">List your Villa</div>{" "}
                                                    <div className="div-256">Offers</div>{" "}
                                                    <div className="div-257">Plan an offsite</div>{" "}
                                                    <div className="div-258">
                                                        Events and Experiences
                                                    </div>{" "}
                                                    <div className="div-259">FAQs</div>{" "}
                                                    <div className="div-260">
                                                        Gift card - Flat 5% Off
                                                    </div>{" "}
                                                    <div className="div-261">Blogs</div>{" "}
                                                    <div className="div-262">Careers</div>{" "}
                                                    <div className="div-263">Covid Policy</div>{" "}
                                                    <div className="div-264">
                                                        StayVista Design Services
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="column-35">
                                <div className="div-265">
                                    <div className="div-266">Support</div>{" "}
                                    <div className="div-267">Contact us</div>{" "}
                                    <div className="div-268">Cancellation policy</div>{" "}
                                    <div className="div-269">Refund policy</div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="div-270" />{" "}
                    <div className="div-271">
                        POPULAR DESTINATION TO RENT A HOLIDAY HOME IN INDIA
                    </div>{" "}
                    <div className="div-272">
                        <div className="div-273">
                            <div className="column-36">
                                <div className="div-274">
                                    <div className="div-275">Bungalows</div>{" "}
                                    <div className="div-276">Bungalows in Lonavala</div>{" "}
                                    <div className="div-277">Bungalows in Igatpuri</div>{" "}
                                    <div className="div-278">Bungalows in Alibaug</div>{" "}
                                    <div className="div-279">Bungalows in Karjat</div>{" "}
                                    <div className="div-280">Bungalows in Ahmedabad</div>
                                </div>
                            </div>{" "}
                            <div className="column-37">
                                <div className="div-281">
                                    <div className="div-282">Cottages</div>{" "}
                                    <div className="div-283">Cottages in Manali</div>{" "}
                                    <div className="div-284">Cottages in Mussoorie</div>{" "}
                                    <div className="div-285">Cottages in Shimla</div>{" "}
                                    <div className="div-286">Cottages in Coorg</div>{" "}
                                    <div className="div-287">Cottages in Wayanad</div>
                                </div>
                            </div>{" "}
                            <div className="column-38">
                                <div className="div-288">
                                    <div className="div-289">Luxury Villas</div>{" "}
                                    <div className="div-290">Luxury villas in Bangalore</div>{" "}
                                    <div className="div-291">Luxury villas in Kochi</div>{" "}
                                    <div className="div-292">Luxury villas in Goa</div>{" "}
                                    <div className="div-293">Luxury villas in Chennai</div>{" "}
                                    <div className="div-294">Luxury villas in Kasauli</div>
                                </div>
                            </div>{" "}
                            <div className="column-39">
                                <div className="div-295">
                                    <div className="div-296">Homestay</div>{" "}
                                    <div className="div-297">Homestay in Ooty</div>{" "}
                                    <div className="div-298">Homestay in Kodaikanal</div>{" "}
                                    <div className="div-299">Homestay in Jaipur</div>{" "}
                                    <div className="div-300">Homestay in Udaipur</div>{" "}
                                    <div className="div-301">Homestay in Gangtok</div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="div-302">
                        <div className="div-303">
                            <div className="div-304">Privacy</div>{" "}
                            <div className="div-305" />{" "}
                            <div className="div-306">Terms & Conditions</div>{" "}
                            <div className="div-307" />{" "}
                            <div className="div-308">Sitemap</div>
                        </div>{" "}
                        <div className="div-309">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e3e07587765ab83d6c38f9b20e813d9f6122108af95eeae207657ba5f16846c7?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e07587765ab83d6c38f9b20e813d9f6122108af95eeae207657ba5f16846c7?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e07587765ab83d6c38f9b20e813d9f6122108af95eeae207657ba5f16846c7?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e07587765ab83d6c38f9b20e813d9f6122108af95eeae207657ba5f16846c7?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e07587765ab83d6c38f9b20e813d9f6122108af95eeae207657ba5f16846c7?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e07587765ab83d6c38f9b20e813d9f6122108af95eeae207657ba5f16846c7?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e07587765ab83d6c38f9b20e813d9f6122108af95eeae207657ba5f16846c7?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e07587765ab83d6c38f9b20e813d9f6122108af95eeae207657ba5f16846c7?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-39"
                            />{" "}
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56c91d76af270032925a64717d601579ae29a7d9833a450ec976b6ea7dff1714?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56c91d76af270032925a64717d601579ae29a7d9833a450ec976b6ea7dff1714?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56c91d76af270032925a64717d601579ae29a7d9833a450ec976b6ea7dff1714?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56c91d76af270032925a64717d601579ae29a7d9833a450ec976b6ea7dff1714?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56c91d76af270032925a64717d601579ae29a7d9833a450ec976b6ea7dff1714?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56c91d76af270032925a64717d601579ae29a7d9833a450ec976b6ea7dff1714?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56c91d76af270032925a64717d601579ae29a7d9833a450ec976b6ea7dff1714?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56c91d76af270032925a64717d601579ae29a7d9833a450ec976b6ea7dff1714?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-40"
                            />{" "}
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/96b0655849ac864ebbd836c01fdd7d4250a1a0f5d097dc2b144134fe7fc52db3?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/96b0655849ac864ebbd836c01fdd7d4250a1a0f5d097dc2b144134fe7fc52db3?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/96b0655849ac864ebbd836c01fdd7d4250a1a0f5d097dc2b144134fe7fc52db3?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/96b0655849ac864ebbd836c01fdd7d4250a1a0f5d097dc2b144134fe7fc52db3?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/96b0655849ac864ebbd836c01fdd7d4250a1a0f5d097dc2b144134fe7fc52db3?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/96b0655849ac864ebbd836c01fdd7d4250a1a0f5d097dc2b144134fe7fc52db3?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/96b0655849ac864ebbd836c01fdd7d4250a1a0f5d097dc2b144134fe7fc52db3?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/96b0655849ac864ebbd836c01fdd7d4250a1a0f5d097dc2b144134fe7fc52db3?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-41"
                            />{" "}
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5831974ca0f25f68d225f1fca969104d359fe12ef1aca2ed344fbb6534defd39?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5831974ca0f25f68d225f1fca969104d359fe12ef1aca2ed344fbb6534defd39?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5831974ca0f25f68d225f1fca969104d359fe12ef1aca2ed344fbb6534defd39?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5831974ca0f25f68d225f1fca969104d359fe12ef1aca2ed344fbb6534defd39?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5831974ca0f25f68d225f1fca969104d359fe12ef1aca2ed344fbb6534defd39?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5831974ca0f25f68d225f1fca969104d359fe12ef1aca2ed344fbb6534defd39?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5831974ca0f25f68d225f1fca969104d359fe12ef1aca2ed344fbb6534defd39?apiKey=b095b3fd612c4e5f9d8931501ca668ff&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5831974ca0f25f68d225f1fca969104d359fe12ef1aca2ed344fbb6534defd39?apiKey=b095b3fd612c4e5f9d8931501ca668ff&"
                                className="img-42"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}