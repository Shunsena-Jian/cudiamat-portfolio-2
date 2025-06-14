import React from 'react';

export default function ExperienceLayout({ content }) {
    return (
        <main className={'experience-section container-fluid p-3'}>
            <div className={'row'}>
                <div className={'col'}>
                    {
                        content
                            ? content
                            : <p>No experiences to show for now.</p>
                    }
                </div>
            </div>
        </main>
    );
}