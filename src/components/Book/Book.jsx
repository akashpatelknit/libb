import React, { useState, useEffect } from 'react';
import Row from '../Row/Row';
import axios from 'axios';
import Partical from '../Partical/Partical';
import { branch, options,url } from '../../data';
import Loading from '../../pages/Loading';
const Book = () => {
	

	const [year, setYear] = useState('');
	const [branchname, setBranchname] = useState('');
	const [semester, setSemester] = useState();
	const [subject, setSbject] = useState('');
	const [ys, setYs] = useState([]);
	const [sem, setsem] = useState([]);
	const [loading, setLoading] = useState(false);
	const type = 'Book';
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
			let sem = data.map((i) => i.semester);
			sem = [...new Set(sem)];
			setsem(sem);
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
				d.semester === semester
		);
		setsearch(data);
	};

	return (
		<>
			<div className="main">
				<Partical />
				<Loading/>
				{loading ?(<Loading/>):(<section>
					<section>
						<form onSubmit={handleSubmit}>
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
									<select
										name="semester"
										onChange={(e) =>
											setSemester(e.target.value)
										}
									>
										<option value="">Semester</option>
										{sem.map((option, index) => {
											return (
												<option key={index}>
													{option}
												</option>
											);
										})}
									</select>
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
				</section>)}
				
			</div>
		</>
	);
};

export default Book;
