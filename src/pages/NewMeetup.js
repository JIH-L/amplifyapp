import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import classes from "./NewMeetup.module.css"

function NewMeetup() {
  const navigate = useNavigate();
  function onAddMeetupHandler(meetupData) {
    fetch("https://amplifyapp-1a7df-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      alert("Successful");
      navigate("/");
    });
  }

  return (
    <section className={classes.wrapper}>
      <h1>Add New Image</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}
export default NewMeetup;
