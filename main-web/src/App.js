import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './App.css';
import './components/AppDownloadComponent/style.css';
import './components/FeaturesComponent/style.css';
import 'font-awesome/css/font-awesome.css';
import 'simple-line-icons/css/simple-line-icons.css';

import { FooterComponent } from './components/FooterComponent/FooterComponent';
import { SocialComponent } from './components/SocialComponent/SocialComponent';
import { CallToActionComponent } from './components/CallToActionComponent/CallToActionComponent';
import { FeaturesComponent } from './components/FeaturesComponent/FeaturesComponent';
import { AppDownloadComponent } from './components/AppDownloadComponent/AppDownloadComponent';
import { HeroComponent } from './components/HeroComponent/HeroComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';

import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navBarShrink: '',
			evidence: '',
			question: '',
			answer: '',
			success: false
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		this.handleScroll();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(event) {
		const domNode = ReactDOM.findDOMNode(this.navEl);
		const nbs = window.pageYOffset > 100 ? 'navbar-shrink' : '';
		this.setState({ navBarShrink: nbs });
	}

	onSubmit() {
		if (this.state.evidence == '' || this.state.question == '') {
			alert('Ingrese el contexto y la pregunta');
			return;
		}
		axios
			.post(
				`http://ec2-52-15-206-79.us-east-2.compute.amazonaws.com/:4000/predict?evidence=${
					this.state.evidence
				}&question=${this.state.question}`,
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
					}
				}
			)
			.then(res => {
				this.setState({ answer: res.data.answer, success: res.data.success });
				console.log(res);
			})
			.catch(err => {
				alert('Ocurrió un error al obtener la respuesta.');
				console.log(err);
			});
	}

	render() {
		const nbs = this.state ? this.state.navBarShrink : '';
		return (
			<div>
				<NavBarComponent navBarShrink={nbs} />
				<HeroComponent />
				<section className="download bg-primary text-center" id="download">
					<div className="container">
						<div className="row">
							<div className="col-md-8 mx-auto">
								<h2 className="section-heading">Ingrese los datos</h2>
								<p>
									En esta parte debe ingresar el texto a analizar y la pregunta
									respectiva.
								</p>
								<div className="form-group shadow-textarea">
									<textarea
										className="form-control z-depth-1"
										id="evidence"
										name="evidence"
										rows="3"
										onChange={ev =>
											this.setState({ evidence: ev.target.value })
										}
										placeholder="Escriba o copie el contexto aquí ..."
										value={this.state.evidence}
									/>
								</div>
								<div className="form-group shadow-textarea">
									<input
										type="text"
										id="question"
										name="question"
										onChange={ev =>
											this.setState({ question: ev.target.value })
										}
										placeholder="Ingrese su pregunta ..."
										className="form-control z-depth-1"
										value={this.state.question}
									/>
								</div>
								<p>
									* Recuerde que la pregunta debe ser estrictamente sobre
									información que se encuentre descrita de manera explícita
									(textual) en el texto provisto.
								</p>
								<Link
									activeClass="active"
									className="btn btn-outline btn-xl js-scroll-trigger"
									to="features"
									spy={true}
									smooth="easeInOutQuart"
									duration={1000}
									onClick={() => this.onSubmit()}
								>
									Obtener respuesta
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="features" id="features">
					<div className="container">
						<div className="section-heading text-center">
							<h2>Resultados de la consulta</h2>
							<p className="text-muted">
								{this.state.success
									? `La respuesta a su pregunta "${this.state.question}"`
									: 'Realice una consulta para visualizar la respuesta en esta sección'}
							</p>
							<hr />
						</div>

						{this.state.success ? (
							<div className="row">
								<i className="fa fa-2x fa-check icon-pad" />
								<h3 className="text-center">{this.state.answer}</h3>
							</div>
						) : (
							<div className="row">
								<i className="fa fa-2x fa-clock icon-pad" />
								<h3 className="text-center">A la espera de una consulta ...</h3>
							</div>
						)}
					</div>
				</section>
				{/* <AppDownloadComponent /> */}
				{/* <FeaturesComponent /> */}
				{/* <CallToActionComponent /> */}
				<SocialComponent />
				<FooterComponent />
			</div>
		);
	}
}

export default App;
