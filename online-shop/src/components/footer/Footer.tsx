import React from 'react';
import styled from 'styled-components';
// import './Footer.css';

const Wrapper=styled.footer`
	height: 150px;
	background: url("https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt87edf02f20f6dafb/5f974530ab20b60bdceae855/red-felt-bg.jpg") center top / cover no-repeat;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	alighn-items: center;
	img{
		padding-top: 50px;
		width: 200px;
	}
	span {
		padding-top: 50px;
	}
`;
const Footer = () => (
	<Wrapper>
		<a target="blank" href='https://github.com/alexsmirnova13'>
            <img src="https://www.seekpng.com/png/full/192-1923313_2-februari-github-logo-png-white.png" alt="logo-github"></img>
        </a>
		<span>2022</span>
        <a target="blank" href='https://rs.school/js/'>
            <img src="https://rs.school/images/rs_school_js.svg" alt="logo-RSSchool"></img>
        </a>
		
	</Wrapper>
);

export default Footer;
