import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export default function Assistir(props) {

    const query = useQuery()



    return (
        <div className="page">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${query.get('v')}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
        </div>
    )
}