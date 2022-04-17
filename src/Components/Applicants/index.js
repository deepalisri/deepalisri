import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Writing from '../../assets/writing.svg';
import { API_BASE_URL } from "../constants";

function Applicants({ clickHandler, jobId }) {
    const [data, setData] = useState([]);
    const location = useLocation();
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            headers: {
                "Authorization": location.state.token
            },
            redirect: 'follow'
        };
        fetch(`${API_BASE_URL}/recruiters/jobs/${jobId}/candidates`, requestOptions)
            .then(response => response.json())
            .then(result => setData(result.data))
            .catch(error => console.error(error));
    }, [])
    return (
        <div id="open-modal" className="modal-window">
            <div className="modal-content">
                <div className="top-content flex space-between align-center">
                    <h3>Applicants for this job</h3>
                    <h3 className="modal-close" onClick={clickHandler}>x</h3>
                </div>
                <p>Total {(data && data.length) || 0} applications</p>
                {data ? <div className="modal-inner-content flex space-between">
                    {data && data.map((item, index) => {
                        return (
                            <div className="cards" key={index}>
                                <div className="flex candidate-details">
                                    <div className="icon">
                                        <p>{item.name.charAt(0)}</p>
                                    </div>
                                    <div className="personal-info">
                                        <h3>{item.name}</h3>
                                        <p>{item.email}</p>
                                    </div>
                                </div>
                                <div className="skills">
                                    <h3>Skills</h3>
                                    <p>{item.skills}</p>
                                </div>
                            </div>
                        )
                    })}
                </div> : <div className="empty-container modal-inner-content">
                    <img src={Writing} alt="no-candidates" />
                    <p>No applications available!</p>
                </div>}
            </div>
        </div>
    )
}
export default Applicants