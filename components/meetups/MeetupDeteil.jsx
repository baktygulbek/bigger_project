import React from 'react';
import classes from '@/components/meetups/MeetupDeteil.module.css'


const MeetupDeteil = (props) => {
    return (
        <section className={classes.deteil}>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <address>{props.address}</address>
            <p>{props.discription}</p>
        </section>
    );
};

export default MeetupDeteil;