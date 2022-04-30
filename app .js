
            const canvas = document.getElementById("viewport");
            const nameField = document.querySelector("#nameField");
            const submitBtn = document.querySelector("#my-btn");
            // let myFont = new FontFace(
            //     "Tajawal",
            //     "url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400&display=swap')"
            //   );
            // myFont.load().then(function(font){
            //     document.fonts.add(font);
            //     console.log('Font loaded');
            // });


            image = new Image();
            image.src = '3.png';

            image.onload = function(e){
                updateCanvas(canvas, image, nameField.value);
            }

            submitBtn.onclick = function(e){
                    updateCanvas(canvas, image, nameField.value);
                    downloadEidCard();
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
            const fontSize = Math.floor(width/18);
            const yOffset = height/6;

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
          