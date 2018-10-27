import React, { Component } from 'react';
import './style.css';
import googlePlayBadge from './img/google-play-badge.svg';
import appStoreBadge from './img/app-store-badge.svg';

export const AppDownloadComponent = props => {
	return (
		<section className="download bg-primary text-center" id="download">
			<div className="container">
				<div className="row">
					<div className="col-md-8 mx-auto">
						<h2 className="section-heading">Ingrese el texto a analizar</h2>
						<p>
							En esta parte debe ingresar el texto sobre el cuál se formulará la
							pregunta.
						</p>
						<textarea id="evidence" name="evidence" />
						{/* <div className="badges">
							<a className="badge-link" href="#">
								<img src={googlePlayBadge} alt="" />
							</a>
							<a className="badge-link" href="#">
								<img src={appStoreBadge} alt="" />
							</a>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};
