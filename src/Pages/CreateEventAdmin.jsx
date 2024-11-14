/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateEvent.css";

const CreateEvent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/events/create", {
                title,
                description,
                date,
                location
            });
            alert("Event created successfully!");
            navigate("/admin-home");  
        } catch (error) {
            console.error("Error creating event:", error);
            alert("Failed to create event");
        }
    };

    return (
        <div className="create-event-container">
            <h2>Create New Event</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;
