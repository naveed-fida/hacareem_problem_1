##Overview
This is the design document for the "single tap ride" app that leverages Careem's API end-points. This document is by no means a complete description of what the functionality is going to look like in the end but is meant reflect my current understanding of the domain and as a base and foundation to build upon.
This document does not discuss any specific implementation details apart from the technology stack. Those details will be expounded upon elsewhere.

Scenarios:
Lets look at a few hypothetical scenarios of how someone might need to use "single tap ride" feature of Careem's.
**Scenario: Gul Khan**
It's Tuesday and Gul Khan has just landed at Peshawar airport after performing Umrah. He sees a giant tablet mounted on a wall to his side with our "single tap ride" app loaded onto it. He languidly strolls towards it, enters his phone number, his drop-off location, and selects the most luxurious car available. Captain Khan Zada appears with his Mercedes C class, with a 4 minute ETA, helpline number, and with a price tag of Rs.1000. At the same time he receives an SMS showing the same information he saw in the app.

###FLow of the application
1. The first screen shown to the user has input boxes for phone number of the user, their destination(optional) and a car category.

2. When the user submits the above data, a new page appears listing the assigned captain's name, the car, price estimate, ETA, helpline number.

3. The user also gets an SMS with a pin number for verification.

4. After the pin number is verified, the captain is informed and the ride is officially on.

###Technology Stack
The application will be a web application (browser based). The following technologies are being chosen for the project. A web application was preferred because:

1. Prior Experience
2. Cross platform and so a single code base suffices for all plateform.

**Backbone.js**
Backbone.js is chosen for the following reasons.


1. Small and Lean Framework.
2. Simple MVC architecture.
3. Has good facilities for code modularity.
4. Prior Experience.
5. Mature framework.
6. Simple enough so that you can read the source code if need be and powerful enough to build complex, modern, and responsive web applications.

**Tooling**
_Jasmine_ will be used for testing the application.
_Make_ will be used for build automation.
