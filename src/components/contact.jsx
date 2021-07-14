function Contact() {
	return (
		<article id="get-in-touch" className="page">
			<div id="get-in-touch-container" className="container">
				<form id="message-form">
					<div id="form-item-container">
						<h2>Get In Touch</h2>
						<label htmlFor="name">Name:</label>
						<input type="text" name="name" id="name" placeholder="Name" />
						<label htmlFor="email">Email:</label>
						<input type="text" name="email" id="email" placeholder="Email" />
						<label htmlFor="message">Message:</label>
						<textarea name="message" id="message" cols="30" rows="10" placeholder="Message" />
						<button onClick={console.log('clicked!')}>Send Message</button>
					</div>
				</form>
			</div>
		</article>
	);
}

export default Contact;
