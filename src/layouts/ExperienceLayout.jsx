import React from 'react';

export default function ExperienceLayout({ content, details }) {
    return (
        <main className={'experience-section d-flex p-3'}>
            <section className={'row container-fluid'}>
                <div className={'col-4 d-flex align-items-center'}>
                    {
                        content
                            ? content
                            : <p>No experiences to show for now.</p>
                    }
                </div>
                <div className={'col-8 d-flex align-items-center justify-content-start'}>
                    {
                        details
                            ? details
                            : <p>No details or confidential</p>
                    }
                </div>
            </section>
        </main>
    );
}