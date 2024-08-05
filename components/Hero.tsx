import React from "react";

const Hero = () => {
  return (
    <div style={{ backgroundColor: '#ff4a3b' }} className='pl-20 pt-4 text-left'>
      <span style={{ color: '#fff', fontSize: '24px', fontStyle: 'normal', fontWeight: 400, letterSpacing: '10.8px', lineHeight: 'normal' }}>
        Always Innovative
      </span>
      <h2 style={{ color: '#fff', fontSize: '130px', fontStyle: 'normal', fontWeight: 400, lineHeight: '130px', marginBottom: '30px', marginTop: '20px' }}>
        Your Design<br />Our Solutions
      </h2>
      <p style={{ color: '#fff', display: 'flex', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, letterSpacing: '0.64px', lineHeight: '29px', maxWidth: '615px' }}>
        We are helping clients create WordPress websites with our talented experts. Quam nulla porttitor massa id neque. Est placerat in egestas.
      </p>
      <div>
        <button style={{ marginTop: '70px' }}>Read case study</button>
      </div>
    </div>
  );
}

export default Hero;





