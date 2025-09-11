import React from 'react';
import styled from 'styled-components';

const Input = ({ label, type = "text", name, placeholder,}) => {
  return (
    <StyledWrapper>
      <div className="form__group field">
        <input 
          type={type} 
          name={name} 
          id={name}
          className="form__field" 
          placeholder={placeholder} 
        />
        <label htmlFor={name} className="form__label">{label}</label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form__group {
    position: relative;
    padding: 15px 0 0;
    width: 100%;
    max-width: 320px; /* 🔹 lebih kecil dari default */
    margin: 0 auto;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #9b9b9b; /* 🔹 warna garis bawah default */
    outline: 0;
    font-size: 16px;
    color: #0d0601; /* 🔹 warna teks input */
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 16px;
    color: #9b9b9b; /* 🔹 warna label default */
    pointer-events: none;
  }

  .form__field:focus {
    padding-bottom: 6px;
    border-width: 3px;
    border-image: linear-gradient(to right, #0D0601, #5D2D0A); /* 🔹 warna fokus */
    border-image-slice: 1;
  }

  .form__field:focus ~ .form__label {
    font-size: 16px;
    color: #0D0601; /* 🔹 warna label saat fokus */
    font-weight: 700;
  }

  /* reset input */
  .form__field:required, .form__field:invalid {
    box-shadow: none;
  }
`;

export default Input;
