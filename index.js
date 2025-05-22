let garage = [
    {
        color: "red",
        running: true,
        type: "motorcycle",
        year: 1995,
        make: "Harley Davidson",
        model: "Sportster",
        vin: "1HD1KEM16KC123456",
        owner: "John Doe",
        licensePlate: "ABC123",
        mileage: 15000,
        serviceHistory: [
            {
                date: "1995-01-15",
                serviceType: "Oil Change",
                notes: "Changed oil and filter.",
                cost: 100
            },
            {
                date: "1995-06-20",
                serviceType: "Tire Rotation",
                notes: "Rotated tires and checked brakes.",
                cost: 50
            },
            {
                date: "1995-09-10",
                serviceType: "Brake Inspection",
                notes: "Replaced front brake pads.",
                cost: 200
            },
            {
                date: "1995-11-05",
                serviceType: "Battery Replacement",
                notes: "Replaced battery and cleaned terminals.",
                cost: 150
            }
        ]
    },
    {
        color: "blue",
        running: false,
        type: "car",
        year: 2010,
        make: "Toyota",
        model: "Camry",
        vin: "4T1BF1FK0AU123456",
        owner: "Jane Smith",
        licensePlate: "XYZ789",
        mileage: 80000,
        serviceHistory: [
            {
                date: "2010-03-15",
                serviceType: "Oil Change",
                notes: "Changed oil and filter.",
                cost: 80
            },
            {
                date: "2010-07-20",
                serviceType: "Tire Rotation",
                notes: "Rotated tires and checked brakes.",
                cost: 60
            }
        ]
    },
    {
        color: "green",
        running: true,
        type: "truck",
        year: 2015,
        make: "Ford",
        model: "F-150",
        vin: "1FTEW1EF2FFA123456",
        owner: "Alice Johnson",
        licensePlate: "LMN456",
        mileage: 30000,
        serviceHistory: [
            {
                date: "2015-05-10",
                serviceType: "Oil Change",
                notes: "Changed oil and filter.",
                cost: 90
            },
            {
                date: "2015-09-15",
                serviceType: "Brake Inspection",
                notes: "Checked brakes and replaced rear pads.",
                cost: 250
            }
        ]
    }
]

console.log(garage[0].serviceHistory[1].notes)


let tweet = {
    text: "Hi from the tweet!",
    user: {
        name: "John Doe",
        screen_name: "johndoe",
        followers_count: 100,
        friends_count: 50,
        created_at: "2020-01-01"
    },
    created_at: "2023-10-01",
    retweet_count: 10,
    favorite_count: 5,
    entities: {
        hashtags: ["#hello", "#world"],
        user_mentions: [
            {
                screen_name: "janesmith",
                name: "Jane Smith"
            }
        ],
        urls: [
            {
                url: "http://example.com",
                expanded_url: "http://example.com",
                display_url: "example.com"
            }
        ]
    },
    coordinates: null,
    place: null,
    lang: "en",
    source: "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
    isOffensive: false,
}

console.log(tweet.text) // Output: "Hi from the tweet!"
console.log(tweet["text"]) // Output: "Hi from the tweet!"

console.log(tweet.isOffensive) // Output: false