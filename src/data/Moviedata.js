import React from "react"
const movies = [

    {
        id: 1,
        title: "Baahubali: The Beginning",
        genre: "Action, Drama, Epic",
        rating: 4.8,
        duration: "2h 38m",
        language: "Telugu",
        certificate: "U/A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Jn_Nf0O0Nzkt1bAr7l7_KnpE_p1L80yLtviCVyWUKg&s=10",
        description:
            "A young man discovers his royal heritage and sets out to uncover the secrets of his family's past."
    },

    {
        id: 2,
        title: "RRR",
        genre: "Action, Drama, Historical",
        rating: 4.9,
        duration: "3h 2m",
        language: "Telugu",
        certificate: "U/A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCDyfGmA5jRaK5ioBxLBfXf6zTwbKrm38ZITevqNRrQ&s=10",
        description:
            "Two legendary revolutionaries join forces and fight against British rule in pre-independence India."
    },

    {
        id: 3,
        title: "Pushpa: The Rise",
        genre: "Action, Drama, Thriller",
        rating: 4.7,
        duration: "2h 59m",
        language: "Telugu",
        certificate: "A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9yocvaZbjUj-22NDeTWOTdU-XLsveqlK_qcr7-VitFg&s=10",
        description:
            "A determined labourer rises through the ranks of the red sandalwood smuggling world."
    },

    {
        id: 4,
        title: "Arjun Reddy",
        genre: "Romance, Drama",
        rating: 4.6,
        duration: "3h 2m",
        language: "Telugu",
        certificate: "A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQW1S-lLsQynO5k6ikw6XT8Xg8awpSWGQ4Gl-ElfIDwQ&s=10",
        description:
            "A brilliant but short-tempered surgeon struggles with love, heartbreak and self-destruction."
    },

     {
        id: 5,
        title: "Janatha Garage",
        genre: "Action, Drama",
        rating: 4.6,
        duration: "2h 42m",
        language: "Telugu",
        certificate: "U",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXuRHF2BxIABF5ZYaROWbdrIS3EzkDYT-L1DrmJKllg&s=10",
        description:
            "A young man with a passion for nature becomes involved with a powerful family that stands up for people in need."
    },

    {
        id: 6,
        title: "Aravinda Sametha",
        genre: "Action, Drama",
        rating: 4.7,
        duration: "2h 42m",
        language: "Telugu",
        certificate: "U/A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdEJhDKSysFZJxpmaiVt_wNDAz_g_RYMflQda53TANw&s=10",
        description:
            "A young man returns to his hometown and tries to end a long-running cycle of violence between two rival families."
    },

    {
        id: 7,
        title: "Paradise",
        genre: "Drama, Thriller",
        rating: 4.4,
        duration: "2h 10m",
        language: "Telugu",
        certificate: "A",
        image: "https://cdn.district.in/movies-assets/images/cinema/The-Paradise_Poster-2c67d280-75d9-11f0-8df3-db01d1baa444.jpg?im=Resize,width=400",
        description:
            "A group of people find themselves caught in an unexpected situation that challenges their relationships and survival."
    },
    {
        id: 8,
        title: "Bharat Ane Nenu",
        genre: "Political, Drama",
        rating: 4.6,
        duration: "2h 53m",
        language: "Telugu",
        certificate: "U",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErnK4eRtdb8TTzJCikiKSfpXx4zR_RpKABZhn60r-jw&s=10",
        description:
            "A young man unexpectedly becomes the Chief Minister and promises to bring meaningful changes to society."
    },


    {
        id: 9,
        title: "Rangasthalam",
        genre: "Action, Drama",
        rating: 4.8,
        duration: "2h 59m",
        language: "Telugu",
        certificate: "U/A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhtL4x2LKoBnhM6Hw_Grq2_JSN3wVWaRHRlga9RWKPA&s",
        description:
            "A hearing-impaired mechanic becomes involved in village politics and stands against an oppressive leader."
    },

    {
        id: 10,
        title: "Sita Ramam",
        genre: "Romance, Drama",
        rating: 4.8,
        duration: "2h 43m",
        language: "Telugu",
        certificate: "U",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgf-2COORGwTjYRyCM1P2RayIqHSKPXbVyc3cK-EaMRQ&s=10",
        description:
            "A mysterious letter leads a young woman on a journey to discover the love story of an army officer."
    },

    {
    id: 11,
    title: "Devara: Part 1",
    genre: "Action, Drama, Thriller",
    rating: 4.5,
    duration: "2h 58m",
    language: "Telugu",
    certificate: "U/A",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisT7q1Mz65FWAmZu-4m0X8pU2eSDWffCFkZpa0d29ZA&s=10",
    description:
        "A powerful story set against the backdrop of the sea, where a fearless man fights to protect his people."
},
    
    {
    id: 26,
    title: "Srimanthudu",
    genre: "Action, Drama, Family",
    rating: 4.6,
    duration: "2h 38m",
    language: "Telugu",
    certificate: "U",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTV-CSUiikpMvQMhEubZg6TuLl8BQlbul7sysLcgryWA&s=10",
    description:
        "A wealthy young man decides to adopt a village and works to improve the lives of its people while facing powerful enemies."
},

    {
        id: 13,
        title: "Dasara",
        genre: "Action, Drama, Thriller",
        rating: 4.5,
        duration: "2h 36m",
        language: "Telugu",
        certificate: "A",
        image: "https://cdn.district.in/movies-assets/images/cinema/Dasara-608x800-09c8e760-d76a-11ed-8644-c919a99eb7cf.jpg",
        description:
            "Set in a village surrounded by coal mines, a young man fights against injustice and social inequality."
    }

]

export default movies