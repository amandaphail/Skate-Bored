# Project Overview

## Project Name

Skate Bored

## Project Description

Search for skate parks in NYC by their features and locations, create a checklist of parks you've already visited, and randomly generate skate parks to visit.

## API and Data Sample

I will be using the DPR Skate Parks API, found from the collection of NYC Open Data API

https://dev.socrata.com/foundry/data.cityofnewyork.us/8knb-zsb6

```
{
    the_geom: {
    type: "MultiPolygon",
    coordinates: [
        [
        [
        [
        -73.91996794995724,
        40.588848379685274
        ],
        [
        -73.91996219041039,
        40.58885629235341
        ],
        [
        -73.91995483241764,
        40.58886339336753
        ],
        [
        -73.91994606859664,
        40.58886949683679
        ],
        [
        -73.91993612836707,
        40.58887444298401
        ],
        [
        -73.91992527194493,
        40.5888781023285
        ],
        [
        -73.91991378353059,
        40.58888037907563
        ],
        [
        -73.9199019638688,
        40.588881213624475
        ],
        [
        -73.91988126684772,
        40.588881825932255
        ],
        [
        -73.91986094669114,
        40.58888488513245
        ],
        [
        -73.91984149808071,
        40.58889031675072
        ],
        [
        -73.91982339448106,
        40.58889798855772
        ],
        [
        -73.91980707661376,
        40.58890771378796
        ],
        [
        -73.919796683358,
        40.58891602161859
        ],
        [
        -73.919784636384,
        40.58892291021433
        ],
        [
        -73.91977126507811,
        40.58892819122813
        ],
        [
        -73.91975693503676,
        40.58893172026706
        ],
        [
        -73.91974203807018,
        40.58893340084064
        ],
        [
        -73.91975058272715,
        40.58897510285266
        ],
        [
        -73.91972659286603,
        40.58897517446579
        ],
        [
        -73.91970294990821,
        40.588972074719145
        ],
        [
        -73.91968036972415,
        40.58896589746802
        ],
        [
        -73.91965953600473,
        40.588956829749584
        ],
        [
        -73.91964107956014,
        40.58894514611947
        ],
        [
        -73.91962555921972,
        40.58893120033879
        ],
        [
        -73.91961344491156,
        40.58891541466253
        ],
        [
        -73.91960510343398,
        40.588898267054375
        ],
        [
        -73.91960078734971,
        40.588880276714605
        ],
        [
        -73.91960062733904,
        40.58886198835957
        ],
        [
        -73.91960462824342,
        40.588843955728564
        ],
        [
        -73.91965540161685,
        40.58885590426903
        ],
        [
        -73.9196595233962,
        40.58884462114616
        ],
        [
        -73.9196661138431,
        40.58883404099105
        ],
        [
        -73.9196749790592,
        40.588824475081935
        ],
        [
        -73.91968585822056,
        40.58881620485686
        ],
        [
        -73.91969843125152,
        40.58880947363355
        ],
        [
        -73.91971480538979,
        40.58879696167469
        ],
        [
        -73.91972817245686,
        40.58878252124365
        ],
        [
        -73.91973814842343,
        40.58876656720918
        ],
        [
        -73.91974444668605,
        40.58874955792502
        ],
        [
        -73.91974966217063,
        40.58873776633818
        ],
        [
        -73.91975735247323,
        40.5887267900467
        ],
        [
        -73.91976730780375,
        40.58871692848016
        ],
        [
        -73.91977925658334,
        40.58870845065872
        ],
        [
        -73.91979287285282,
        40.58870158785432
        ],
        [
        -73.91980778516489,
        40.58869652728173
        ],
        [
        -73.91982358671702,
        40.58869340699151
        ],
        [
        -73.9198484028128,
        40.58869379135626
        ],
        [
        -73.91987277761244,
        40.58869736400993
        ],
        [
        -73.91989601142174,
        40.588704022397195
        ],
        [
        -73.9199174372989,
        40.5887135753848
        ],
        [
        -73.91993644019932,
        40.58872574874798
        ],
        [
        -73.91995247463066,
        40.588740193042355
        ],
        [
        -73.9199650803116,
        40.58875649363451
        ],
        [
        -73.91997389538462,
        40.588774182604574
        ],
        [
        -73.91997866680359,
        40.588792752177895
        ],
        [
        -73.91997925759797,
        40.58881166930098
        ],
        [
        -73.91997565080506,
        40.58883039094332
        ],
        [
        -73.91996794995724,
        40.588848379685274
        ]
        ]
        ]
        ]
    },
        system: "B057-06-SKATEPARK-01",
        gispropnum: "B057",
        name: "Marine Park Skatepark",
        bmx_permit: "",
        inline_ska: "",
        scooter_pe: "",
        features_1: "Funbox",
        features_2: "Quarter Pipe",
        features_3: "Bank Ramp",
        park_surfa: "Concrete",
        feature_su: "Wood",
        borough: "Brooklyn",
        shape_area: "6121.92388496",
        shape_len: "337.738978379"
},
```

