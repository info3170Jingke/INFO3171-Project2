





        const button = document.getElementById('button')
        const toasts = document.getElementById('toasts')
        
        const messages = [
            'Message One',
            'Message Two',
            'Message Three',
            'Message Four'
        ]
        
        button.addEventListener('click', () => createNotification())
        
        function createNotification() {
            const notif = document.createElement('div')
            notif.classList.add('toast')
        
            notif.innerText = getRandomMessage()
        
            toasts.appendChild(notif)
        
            setTimeout(() => {
               notif.remove()
            }, 3000);
        }
        
        function getRandomMessage() {
            return messages[Math.floor(Math.random() * messages.length)]
        }
      
      
      
      
  
       
        var coll = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("activ");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }
        
  
  
      document.addEventListener("DOMContentLoaded", function() {
          M.AutoInit();
      });
  
  
      function myFunction() {var popup = document.getElementById("myPopup"); popup.classList.toggle("show") }
  
      