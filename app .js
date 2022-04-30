
            const canvas = document.getElementById("viewport");
            const nameField = document.querySelector("#nameField");
            const submitBtn = document.querySelector("#my-btn");

            image = new Image();
            image.src = 'kuksal.png';

            image.onload = function(e){
                updateCanvas(canvas, image, nameField.value);
            }

            submitBtn.onclick = function(e){
                    updateCanvas(canvas, image, nameField.value);
                }
       

       function getCenterposition(str,ctx){
            let width =   ctx.measureText(str).width;
            let centerpos= (1080-width)/2;
            return centerpos+width;
        }

        function updateCanvas(canvas, image, text){
            const ctx = canvas.getContext("2d");
            const width = image.width;
            const height = image.height;
            const fontSize = Math.floor(width/10);
            const yOffset = height/25;

            //Set canvas dimensions
            canvas.width = width;
            canvas.height = height;

            //place the image
            ctx.drawImage(image, 0, 0);

            // Prepare text
            ctx.strokeStyle = "black";
            ctx.lineWidth = Math.floor(fontSize / 4);
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.lineJoin = "round";
            ctx.font = `${fontSize}px sans-serif`;

            // Add top text
            ctx.textBaseline = "bottom";
            ctx.strokeText(text, width / 2, height - yOffset);
            ctx.fillText(text, width / 2, height - yOffset);


        }