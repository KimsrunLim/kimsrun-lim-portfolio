import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import projectData from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
    const [clickedProjectIndex, setClickedProjectIndex] = useState(null); // Track clicked project
    const intervalRefs = useRef([]); // Store interval IDs for each project
    const [clickedImageIndex, setClickedImageIndex] = useState(
        projectData.map(() => 0) // Initialize clickedImageIndex with 0 for each project
    );

    // Function to go to the next image for each project
    const nextImage = (projectIndex) => {
        setClickedImageIndex((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % projectData[projectIndex].images.length;
            return newIndexes;
        });
    };

    // Reset the interval timer for each project
    const resetInterval = (projectIndex) => {
        if (intervalRefs.current[projectIndex]) {
            clearInterval(intervalRefs.current[projectIndex]); // Clear any existing timer
        }
        intervalRefs.current[projectIndex] = setInterval(() => nextImage(projectIndex), 3000); // Set a new interval to change the image every 3 seconds
    };

    useEffect(() => {
        // Initialize interval for each project
        projectData.forEach((_, projectIndex) => resetInterval(projectIndex));

        // Cleanup intervals on component unmount
        return () => {
            intervalRefs.current.forEach(clearInterval);
        };
    }, []);

    // Handle click on image to go to next image, reset the timer, and disable interaction
    const next = (projectIndex) => {
        setClickedProjectIndex(projectIndex);
        nextImage(projectIndex); // Go to the next image for clicked project
        resetInterval(projectIndex); // Reset the auto-advance timer for that project
    };

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>

            {projectData.map((project, projectIndex) => {
                const currentImage = clickedImageIndex[projectIndex]; // Get the current image index for the project
                return (
                    <div key={projectIndex} className={styles.project}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>

                        <div className={styles.splitContainer}>
                            {/* Terminal Section */}
                            <div className={styles.terminalBox}>
                                <pre>
                                    {project.code.map((line, index) => (
                                        <React.Fragment key={index}>
                                            <code>{index + 1}{`\t`}{line}</code>
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </pre>
                            </div>

                            {/* Slideshow Section */}
                            <div className={styles.slideshow} onClick={() => next(projectIndex)}>
                                <img
                                    src={getImageUrl(project.images[currentImage])}
                                    alt={`Project ${currentImage + 1}`}
                                    className={`${styles.image} ${clickedProjectIndex === projectIndex ? styles.clicked : ''}`}
                                />
                            </div>
                        </div>

                        <div className={styles.textContainer}>
                            <div className={styles.description}>
                                <h4 className={styles.textHeader}>Description</h4>
                                {Array.isArray(project.description) ? (
                                    project.description.map((line, index) => <p key={index}>{line}</p>)
                                ) : (
                                    <p>{project.description || "No description available"}</p>
                                )}
                            </div>

                            <div className={styles.approach}>
                                <h4 className={styles.textHeader}>Approach</h4>
                                {Array.isArray(project.approach) ? (
                                    project.approach.map((line, index) => <p key={index}>{line}</p>)
                                ) : (
                                    <p>{project.approach || "No approach provided"}</p>
                                )}
                            </div>
                        </div>


                    </div>
                );
            })}
        </section>
    );
};
