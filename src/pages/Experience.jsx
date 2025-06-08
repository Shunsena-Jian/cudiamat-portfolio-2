import {useEffect} from "react";

export default function Experience() {
    useEffect(() => {
        document.title = 'Cudiamat Portfolio - Experiences';
    }, []);

    return (
        <>
            <main className={'experience-section container-fluid p-3'}>
                <div className={'row'}>
                    <div className={'col'}>
                        <h1 className={'m-0'}>Something</h1>
                    </div>
                </div>
            </main>
        </>
    );
}