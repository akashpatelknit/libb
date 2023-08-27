import React from 'react'
import Exam from '../Exam/Exam'
import CT from '../CT/CT'
import './AceExam.scss'
const AceExam = () => {
  return (
		<div className="ace_exam">
			<Exam />
			<CT />
		</div>
  );
}

export default AceExam