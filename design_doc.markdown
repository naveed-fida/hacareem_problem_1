##Overview
This is the design document for the "single tap ride" app that leverages Careem's API end-points. This document is by no means a complete description of what the functionality is going to look like in the end but is meant reflect my current understanding of the domain and as a base and foundation to build upon.
This document does not discuss any specific implementation details apart from the technology stack. Those details will be expounded upon elsewhere.

Scenarios:
Lets look at a few hypothetical scenarios of how someone might need to use "single tap ride" feature of Careem's.
**Scenario: Gul Khan**
It's Tuesday and Gul Khan has just landed at Peshawar airport after performing Umrah. He sees a giant tablet mounted on a wall to his side with our "single tap ride" app loaded onto it. He languidly strolls towards it, enters his phone number, his drop-off location, and selects the most luxurious car available. Captain Khan Zada appears with his Mercedes C class, with a 4 minute ETA, helpline number, and with a price tag of Rs.1000. At the same time he receives an SMS showing the same information he saw in the app.

**FLow of the application**
1. The first screen shown to the user has input boxes for phone number of the user, their destination(optional) and a car category.

2. When the  user submits the above details he's prompted to select car category
