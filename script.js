let unseenNotifications = document.querySelectorAll(".unseen");
let noticitaionUnseen = document.querySelector(".noticitaion_unseen");
let circle = document.querySelectorAll(".circle");
let markAllBtn = document.querySelector(".mark_all_btn");


noticitaionUnseen.innerText = unseenNotifications.length

unseenNotifications.forEach((notification)=>{

    notification.addEventListener("click",(e)=>{
        notification.classList.add('active');
        notification.classList.remove('unseen');
        let unseenNotifications = document.querySelectorAll(".unseen");
        noticitaionUnseen.innerText = unseenNotifications.length
    })

})

markAllBtn.addEventListener("click",()=>{

    unseenNotifications.forEach((notification)=>{

            notification.classList.add('active');
            notification.classList.remove('unseen');
            let unseenNotifications = document.querySelectorAll(".unseen");
            noticitaionUnseen.innerText = unseenNotifications.length
            
        })

   

})