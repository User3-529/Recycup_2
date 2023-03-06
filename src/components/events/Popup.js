import React from 'react'
import styles from './Popup.module.css'


export default function Popup(props) {
//    console.log(props.individualMail, "individualMail")

   
   const rsvpData = {
    eventId:props.events._id,
    mailId:props.individualMail,
  }

   async function handleRSVP (){
 const indivResponse = await fetch(
  `/api/rsvp-event`,
  {
    method: "POST",
    body: JSON.stringify(rsvpData),
    headers: {
      'Content-Type': 'application/json',
    }
  }
);
  const data =await indivResponse.json();
  console.log(indivResponse)
  console.log(data)
if (!indivResponse.ok) {
  console.log("Error occured")
}
return data;
}
   
    return ( props.trigger )?
        <>
        <div className={styles.popupPage}>
        <div className={styles.popup}>
        <div className={styles.close}>
         <a onClick={()=>{props.setTrigger(false)}}>x</a>
        </div>
   
        <div className={styles.popupHead}>
        {props.events.eventName}
        </div>
        <div className={styles.description}>
            <ol>
                <li>Type of event : {props.events.eventType}</li>
                <li>Date of event : {props.events.eventDetails[0].date}</li>
                <li>Time of event :  {props.events.eventDetails[0].time}</li>
                <li>Duration :  {props.events.eventDetails[0].duration}</li>
                <li>Target Audience:{props.events.targetAudience} </li>
                <li>Contact organisers :{props.events.enquiryDetails}</li>
                <li>Audience Limit : {props.events.participantsLimit}</li>
                <li>About this event : {props.events.eventDescription}</li>
            </ol> 
        </div> <br />
        <div className={styles.button}>
        <a onClick={handleRSVP}>RSVP NOW</a>
        </div>
        </div>
        </div>
            
        </>
        : "";
}
