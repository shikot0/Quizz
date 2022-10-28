function QuizItem({questionData, number}) { 

    // function handleCreateShimmer(e) {
    //     if(e.target.classList.contains('question-item')) {
    //         const previousEffects = e.target.querySelectorAll('.shimmer-effect');
    //         if(previousEffects) {
    //             previousEffects.forEach(effect => {effect.remove()})
    //         }
    //         const shimmerEffect = document.createElement('span');
    //         shimmerEffect.classList.add('shimmer-effect');
    //         e.target.appendChild(shimmerEffect);
    //     }
    // }
    // function handleMouseEffect(e) {
    //     if(e.target.classList.contains('question-item')) {
    //         const shimmerEffect = e.target.querySelector('.shimmer-effect');
    //         shimmerEffect.style.top = `${e.clientY-shimmerEffect.clientHeight}px`;
    //         shimmerEffect.style.left = `${e.clientX-shimmerEffect.clientWidth}px`; 
    //         shimmerEffect.style.top = `${e.clientY}px`;
    //         shimmerEffect.style.left = `${e.clientX}px`; 
    //         console.log(shimmerEffect)
    //     }
    // }
    function handleMouseMove(e) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.target.style.setProperty('--mouse-x', `${x}px`);
        e.target.style.setProperty('--mouse-y', `${y}px`);
    }
	return(
		<div className="question-item" onMouseMove={handleMouseMove}>
			<h3>{number}: {questionData.question}</h3>
		</div>
	)
}

export default QuizItem;
