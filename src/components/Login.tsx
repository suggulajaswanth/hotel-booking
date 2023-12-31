import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { Actions, Context } from './reducer';


const LoginPopup = () => {
  const { state, dispatch } = useContext(Context);

  const handleClose = () => {
    dispatch({
      type: Actions.SET_LOGIN,
      data: false
    })
  }

  return (
    <>
      <Modal show={state.login} onHide={handleClose} style={{ position: "fixed", marginTop: "150px" }} >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form >
              <div>
                <label htmlFor="mobileNumber" style={{fontWeight:"600", fontFamily:"larken-medium", fontSize:"20px", marginBottom:"10px"}}>Login with mobile number</label>
                <div style={{ display: "flex", height:"30px"}}>
                  <input
                    id="code"
                    name="mobileNumberCode"
                    placeholder="+91"
                    value={""}
                    disabled={true}
                    style={{ width: "40px", marginRight: "10px" }}
                  />
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder={"    Mobile Number"}
                    value={""}
                    onChange={() => { }}
                    required
                    style={{width:"100%"}}
                  />
                </div>
              </div>
              <div style={{marginTop:"15px", fontSize:'14.5px'}}>
                <p style={{width:"100%"}}>By continuing, I agree to the <b>T&C</b> and <b>Privacy Policy</b> of Insta Farms.</p>
              </div>
              <div>
                <button type="submit" style={{width:"100%", color:"white", backgroundColor:"black", height:"35px", borderRadius:"5px"}}>Continue</button>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <p>Don't have an account? <a href="/signup" style={{ color: "black", fontWeight: "bold" }}>Sign Up</a>.</p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginPopup;
