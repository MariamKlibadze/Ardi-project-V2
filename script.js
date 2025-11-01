const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
))


document.getElementById('my-room-btn').addEventListener('click', function () {
    const link = this.dataset.link || (typeof openMyRoom === 'function' ? 'has-function' : '');

    if (!link) {
        const errorWindow = window.open(
            '',
            'error',
            'width=400,height=200,scrollbars=no,resizable=no'
        );

        errorWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Attention</title>
        <style>
          body {
            font-family: system-ui, sans-serif;
            background: #20c997;
            color: rgb(11, 12, 13);
            text-align: center;
            padding: 30px;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            gap: 15px;
          }
          .icon { font-size: 40px; }
          .close-btn {
             background: #20c997;
            color: rgb(11, 12, 13);
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
          }
          .close-btn:hover { background: #347861; }
        </style>
      </head>
      <body>
        <div class="icon">🚧</div>
        <h3>We’re still setting things up!</h3>
        <p>Our website is under construction right now, but we’ll be live very soon. Thanks for your patience!</p>
        <button class="close-btn" onclick="window.close()">Close</button>
      </body>
      </html>
    `);

        errorWindow.document.close();
        return;
    }

    // --- HAS LINK → Open it ---
    if (link !== 'has-function') {
        window.open(link, '_blank');
    } else {
        openMyRoom();
    }
});


document.getElementById('my-room-btn-resp').addEventListener('click', function () {
    const link = this.dataset.link || (typeof openMyRoom === 'function' ? 'has-function' : '');

    if (!link) {
        const errorWindow = window.open(
            '',
            'error',
            'width=400,height=200,scrollbars=no,resizable=no'
        );

        errorWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Attention</title>
        <style>
          body {
            font-family: system-ui, sans-serif;
            background: #20c997;
            color: rgb(11, 12, 13);
            text-align: center;
            padding: 30px;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            gap: 15px;
          }
          .icon { font-size: 40px; }
          .close-btn {
             background: #20c997;
            color: rgb(11, 12, 13);
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
          }
          .close-btn:hover { background: #347861; }
        </style>
      </head>
      <body>
        <div class="icon">🚧</div>
        <h3>We’re still setting things up!</h3>
        <p>Our website is under construction right now, but we’ll be live very soon. Thanks for your patience!</p>
        <button class="close-btn" onclick="window.close()">Close</button>
      </body>
      </html>
    `);

        errorWindow.document.close();
        return;
    }

    // --- HAS LINK → Open it ---
    if (link !== 'has-function') {
        window.open(link, '_blank');
    } else {
        openMyRoom();
    }
});






/*<-------------------------------------------------------------- helper queries -------------------------------------------------------> */

// document.querySelectorAll('*').forEach(el => {
//   if (el.scrollWidth > window.innerWidth) {
//     console.log('%cOVERFLOW →', 'color:red;font-weight:bold', el);
//     el.style.outline = '3px solid red';
//   }
// });