## Wireframes

https://i.imgur.com/jJozVO0.png

<blockquote class="imgur-embed-pub" lang="en" data-id="a/S3UoA3D" data-context="false" ><a href="//imgur.com/a/S3UoA3D"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Built with HTML, CSS, and JavaScript.
- Styled using Flexbox or Grid.
- Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
- Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
- Fulfill the build requirements you have specified in your MVP.
- Deployed site to a hosting service like Github Pages.
- Make commits to GitHub every day.
- A README.md file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as npm i.

- Allow user to search for parks by certain features (e.g. quarter pipe, bank ramp, etc.)
- Allow user to choose parks visited and collect them on a list
- Allow user to rate the skate parks and visited parks to be ordered from highest to lowest rating
- "Explore a New Park" button - allowing user to randomly generate a park they have not visited before
- "Random Park" generator that can return a random park they have or have not visited (all parks)
- Use multiple HTML pages

#### PostMVP

- Add second API
- Use local storage to save visited parks list
- add notes on their personal visited page about parks (e.g. not too crowded, bring Zach here - he would like it, etc.)

## Priority Matrix

https://i.imgur.com/JIWJfE2.png

<blockquote class="imgur-embed-pub" lang="en" data-id="JIWJfE2"><a href="https://imgur.com/JIWJfE2">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

## Timeframes

| Component                                   | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Getting API prepared to work with Each Page |    M     |      1hr       |      N/A      |     N/A     |
| Write homepage HTML                         |    M     |      2hrs      |      N/A      |     N/A     |
| Write search results page HTML              |    M     |      2hrs      |      N/A      |     N/A     |
| Write visited parks page HTML               |    M     |      2hrs      |      N/A      |     N/A     |
| Work on Features Drop Down                  |    H     |      3hrs      |      N/A      |     N/A     |
| Work on Location Drop Down                  |    H     |      3hrs      |      N/A      |     N/A     |
| Visited Park List                           |          |                |               |
| Allow User to Check Parks Visited           |    H     |      2hrs      |      N/A      |     N/A     |
| Write List Array For Them to be Added to    |    H     |      2hrs      |      N/A      |     N/A     |
| New Park Button                             |          |                |               |             |
| Remove Parks Already Visited from Search    |    H     |      2hrs      |      N/A      |     N/A     |
| Choose Random Park from Remaining Parks     |    H     |      3hrs      |      N/A      |     N/A     |
| Work on Random Park Button & Results        |    M     |      3hrs      |      N/A      |     N/A     |
| Rating System for Parks Visited             |          |                |               |             |
| Allow User to Select Wheel Rating           |    M     |      3hrs      |      N/A      |     N/A     |
| Order List According to Rating              |    M     |      2hrs      |      N/A      |     N/A     |
| Write Homepage CSS                          |    H     |      3hrs      |      N/A      |     N/A     |
| Write Search Results Page CSS               |    H     |      3hrs      |      N/A      |     N/A     |
| Write Visited Parks CSS                     |    H     |      3hrs      |      N/A      |     N/A     |
| Total                                       |          |     36 hrs     |      N/A      |     N/A     |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
# Skate-Bored
