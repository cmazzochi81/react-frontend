import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  background: #010101;
  width: 40%;
  z-index: 1;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;
  }
`;

export const FormH1 = styled.h1`
  color: #fff;
  font-size: 1.5rem;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #fff;
  // float: left;
  width: 15%;
  text-align: left;
  float: left;
`;

export const FormInput = styled.input`
 padding: 10px 10px 
 margin-bottom: 10px auto;
 border-radius:4px;
 width:300px;
 clear:left;
`;

export const FormButton = styled.button`
  background: #4285f4;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 300px;
  margin: 10px auto;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const ReCAPTCHADiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;
