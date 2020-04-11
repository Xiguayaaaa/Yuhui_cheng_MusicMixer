(()=>{
	console.log("Trevor");



	const zodiacSign = document.querySelector(".zodiac"),
		  dropZone =  document.querySelectorAll("#dropzone"),
		  resetButton = document.querySelector("#reset"),
		  popupButton = document.querySelector("#popup"),
		  popupMenu = document.querySelector(".popupmenu"),
		  closeButton = document.querySelector(".closebox");


	let draggablePieces = zodiacSign.querySelectorAll("img");



	function reFresh(){
		location.reload();
	}

	function showPopupmenu(){
		popupMenu.classList.add("show-popupmenu");

	}

	function closePopupmenu(){
		popupMenu.classList.remove("show-popupmenu");
	}

	draggablePieces.forEach(piece => {
        piece.addEventListener("dragstart", function(e){
            console.log("it's cold");

            e.dataTransfer.setData("text/plain",this.id);
        });

    });

    draggablePieces.forEach((piece,index) => {
        });



	dropZone.forEach (zone =>{
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
            console.log('clink!');
		});

			zone.addEventListener("drop", function(e) {
            	e.preventDefault();

            	console.log('clank!');


            	const currentDrop = document.querySelector(`img[data-drop="${e}"]`);




				let draggablePieces = e.dataTransfer.getData("text/plain");
            	console.log('you dragged: ', draggablePieces);


				let newImage = document.createElement("img");
				newImage.src = document.querySelector(`#${draggablePieces}`).getAttribute("src");
				e.target.appendChild(newImage);

				let audioDrop = document.querySelector(`#${draggablePieces}`).dataset.drop;
				let currentAudioClip = document.querySelector((`audio[data-drop="${audioDrop}"]`));

				currentAudioClip.play();

	 			 currentAudioClip.loop = true;
			});

	})

		resetButton.addEventListener("click",reFresh);
		popupButton.addEventListener("click",showPopupmenu);
		closeButton.addEventListener("click",closePopupmenu);
})();
