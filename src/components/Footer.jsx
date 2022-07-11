function Footer() {
	return (
		<footer id="footer" className="blue-grey lighten-3">
			<div className="row">
				<p className="col s6 center">© {new Date().getFullYear()} Copyright Text</p>
				<ul className="col s6 center">
					<li><a className="grey-text text-lighten-3" href="https://github.com/Alexxxsandoor/fortnite-shop" target="_blank" rel="noreferrer">Repo</a></li>
				</ul>
				<a className="col s12 center grey-text text-lighten-3" href="https://t.me/alexxxsandoor">ALEXXXSANDOOR</a>
			</div>

		</footer >
	)

}

export { Footer }