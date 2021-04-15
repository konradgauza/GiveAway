import React, { useState } from 'react';
import Pagination from './Pagination';


const Organisations = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 3;
    const organisationsList = [
        {
            name: "Organizacja 1",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 2",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 3",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 4",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 5",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 6",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 7",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 8",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 9",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 10",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 11",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 12",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 13",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 14",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 15",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 16",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacjae 17",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 18",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 19",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 20",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Organizacja 21",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },


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

export default Organisations;