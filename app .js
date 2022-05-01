            const whiteAndGoldCard = document.getElementById("W&G-option");
            const whiteAndGreenCard = document.getElementById("W&Green-option");
            const whiteAndPurpleCard = document.getElementById("W&P-option");
            

            const canvas = document.getElementById("viewport");
            const nameField = document.querySelector("#nameField");
            const submitBtn = document.querySelector("#my-btn");


            defaultImg = new Image();
            defaultImg.src = 'img/artboard-1-2@1x.png';

            let selectedImg = defaultImg;

            whiteAndPurple = new Image();
            whiteAndPurple.src = 'img/Artboard 2.png';

            whiteAndGreen = new Image();
            whiteAndGreen.src = 'img/Artboard 3.png';

            whiteAndGold = new Image();
            whiteAndGold.src = 'img/Artboard 4.png';

            whiteAndGoldCard.onclick = function(e){
                selectedImg = whiteAndGold;
                updateCanvas(canvas, whiteAndGold, nameField.value);
            }

            whiteAndGreenCard.onclick = function(e){
                selectedImg = whiteAndGreen;
                updateCanvas(canvas, whiteAndGreen, nameField.value);
            }

            whiteAndPurpleCard.onclick = function(e){
                selectedImg = whiteAndPurple;
                updateCanvas(canvas, whiteAndPurple, nameField.value);
            }

            defaultImg.onload = function(e){
                console.log(canvas, defaultImg, nameField.value);
                updateCanvas(canvas, defaultImg, nameField.value);
            }

            submitBtn.onclick = function(e){
                    updateCanvas(canvas, selectedImg, nameField.value);
                    downloadEidCard();
                }
       
             nameField.onchange = function(e){
                updateCanvas(canvas, selectedImg, nameField.value);
             }   

        function updateCanvas(canvas, image, text){
            const ctx = canvas.getContext("2d");
            const width = image.width;
            const height = image.height;
            const fontSize = Math.floor(width/18);
            const yOffset = height/3;

            //Set canvas dimensions
            canvas.width = width;
            canvas.height = height;

            //place the image
            ctx.drawImage(image, 0, 0);

            // Prepare text
            ctx.strokeStyle = "black";
            ctx.lineWidth = Math.floor(fontSize / 4);
            let fillStyleColor = 'black';
            if (selectedImg===defaultImg){
                fillStyleColor = '#712177';
            }else if(selectedImg===whiteAndGold){
                fillStyleColor = '#ffb700';
            }else if(selectedImg===whiteAndGreen){
                fillStyleColor = 'white';
            }else{
                fillStyleColor = 'white';
            }
            ctx.fillStyle = fillStyleColor;
            ctx.textAlign = "center";
            ctx.lineJoin = "round";
            ctx.font = `${fontSize}px Tajawal`;

            // Add top text
            ctx.textBaseline = "bottom";
            // ctx.strokeText(text, width / 2, height - yOffset);
            ctx.fillText(text, width / 2, height - yOffset);
        }
        

        function downloadEidCard(){
            let link = document.createElement('a');
            document.body.append(link);
            link.download = `بطاقة معايدة ${nameField.value}.png`;
            link.href = document.getElementById('viewport').toDataURL()
            link.click();
          }
          