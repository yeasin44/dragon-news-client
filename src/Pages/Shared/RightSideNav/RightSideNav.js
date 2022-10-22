import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGithubLogin = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.result;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleLogin}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button onClick={handleGithubLogin} variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>

      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2 border">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 border">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 border">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 border">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 border">
            Terms & conditions
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
