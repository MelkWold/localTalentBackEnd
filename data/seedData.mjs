export const users = [
  {
    taskName: "John Doe",
    email: "john@example.com",
    password: "johnIsFine@123",
    phone: "+1-123-456-7890",
    taskAddress: {
      city: "Austin",
      county: "Travis",
      state: "Texas",
      zipcode: "73301",
      country: "USA",
    },
    services: ["Plumbing", "Electrical"],
    role: "Provider",
  },
  {
    taskName: "Sarah Johnson",
    email: "sarah@example.com",
    password: "sarahIsGood@123",
    phone: "+1-234-567-890",
    taskAddress: {
      city: "Denver",
      county: "Denver",
      state: "Colorado",
      zipcode: "80014",
      country: "USA",
    },
    services: ["Tutoring"],
    role: "Customer",
  },

  {
    taskName: "Devon Jones",
    email: "devon@example.com",
    password: "devonIsFine@123",
    phone: "+1-345-456-7890",
    taskAddress: {
      city: "Seattle",
      county: "King",
      state: "Washington",
      zipcode: "98101",
      country: "USA",
    },
    services: ["Gardening", "Landscaping"],
    role: "Provider",
  },

  {
    taskName: "Anna Lee",
    email: "Anna@example.com",
    password: "anaIsGreat@123",
    phone: "+1-789-456-7890",
    taskAddress: {
      city: "Miami",
      county: "Miami-Dade",
      state: "Florida",
      zipcode: "33101",
      country: "USA",
    },
    services: ["Babysitting"],
    role: "Customer",
  },
];

export const tasks = [
  {
    customer: "68ed51492a2666039c25050c",
    provider: "68ed51492a2666039c25050d",
    amountPaid: 150,
    service: "Gardening",
    taskStatus: "Completed",
    paymentStatus: "Completed",
  },
  {
    customer: "68ed51492a2666039c25050e",
    provider: "68ed51492a2666039c25050e",
    amountPaid: 80,
    service: "Babysitting",
    taskStatus: "Completed",
    paymentStatus: "Completed",
  },
  {
    customer: "68ed51492a2666039c25050e",
    provider: "68ed51492a2666039c25050d",
    amountPaid: 120,
    service: "Gardening",
    taskStatus: "Completed",
    paymentStatus: "Completed",
  },
  {
    customer: "68ed51492a2666039c25050c",
    provider: "68ed51492a2666039c25050d",
    amountPaid: 100,
    service: "Landscaping",
    taskStatus: "Completed",
    paymentStatus: "Completed",
  },
  {
    customer: "68ed51492a2666039c25050e",
    provider: "68ed51492a2666039c25050b",
    amountPaid: 110,
    service: "Electrical",
    taskStatus: "Completed",
    paymentStatus: "Completed",
  },
  {
    customer: "68ed51492a2666039c25050c",
    provider: "68ed51492a2666039c25050c",
    amountPaid: 90,
    service: "Tutor",
    taskStatus: "Completed",
    paymentStatus: "Completed",
  },
];

export const transactions = [
  {
    task: "68ed5e21f4eb400449879c21",
    amount: 150,
    paymentMethod: "Credit Card",
    paymentStatus: "Completed",
  },
  {
    task: "68ed5e21f4eb400449879c22",
    amount: 80,
    paymentMethod: "Credit Card",
    paymentStatus: "Completed",
  },
  { task: "68ed5e21f4eb400449879c23", amount: 120, paymentMethod: "PayPal", status: "Pending" },
  {
    task: "68ed5e21f4eb400449879c24",
    amount: 100,
    paymentMethod: "Credit Card",
    paymentStatus: "Completed",
  },
  {
    task: "68ed5e21f4eb400449879c25",
    amount: 110,
    paymentMethod: "Credit Card",
    paymentStatus: "Pending",
  },
  { 
    task: "68ed5e21f4eb400449879c26", 
    amount: 90, 
    paymentMethod: "Cash", 
    paymentStatus: "Completed" },
];

export const reviews = [
  { user: "68ed51492a2666039c25050c", reviewer: "68ed51492a2666039c25050e", reviewee: "68ed51492a2666039c25050d", task: "68ed5e21f4eb400449879c21", rating: 5, comment: "Fantastic job!" },
  { user: "68ed51492a2666039c25050d", reviewer: "68ed51492a2666039c25050c", reviewee: "68ed51492a2666039c25050d", task: "68ed5e21f4eb400449879c22", rating: 4, comment: "Good work!" },
  { user: "68ed51492a2666039c25050e", reviewer: "68ed51492a2666039c25050c", reviewee: "68ed51492a2666039c25050e", task: "68ed5e21f4eb400449879c23", rating: 4, comment: "Will hire again!" },
  { user: "68ed51492a2666039c25050d", reviewer: "68ed51492a2666039c25050e", reviewee: "68ed51492a2666039c25050d", task: "68ed5e21f4eb400449879c24", rating: 3, comment: "Not too bad!" },
  { user: "68ed51492a2666039c25050c", reviewer: "68ed51492a2666039c25050e", reviewee: "68ed51492a2666039c25050c", task: "68ed5e21f4eb400449879c25", rating: 1, comment: "Not a good experience; I do not recommend!"},
  { user: "68ed51492a2666039c25050e", reviewer: "68ed51492a2666039c25050c", reviewee: "68ed51492a2666039c25050e", task: "68ed5e21f4eb400449879c26", rating: 4, comment: "Great job!" },
];
