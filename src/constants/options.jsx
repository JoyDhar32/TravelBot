export const SelectTravelList=[
    {
        id:1,
        title:'Just Me',
        desc: 'A sole traveles in exploration',
        icon:'🕺',
        people:'1'
    },
    {
        id:2,
        title:'Couple',
        desc: 'A couple in love',
        icon:'👫',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc: 'A family of four',
        icon:'👨‍👩‍👧',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Group',
        desc: 'A group of friends',
        icon:'👨‍👩👧‍👦',
        people:'5 to 10 People'
    }
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc: 'Stay concious of budget',
        icon:'💰',
    },
    {
        id:2,
        title:'Moderate',
        desc: 'Stay in the middle',
        icon:'💵',
    },
    {
        id:3,
        title:'Luxury',
        desc: 'Don\'t worry about the budget',
        icon:'💸',
    }
]

export const AI_PROMPT='Generate Travel Plan for Location : {location}, for {totalDays} days for {traveler} people with a {budget} budget, Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions and suggest itinerary with placename, Place Details, Place image URL, Geo Coordinates, ticket Pricing , Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format'