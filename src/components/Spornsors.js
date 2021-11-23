import styled from 'styled-components'

const Sponsors = () => {
	return (
		<Section>
			<Contents>
				<HeaderContent>
					<h1>Be discovered by world-leading companies</h1>
					<p>Thousands of companies use The Dots to hire & discover talent</p>
				</HeaderContent>
			</Contents>
			<Sponsor>
				<Google></Google>
				<Spotify></Spotify>
				<Dazed></Dazed>
				<Airbnb></Airbnb>
				<Akqa></Akqa>
				<BBC></BBC>
				<Burberry></Burberry>
				<TATE></TATE>
				<Universal></Universal>
				<Shelter></Shelter>
				<CondeNast></CondeNast>
				<Twitter></Twitter>
			</Sponsor>
		</Section>
	)
}

const Section = styled.section`
	background-color: white;
	position: relative;
	margin-right: auto;
	margin-left: auto;
	margin-top: 80px;
`

const Contents = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	max-width: 920px;
	padding: 60px 20px 0px;
	margin: 0px auto;
	box-sizing: content-box;
`

const HeaderContent = styled.div`
	grid-area: 1 / 4 / 1 / 10;
	text-align: center;

	h1 {
		margin: 0px 0px 10px;
		font-size: 23px;
		font-weight: 500;
		line-height: 1.03;
		color: rgb(56, 56, 57);

		@media (max-width: 768px) {
			width: 300px;
			margin-left: -40px;
		}
	}

	p {
		color: rgb(115, 115, 115);
		font-size: 16px;
		font-weight: 300;
		line-height: 1.375;

		@media (max-width: 768px) {
			font-size: 15px;
			margin-left: -45px;
		}
	}
`

const Sponsor = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	margin: 0px auto;
	padding: 0px 20px 60px;
	max-width: 920px;
	box-sizing: content-box;
`

const Google = styled.div`
	grid-area: 1 / 1 / 1 / 4;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: 0% 0%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		grid-area: 1 / 1 / 1 / 7;
		padding-top: 42.42%;
		background-image: url('/assets/comp.webp');
		background-position: 0% 0%;
		background-size: calc(200%) calc(300%);
	}
`

const Spotify = styled.div`
	grid-area: 1 / 4 / 1 / 7;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: -100% 0%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		grid-area: 1 / 7 / 1 / 13;
		padding-top: 42.42%;
		background-image: url('/assets/comp.webp');
		background-position: -100% 0%;
		background-size: calc(200%) calc(300%);
	}
`
const Dazed = styled.div`
	grid-area: 1 / 7 / 1 / 10;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: -200% 0%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		grid-area: 2 / 1 / 2 / 7;
		padding-top: 42.42%;
		background-image: url('/assets/comp.webp');
		background-position: 0% -100%;
		background-size: calc(200%) calc(300%);
	}
`
const Airbnb = styled.div`
	grid-area: 1 / 10 / 1 / 13;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: -300% 0%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		grid-area: 2 / 7 / 2 / 13;
		padding-top: 42.42%;
		background-image: url('/assets/comp.webp');
		background-position: -100% -100%;
		background-size: calc(200%) calc(300%);
	}
`
const Akqa = styled.div`
	grid-area: 2 / 1 / 2 / 4;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: 0% -100%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		background-image: none;
	}
`
const BBC = styled.div`
	grid-area: 2 / 4 / 2 / 7;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: -100% -100%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		background-image: none;
	}
`
const Burberry = styled.div`
	grid-area: 2 / 7 / 2 / 10;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: -200% -100%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		grid-area: 3 / 1 / 3 / 7;
		padding-top: 42.42%;
		background-image: url('/assets/comp.webp');
		background-position: 0% -200%;
		background-size: calc(200%) calc(300%);
	}
`
const TATE = styled.div`
	grid-area: 2 / 10 / 2 / 13;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: -300% -100%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		grid-area: 3 / 7 / 3 / 13;
		padding-top: 42.42%;
		background-image: url('/assets/comp.webp');
		background-position: -100% -200%;
		background-size: calc(200%) calc(300%);
	}
`
const Universal = styled.div`
	grid-area: 3 / 1 / 3 / 4;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: 0% -200%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		background-image: none;
	}
`
const Shelter = styled.div`
	grid-area: 3 / 4 / 3 / 7;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: -100% -200%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		background-image: none;
	}
`
const CondeNast = styled.div`
	grid-area: 3 / 7 / 3 / 10;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: -200% -200%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		background-image: none;
	}
`
const Twitter = styled.div`
	grid-area: 3 / 10 / 3 / 13;
	padding-top: 34.48%;
	background-image: url('/assets/companies.webp');
	background-position: -300% -200%;
	background-size: calc(400%) calc(300%);
	cursor: pointer;

	@media (max-width: 768px) {
		background-image: none;
	}
`

export default Sponsors
