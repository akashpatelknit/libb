import React, { useState, useEffect } from 'react';
// import './Exam.css';
import Row from '../Row/Row';
import axios from 'axios';
import Partical from '../Partical/Partical';
import Loading from '../../pages/Loading';
const CT = () => {
	const options = [
		'First Year',
		'Second Year',
		'Third Year',
		'FInal Year',
		'MCA',
	];
	const type = 'CT';
	const url = 'https://libraryserver.vercel.app';
	const branch = ['It', 'Cs', 'ECE', 'Mech', 'Civil', 'EL'];
	const [year, setYear] = useState('');
	const [branchname, setBranchname] = useState('');
	const [semester, setSemester] = useState();
	const [subject, setSbject] = useState('');
	const [ys, setYs] = useState([]);
	const [loading, setLoading] = useState(false);
	// const [type, setType] = useState('');
	const [search, setsearch] = useState([]);
	const [upcomingMovies, setUpcomingMovies] = useState([]);
	useEffect(() => {
		const fetchUpcoming = async () => {
			setLoading(true);
			let { data } = await axios.get(`${url}/get`);
			data = data.filter((d) => d.type === type);
			setUpcomingMovies(data);
			let sub = data
				.map((d) => d.subject)
				.filter((s) => s !== undefined && s !== '');
			sub = [...new Set(sub)];
			setYs(sub);
			setLoading(false);
			// console.log(sub)
		};

		fetchUpcoming();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = upcomingMovies.filter(
			(d) =>
				d.year === year &&
				d.subject === subject &&
				d.branch === branchname &&
				d.semester === semester &&
				d.type === type
		);
		setsearch(data);
		console.log(year, branchname, subject, semester);
		console.log(data);
		console.log(upcomingMovies);
	};

	return (
		<>
			<div className="main">
				<Partical />
				{loading ? (
					<Loading />
				) : (
					<section>
						<section>
							<form onSubmit={handleSubmit}>
								<h2>CT Papers</h2>
								<div class="form-row">
									<div class="form-item">
										<label>Year</label>
										<select
											name="year"
											onChange={(e) =>
												setYear(e.target.value)
											}
										>
											<option value="">Year</option>
											{options.map((option, index) => {
												return (
													<option key={index}>
														{option}
													</option>
												);
											})}
										</select>
									</div>
									<div class="form-item">
										<label>Subject</label>
										<select
											name="subject"
											onChange={(e) =>
												setSbject(e.target.value)
											}
										>
											<option value="">Subject</option>
											{ys.map((option, index) => {
												return (
													<option key={index}>
														{option}
													</option>
												);
											})}
										</select>
									</div>
									<div class="form-item">
										<label>Branch</label>
										<select
											name="branch"
											onChange={(e) =>
												setBranchname(e.target.value)
											}
										>
											<option value="">Branch</option>
											{branch.map((option, index) => {
												return (
													<option key={index}>
														{option}
													</option>
												);
											})}
										</select>
									</div>

									<div class="form-item">
										<label>Semester</label>
										<input
											type="number"
											name="semester"
											min="1"
											onChange={(e) =>
												setSemester(e.target.value)
											}
										/>
									</div>

									<div className="form-item">
										<label>Search</label>
										<input type="submit" />
									</div>
								</div>
							</form>
						</section>

						<section className="home">
							<Row
								title={'Recentaly Added'}
								loading={loading}
								arr={upcomingMovies}
							/>
							<Row
								title={'Search Results'}
								loading={loading}
								arr={search}
							/>
						</section>
					</section>
				)}
			</div>
		</>
	);
};

export default CT;
