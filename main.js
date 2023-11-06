var active_animation;

document.getElementById("btn").addEventListener("click", drawGraphic);

function drawGraphic() {
    let old_canvas = document.getElementById("canvas");

    var canvas = old_canvas.cloneNode(true);
    old_canvas.parentNode.replaceChild(canvas, old_canvas);

    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height); //Clear previous drawings, if any
    let texture;

    let selected_drawing = document.getElementById("choice").value;
    active_animation = "none"; //This will be overrided if this function starts an animation.
    if (selected_drawing == "draw_basics") {
        canvas.width = 800;
        canvas.height = 600;

        //Draw rectangles
        ctx.strokeStyle = "purple";
        ctx.strokeRect(50, 20, 150, 50);

        ctx.fillStyle = "rgb(0, 255, 0)";
        ctx.fillRect(225, 50, 50, 50);

        //Draw text
        ctx.font = "42px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText("Hello Canvas!", 350, 50);

        ctx.font = "20px Arial";
        ctx.strokeStyle = "blue";
        ctx.strokeText("Tiānshàng tàiyang hóng ya hóngtōngtōng ēi \
Xīnzhōng de tàiyang shì máozédōng ēi \
Tā lǐngdǎo wǒmen dé jiěfàng ēi \
Rénmín fānshēn dāngjiāzuòzhǔ rén \
Yīya yī zhī yōu wèi \
Ya ér ya zhī yōu ā \
Rénmín fānshēn dāngjiāzuòzhǔ rén \
Tiānshàng tàiyang hóng ya hóngtōngtōng ēi \
Xīnzhōng de tàiyang shì máozédōng ēi \
Tā lǐngdǎo wǒmen fènyǒng xiàngqián jìn ēi \
Gémìng jiāngshān yì yē yí piàn hóng ēi \
Yīya yī zhī yōu wèi \
Ya ér ya zhī yōu ā \
Gémìng jiāngshān yí piàn hóng \
Wǒmen xīnzhōng de hóng tàiyang \
Zhàodé biānjiāng yí piàn hóng \
Cháng bǎi qiānlǐ gēshēng liáoliàng \
Hǎi lán jiāngpàn hóngqí fēiyáng \
Qiān tiáo jiānghé guī dàhǎi \
Wàn duǒ kuíhuā xiàngyáng kāi \
Yánbiān rénmín zòngqíng gēchàng \
Wǒmen xīnzhōng de hóng tàiyang \
Āi… máozhǔxí \
Wǒmen wúxiàn rèài nín \
Nínde jiàodǎo láojì xīnshàng \
Yánbiān rénmín zhùyuàn nín \
Wànshòuwújiāng wànshòuwújiāng \
Tiānshàng tàiyang hóng ya hóngtōngtōng ēi \
Xīnzhōng de tàiyang shì máozédōng ēi \
Tā lǐngdǎo wǒmen dé jiěfàng ēi \
Rénmín fānshēn dāngjiāzuòzhǔ rén \
Yīya yī zhī yōu wèi \
Ya ér ya zhī yōu ā \
Rénmín fānshēn dāngjiāzuòzhǔ rén \
Tiānshàng tàiyang hóng ya hóngtōngtōng ēi \
Xīnzhōng de tàiyang shì máozédōng ēi \
Tā lǐngdǎo wǒmen fènyǒng xiàngqián jìn ēi \
Gémìng jiāngshān yì yē yí piàn hóng ēi \
Yīya yī zhī yōu wèi \
Ya ér ya zhī yōu ā \
Gémìng jiāngshān yí piàn hóng \
Tiānshàng tàiyang hóng ya hóngtōngtōng ēi \
Xīnzhōng de tàiyang shì máozédōng ēi \
Tā lǐngdǎo wǒmen dé jiěfàng ēi \
Tā lǐngdǎo wǒmen fènyǒngqiánjìn ēi \
Gémìng jiāngshān yì ya yí piàn hóng ēi \
Suō lā lā zǐ suō lā lā zǐ \
Yì ya yí piàn hóng ēi",
        300, 100);

        //Draw lines
        ctx.lineWidth = 4;
        ctx.strokeStyle = "orange";
        ctx.beginPath();
        ctx.moveTo(500, 220);
        ctx.lineTo(700, 170);
        ctx.lineTo(600, 120);
        ctx.stroke()

        //Draw polygon
        ctx.fillStyle = "cyan";
        ctx.beginPath();
        ctx.moveTo(500, 400);
        ctx.lineTo(700, 350);
        ctx.lineTo(600, 300);
        ctx.closePath();
        ctx.fill();

        //Draw circles
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#0000ff";
        ctx.beginPath();
        ctx.arc(100, 500, 50, 0, 2*Math.PI);
        ctx.stroke();

        ctx.lineWidth = 2;
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.arc(250, 500, 30, 0, 2*Math.PI);
        ctx.fill();

        ctx.lineWidth = 2;
        ctx.fillStyle = "#ffff00";
        ctx.beginPath();
        ctx.arc(250, 500, 20, 0, Math.PI);
        ctx.fill();

        texture = document.createElement("img");
        texture.src = "img/spy-tf2.jpg";
        texture.addEventListener("load", function() {
            ctx.drawImage(texture, 75, 150, 300, 150);
            ctx.drawImage(texture, 200, 350, 50, 50);
            texture.remove();
        });
    }
    else if (selected_drawing == "sun") {
        canvas.width = 400;
        canvas.height = 400;

        //Draw sky
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 400, 400);

        //Draw sun
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(200, 300, 15, 0, 2 * Math.PI);
        ctx.fill();

        //Draw grass
        ctx.fillStyle = "green";
        ctx.fillRect(0, 300, 400, 100);

        //Load the cloud picture
        texture = document.createElement("img");
        texture.src = "img/cloth-cloud.png";
        texture.addEventListener("load", function() {
            //Calculate cloud position
            let cornerX = Math.round(200 - 0.5 * texture.width);
            let cornerY = Math.round(150 - 0.5 * texture.height);
            let offset = [-20, 10];

            //Draw the clouds
            ctx.drawImage(texture, cornerX + offset[0], cornerY + offset[1]);
            ctx.drawImage(texture, cornerX - offset[0], cornerY - offset[1]);

            //Get rid of the cloud texture because we don't need it anymore
            texture.remove();
        });
    } else if (selected_drawing == "city") {
        canvas.width = 300;
        canvas.height = 650;
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // DRAW LEFT BUILDING
        ctx.fillStyle = "black";
        // Building Base
        ctx.fillRect(0, 350, 150, 300);
        // Middle Section
        ctx.fillRect(20, 200, 110, 150);
        // Triangle Top
        ctx.beginPath();
        ctx.moveTo(20, 200);
        ctx.lineTo(130, 200);
        ctx.lineTo(130, 100);
        ctx.fill();

        // DRAW RIGHT BUILDING
        ctx.fillStyle = "black";
        // Building Base
        ctx.fillRect(150, 100, 150, 550);
        // Medium Top
        ctx.fillRect(170, 40, 110, 60);
        // Small Top
        ctx.fillRect(190, 20, 70, 20);

        // ===[DRAW THE WINDOWS]===
        ctx.fillStyle = "white";
        //Right building
        for (let i = 0; i < 5; i++)
            ctx.fillRect(167 + i*26, 120, 12, 480);

        //Left building base
        for (let i = 0; i < 6; i++)
            ctx.fillRect(20, 370 + i*42, 110, 20);

        for (let j = 0; j < 6; j++) {
            for (let i = 0; i < 4; i++) {
                ctx.fillRect(40 + 22*i, 200 + 25*j, 12, 12);
            }
        }
    } else if (selected_drawing == "anim_basics") {
        canvas.width = 600;
        canvas.height = 400;
        
        let rectX = 100;
        let rectSize = 80;
        let rectBlue = 255;
        let rectRed = 0;

        let frameCount = 0;

        const tStart = document.timeline.currentTime;
        function loop() {
            if (active_animation != `anim_basics ${tStart}`)
                return;
            
            frameCount++;
            if (frameCount > 120) {
                /*
                Not all displays have a refresh rate of 60Hz. 30hz, 120Hz, and 144Hz are also common.
                This means that, unless we account for this, the ANIMATION WILL RUN AT DIFFERENT
                SPEEDS ON DIFFERENT DEVICES!!!
                */
                rectX += 1;
                rectBlue--;
                rectRed++;
            }
            rectSize += Math.random() * 2 - 1;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = `rgb(${rectRed}, 0, ${rectBlue})`;
            ctx.fillRect(rectX, 150, rectSize, rectSize);
            
            requestAnimationFrame(loop);
        }
        active_animation = `anim_basics ${tStart}`;
        requestAnimationFrame(loop);
    } else if (selected_drawing == "sun2") {
        canvas.width = 400;
        canvas.height = 400;

        //Load the cloud picture
        texture = document.createElement("img");
        texture.src = "img/cloth-cloud.png";
        texture.addEventListener("load", function() {
            //Let me show you one way to account for refresh rate:

            //Here, I store the time when the animation starts:
            const tStart = document.timeline.currentTime;

            //Fun fact: requestAnimationFrame passes the current time to the callback function as an argument.
            //We will take advantage of this...
            function sun2_frame(tNow) {
                if (active_animation != `sun2 ${tStart}`)
                    return;

                //With each frame, I use the current time and the time when the animation started,
                //to calculate the elapsed time (in seconds).
                let t = (tNow - tStart) / 1e3;
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                //Draw sky
                ctx.fillStyle = "blue";
                ctx.fillRect(0, 0, 400, 400);
    
                //Draw sun
                ctx.fillStyle = `rgb(255, ${Math.floor(25.5 * t)}, 0)`;
                ctx.beginPath();
                ctx.arc(200, 315 - 16.5*t, 15 + 1.5*t, 0, 2 * Math.PI);
                ctx.fill();
    
                //Draw grass
                ctx.fillStyle = "green";
                ctx.fillRect(0, 300, 400, 100);

                //Calculate cloud position
                let cornerX = Math.round(200 - 0.5 * texture.width);
                let cornerY = Math.round(150 - 0.5 * texture.height);
                let offset = [-20 - 25*t, 10];

                //Draw the clouds
                ctx.drawImage(texture, cornerX + offset[0], cornerY + offset[1]);
                ctx.drawImage(texture, cornerX - offset[0], cornerY - offset[1]);

                if (t < 10)
                    window.requestAnimationFrame(sun2_frame);
            }
            active_animation = `sun2 ${tStart}`;
            window.requestAnimationFrame(sun2_frame);
        });
    } else if (selected_drawing == "windy_r2l" || selected_drawing == "windy_l2r") {
        canvas.width = 400;
        canvas.height = 400;

        //Define cloud positions
        //Load the cloud picture
        texture = document.createElement("img");
        texture.src = "img/cloth-cloud.png";
        texture.addEventListener("load", function() {
            const tStart = document.timeline.currentTime;
            var tPrev = tStart;
            
            let cloud1x = 130;
            let cloud1y = 120;
            let cloud2x = 170;
            let cloud2y = 100;
            let cloud_d = 1
            if (selected_drawing == "windy_r2l")
                cloud_d = -1;

            function windy_frame(tNow) {
                if (active_animation != `windy ${tStart}`)
                    return;
                
                /*Here's another way to account for refresh rate:
                    Each frame, store the current timestamp in a variable. Then, on the next
                    frame, use the current timestamp and the stored timestamp to calculate
                    the time interval between each frame. */
                let tStep = (tNow - tPrev) / 1e3; //This is also calculated in seconds
                tPrev = tNow;

                //Calculate cloud 1 position (clouds move at 80 px/s)
                cloud1x += cloud_d * 80 * tStep;

                //If cloud goes offscreen:
                if (cloud1x + texture.width < 0 || cloud1x > canvas.width) {
                    //Flip a coin
                    if (cloud_d < 0) {
                        //If cloud moves right to left
                        cloud1x = canvas.width;
                    } else {
                        //If cloud moves left to right
                        cloud1x = -texture.width;
                    }
                    cloud1y = 200 * Math.random();
                }

                //Ditto for cloud 2
                cloud2x += cloud_d * 80 * tStep;
                if (cloud2x + texture.width < 0 || cloud2x > canvas.width) {
                    if (cloud_d < 0) {
                        cloud2x = canvas.width;
                    } else {
                        cloud2x = -texture.width;
                    }
                    cloud2y = 200 * Math.random();
                }
                
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                //Draw sky
                ctx.fillStyle = "blue";
                ctx.fillRect(0, 0, 400, 400);

                //Draw grass
                ctx.fillStyle = "green";
                ctx.fillRect(0, 300, 400, 100);

                //Draw the clouds
                ctx.drawImage(texture, cloud1x, cloud1y);
                ctx.drawImage(texture, cloud2x, cloud2y);

                window.requestAnimationFrame(windy_frame);
            }
            active_animation = `windy ${tStart}`;
            window.requestAnimationFrame(windy_frame);
        });
    } else if (selected_drawing == "key_io_basics") {
        canvas.width = 600;
        canvas.height = 400;
        
        let rectX = 100;
        let rectSize = 80;
        let rectBlue = 255;
        let rectRed = 0;

        let spaceKeyPressed = false;

        const tStart = document.timeline.currentTime;
        function loop() {
            if (active_animation != `key_io_basics ${tStart}`)
                return;

            if (spaceKeyPressed) { //Mr. Veldkamp should read the documentation for requestAnimationFrame
                rectX += 1;
                rectSize += Math.random() * 2 - 1;
                rectBlue--;
                rectRed++;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = `rgb(${rectRed}, 0, ${rectBlue})`;
            ctx.fillRect(rectX, 150, rectSize, rectSize);
            
            requestAnimationFrame(loop);
        }
        active_animation = `key_io_basics ${tStart}`;
        requestAnimationFrame(loop);

        document.addEventListener("keydown", function(event) {
            if (event.code == "Space") {
                spaceKeyPressed = true;
            }
        });

        document.addEventListener("keyup", function(event) {
            if (event.code == "Space") {
                spaceKeyPressed = false;
            }
        });
    } else if (selected_drawing == "paint") {
        canvas.width = 600;
        canvas.height = 400;

        let mouseX = 0;
        let mouseY = 0;

        let mouseX_old = 0;
        let mouseY_old = 0;

        let mouseDown = false;
        let erase = false;
        let mouseMoved = false;

        const tStart = document.timeline.currentTime;
        function loop() {
            if (active_animation != `paint ${tStart}`) {
                document.removeEventListener("keydown", change_size);
                return;
            }
            if (mouseDown && mouseMoved) {
                if (erase) {
                    let size = Number(document.getElementById("size-in").value);
                    ctx.clearRect(mouseX - size/2, mouseY - size/2, size, size);

                    //Erase the space between previous and current mouse position
                    if (Math.abs(mouseY - mouseY_old) > Math.abs(mouseX - mouseX_old)) {
                        //x - x1 = m(y - y1)
                        let slope = (mouseX - mouseX_old) / (mouseY - mouseY_old);

                        //Adjust the size of the square so that diagonal strokes are the same width as horizontal ones.

                        let dy = (mouseY - mouseY_old) / Math.abs(mouseY - mouseY_old);
                        for (let y = mouseY_old; y * dy < mouseY * dy; y += dy) {
                            let x = slope * (y - mouseY_old) + mouseX_old;
                            ctx.clearRect(x - size/2, y - size/2, size, size);
                        }
                    } else {
                        //y - y1 = m(x - x1)
                        let slope = (mouseY - mouseY_old) / (mouseX - mouseX_old);

                        let dx = (mouseX - mouseX_old) / Math.abs(mouseX - mouseX_old);
                        for (let x = mouseX_old; x * dx < mouseX * dx; x += dx) {
                            let y = slope * (x - mouseX_old) + mouseY_old;
                            ctx.clearRect(x - size/2, y - size/2, size, size);
                        }
                    }
                } else {
                    ctx.lineWidth = Number(document.getElementById("size-in").value);
                    ctx.strokeStyle = document.getElementById("color-in").value;
                    
                    ctx.lineCap = "round"; //Prevents lines from being scuffed

                    ctx.beginPath();
                    ctx.moveTo(mouseX_old, mouseY_old);
                    ctx.lineTo(mouseX, mouseY);
                    ctx.stroke();
                }
                mouseMoved = false; //This is to prevent it from drawing the same line more than once.
            }

            mouseX_old = mouseX;
            mouseY_old = mouseY;
            
            requestAnimationFrame(loop);
        }
        active_animation = `paint ${tStart}`;
        requestAnimationFrame(loop);

        canvas.addEventListener("mousemove", function(event) {
            let canvBBox = canvas.getBoundingClientRect();

            mouseX = Math.round(event.clientX - canvBBox.left);
            mouseY = Math.round(event.clientY - canvBBox.top);

            mouseMoved = true;
        });

        canvas.addEventListener("mousedown", function(event) {
            if (event.button == 0) {
                mouseDown = true;
            }
        });
        canvas.addEventListener("contextmenu", function(event) {
            event.preventDefault(); //Prevent the context menu from opening if the user right-clicks
        });
        canvas.addEventListener("mouseup", function(event) {
            mouseDown = false;
        });

        document.addEventListener("keydown", change_size);
        function change_size(event) {
            if (event.code == "Space") {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            } else if (event.code == "ArrowUp") {
                document.getElementById("size-in").value = Number(document.getElementById("size-in").value) + 1;
            } else if (event.code == "ArrowDown") {
                document.getElementById("size-in").value = Math.max(1, Number(document.getElementById("size-in").value) - 1);
            } else if (event.code == "KeyE") {
                erase = !erase;
                document.getElementById("draw-mode").innerText = erase ? "Erase" : "Draw";
            }
        }
    }
}