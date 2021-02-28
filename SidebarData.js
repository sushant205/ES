import React from 'react'
import {
    ColumnsGap,
    PeopleFill,
    Building,
    Book,
    PencilSquare,
    ClipboardData
} from "react-bootstrap-icons";

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <ColumnsGap />,
        link: "/dashboard",
    },
    {
        title: "Students",
        icon: <PeopleFill />,
        link: "/students",
    },

    {
        title: "Faculties",
        icon: <Building />,
        link: "/faculties",
    },

    {
        title: "Subjects",
        icon: <Book />,
        link: "/create_subject",
    },
    {
        title: "Exams",
        icon: <PencilSquare />,
        link: "/exams",
    },
    {
        title: "Results",
        icon: <ClipboardData />,
        link: "/results",
    },
];