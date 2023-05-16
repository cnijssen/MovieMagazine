<?php
/**
 * @return array
 */
function getMovie()
{
    return [
        "results" => [
            [
                "id" => 1,
                "director" => "Christopher Nolan",
                "film" => "Interstellar",
                "duration" => "2h 49m",
                "img" => "webservice/includes/images/interstellar.png",
                "logo" => "https://youtu.be/zSWdZVtXT7E"
            ],
            [
                "id" => 2,
                "director" => "Russo Brothers",
                "film" => "Avengers: Infinity War",
                "duration" => "2h 29m",
                "img" => "webservice/includes/images/infinity.png",
                "logo" => "https://youtu.be/6ZfuNTqbHE8"
            ],
            [
                "id" => 3,
                "director" => "Matt Reeves",
                "film" => "The Batman",
                "duration" => "2h 55m",
                "img" => "webservice/includes/images/batman.png",
                "logo" => "https://youtu.be/mqqft2x_Aa4"
            ],
            [
                "id" => 4,
                "director" => "Kyle Balda",
                "film" => "Minions: The Rise of Gru",
                "duration" => "1h 28m",
                "img" => "webservice/includes/images/minions.png",
                "logo" => "https://youtu.be/6DxjJzmYsXo"
            ],
            [
                "id" => 5,
                "director" => "Marc Forster",
                "film" => "World War Z",
                "duration" => "1h 56m",
                "img" => "webservice/includes/images/wwz.png",
                "logo" => "https://youtu.be/Md6Dvxdr0AQ"
            ],
            [
                "id" => 6,
                "director" => "Sam Raimi",
                "film" => "Doctor Strange <br> in the Multiverse of Madness",
                "duration" => "2h 6m",
                "img" => "webservice/includes/images/doctor.png",
                "logo" => "https://youtu.be/aWzlQ2N6qqg"
            ],
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getMovieDetails($id)
{
    $tags = [
        1 => [
            "director" => "Christopher Nolan",
            "film" => "Interstellar",
            "cover" => "Matthew McConaughe",
            "duration" => "2h 49m",
            "img" => "webservice/includes/images/interstellar.png",
        ],
        2 => [
            "director" => "Russo Brothers",
            "film" => "Avengers: Infinity War",
            "cover" => "Robert Downey Jr.",
            "duration" => "2h 29m",
            "img" => "webservice/includes/images/infinity.png",
        ],
        3 => [
            "director" => "Matt Reeves",
            "film" => "The Batman",
            "cover" => "Robert Pattinson",
            "duration" => "2h 55m",
            "img" => "webservice/includes/images/batman.png",
        ],
        4 => [
            "director" => "Kyle Balda",
            "film" => "Minions: The Rise of Gru",
            "cover" => "Steve Carell",
            "duration" => "1h 28m",
            "img" => "webservice/includes/images/minions.png",
        ],
        5 => [
            "director" => "Marc Forster",
            "film" => "World War Z",
            "cover" => "Brad Pitt",
            "duration" => "1h 56m",
            "img" => "webservice/includes/images/wwz.png",
        ],
        6 => [
            "director" => "Sam Raimi",
            "film" => "Doctor Strange <br> in the Multiverse of Madness",
            "cover" => "Benedict Cumberbatch",
            "duration" => "2h 6m",
            "img" => "webservice/includes/images/doctor.png",
        ],
    ];

    return $tags[$id];
}
