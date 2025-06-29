import React from 'react';

export default function ExperienceLayout({ content }) {
    return (
        <main className={'experience-section container-fluid d-flex align-items-center justify-content-center p-3'}>
            <section className={'row'}>
                <div className={'col'}>
                    {
                        content
                            ? content
                            : <p>No experiences to show for now.</p>
                    }
                </div>
            </section>
        </main>
    );
}