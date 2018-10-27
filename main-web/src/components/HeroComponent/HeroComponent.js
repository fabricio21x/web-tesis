import React, { Component } from 'react';
import './style.css';
import '../../device-mockups/device-mockups.css';
import demoScreen1 from '../../demo-screen-1.png';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export const HeroComponent = props => {
	return (
		<header className="masthead">
			<div className="container h-100">
				<div className="row h-100">
					<div className="col-lg-12 my-auto">
						<div className="header-content mx-auto">
							<h1 className="mb-12">
								En esta interfaz se podrá probar la funcionalidad del modelo de{' '}
								<i>Question Answering</i> implementado
							</h1>
							{/* <a
								href="#download"
								className="btn btn-outline btn-xl js-scroll-trigger"
							>
								Comenzar
							</a> */}
							<Link
								activeClass="active"
								className="btn btn-outline btn-xl js-scroll-trigger"
								to="download"
								spy={true}
								smooth="easeInOutQuart"
								duration={1000}
							>
								Comenzar
							</Link>
						</div>
					</div>
					{/* <div className="col-lg-5 my-auto">
						<div className="device-container">
							<div className="device-mockup iphone6_plus portrait white">
								<div className="device">
									<div className="screen">
										<img src={demoScreen1} className="img-fluid" alt="" />
									</div>
									<div className="button" />
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</header>
	);
};
