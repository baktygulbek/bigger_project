import Link from "next/link";
import Card from "@/components/ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter()
  const showDeteilHandler = () =>{
  router.push(`/${props.id}`)
  }


  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {/* <Link href={`/${props.id}`}>
            <button>Show Details</button>
          </Link> */}
          <button onClick={showDeteilHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
