import React, { useState } from 'react';
import Pagination from './Pagination';


const Foundations = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 3;
    const organisationsList = [
        {
            name: "Dbam o Zdrowie1",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Dbam o Zdrowie2",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Dbam o Zdrowie3",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        }
    ];

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = organisationsList.slice(indexOfFirstPost, indexOfLastPost);
    const totalPosts = organisationsList.length;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <>
            <p className="helping-description"> W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują. </p>
            <ul className="helping-table">
                {currentPosts.map(organisation => {
                    return (
                        <div className="table-row">
                            <div className="left-info">
                                <p className="name"> Fundacja {organisation.name} </p>
                                <p className="goal"> Cel i misja: {organisation.goal} </p>
                            </div>
                            <p className="items"> {organisation.items} </p>
                        </div>
                    )
                })}
            </ul>
            <Pagination postPerPage={postPerPage} totalPosts={totalPosts} paginate={paginate}/>
        </>
    )
};

export default Foundations;