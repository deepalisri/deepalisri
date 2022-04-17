import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import gpsLogo from "../../assets/location.svg"
import Applicants from "../Applicants";
import './style.scss';
import home from "../../assets/home.svg";
import writing from '../../assets/writing.svg';
import { API_BASE_URL } from "../constants";

function JobPosted() {
    const location = useLocation();
    const [jobs, setJobs] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [open, setOpen] = useState(false);
    const [jobId, setJobId] = useState('');

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            headers: {
                "Authorization": location.state.token
            },
        };

        fetch(`${API_BASE_URL}/recruiters/jobs`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.data) {
                    setJobs(result.data.data)
                } else {
                    return
                }
            })
            .catch(error => console.error(error));
    }, []);

    const PER_PAGE = 8;
    const pageCount = Math.ceil(jobs.length / PER_PAGE);

    const handlePageClick = (event) => {
        const newOffset = event.selected * PER_PAGE % jobs.length;
        setItemOffset(newOffset);
    };

    const handleModalOpen = (jobId) => {
        setOpen(!open);
        setJobId(jobId)
    }

    const currentPageData = jobs && jobs
        .slice(itemOffset, itemOffset + PER_PAGE)
        .map((card, index) => {
            return (
                <div className="card" key={index} onClick={() => handleModalOpen(card.id)}>
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                    <div className="card-items flex space-between align-center">
                        <div className="flex space-between align-center">
                            <img src={gpsLogo} alt="location-logo" />
                            <p>{card.location}</p>
                        </div>
                        <div><button className="apply-button">Apply</button></div>
                    </div>
                </div>
            )
        });
    return (
        <div className="jobs-container">
            <img src={home} alt="home-icon" />
            <span>Home</span>
            <h1>Jobs posted by you</h1>
            <div className="cards flex space-between">
                {jobs.length ? currentPageData :
                    <div className="empty-container">
                        <img src={writing} alt="no-jobs" />
                        <p>Your posted jobs will show here!</p>
                    </div>}
            </div>

            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                containerClassName="pagination flex"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
            {open && <Applicants jobId={jobId} clickHandler={handleModalOpen} open={open} />}
        </div>
    )
}
export default JobPosted