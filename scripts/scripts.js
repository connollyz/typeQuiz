
//select html contaners?
const quizContanier = document.getElementById(`quiz`);
const submitButtion = document.getElementById(`submit`);
const resultsContaner = document.getElementById(`results`);

//make object with qustions, options, and answer
const qustions =[

	//apex qustion
	{
		qustion: "What point marks the apex?",
		image: "../assets/qustion_1.png",
		options:[
		"a",
		"b",
		"c",
		],
		answer: "b",
	},//end of apex qustion


	//bowl qustion
	{ 
		qustion: "What does this point mark?",
		image: "../assets/qustion_2.png",
		options:[
		"bowl",
		"counter",
		"eye",
		],
		answer: "bowl",
	},//end of bowl qustion

	//spine qustion
	{
		qustion: "What does this point mark?",
		image: "../assets/qustion_3.png",
		options:[
		"swatch",
		"link",
		"spine",
		],
		answer: "spine",
	},//end of spine qustion

	//k qustion
	{
		qustion: "What does the letter k not have?",
		image: "../assets/qustion_4.png",
		options:[
		"leg",
		"arm",
		"spine",
		],
		answer: "spine",
	},//end of k qustion

	//serif qustion
	{
		qustion: "What point marks the serif?",
		image: "../assets/qustion_5.png",
		options:[
		"a",
		"b",
		"c",
		],
		answer: "a",
	},//end of serif qustion
]//end of qustion object

//show random qustion from object with three answer options

function createQuiz(){

	//this stores the output of the html
	const output= [];

	//for each qustion..

	qustions.forEach(
		(curentQustion, qustionNum) => {
			//this will hold the code we run for each qustion

			//this will store the list of answer choices 
			const answers = [];

			//for each avalible answer....
		curentQustion.options.forEach((option, i) => {

				//add html radio buttion
				answers.push(
				`<label>
					<input type="radio" name="qustion${qustionNum}" value="${option}">
					 ${option}
				</label>`
				);//answer.push

			})//for statemnt 

			// add the qustion and the answer to the output

			output.push(
				`<div class = "qustions">${curentQustion.qustion} </div>
				<img src = '${curentQustion.image}'/>
				<div class = "answers">${answers.join(``)}</div>`

				);//end of output

		}//(curentQustion, qustionNum)	

	);//qustion.forEach

	//combine output list into one string of html and show on page

	quizContanier.innerHTML = output.join(``);

}//end of quiz

function showResults(){
	// gather awnser contaners for quiz
	const answerContainers = $('.answers');
	

	//keep track of answers correct
	let numRight = 0;

	qustions.forEach((curentQustion, qustionNum) => {
		const answerContainer = answerContainers[qustionNum];
		const selecter = `input[name='qustion${qustionNum}']:checked`;
		const userAnswer = $(selecter).val();


		//if answer is right :) 
		if (userAnswer === curentQustion.answer){
			//add 1 point
			numRight++;
			//change colour
			answerContainer.style.color="green";
		} 
		else{
			//change colour
			answerContainer.style.color="red";
		};//end of if statemnt


	});//qustion.forEach function ends

// 	//get my results
	resultsContaner.innerHTML = `${numRight} out of ${qustions.length}`;
};//end of showResults function

//show quiz
createQuiz();
//on submit show the reults of the quiz
submitButtion.addEventListener(`click`, showResults);
