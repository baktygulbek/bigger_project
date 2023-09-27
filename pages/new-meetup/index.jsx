import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const NewMeetupPage = () => {
  async function addMeetupHandler(data) {
   const  response = await fetch('/api/new-meetup',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
   })
   const result = await response.json()
   console.log(result);
   router.push('/')
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
