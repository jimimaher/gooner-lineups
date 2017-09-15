const players = [
  {
     "name":"Calum Chambers",
     "position":"Right-Back",
     "jerseyNumber":21,
     "dateOfBirth":"1995-01-20",
     "nationality":"England",
     "contractUntil":"2020-06-30",
     "marketValue":null
  },
  {
     "name":"Jack Wilshere",
     "position":"Central Midfield",
     "jerseyNumber":10,
     "dateOfBirth":"1992-01-01",
     "nationality":"England",
     "contractUntil":"2018-06-30",
     "marketValue":null
  },
  {
     "name":"Petr Cech",
     "position":"Keeper",
     "jerseyNumber":33,
     "dateOfBirth":"1982-05-20",
     "nationality":"Czech Republic",
     "contractUntil":"2019-06-30",
     "marketValue":null
  },
  {
     "name":"David Ospina",
     "position":"Keeper",
     "jerseyNumber":13,
     "dateOfBirth":"1988-08-31",
     "nationality":"Colombia",
     "contractUntil":"2019-06-30",
     "marketValue":null
  },
  {
     "name":"Matt Macey",
     "position":"Keeper",
     "jerseyNumber":54,
     "dateOfBirth":"1994-09-09",
     "nationality":"England",
     "contractUntil":"2018-06-30",
     "marketValue":null
  },
  {
     "name":"Shkodran Mustafi",
     "position":"Centre-Back",
     "jerseyNumber":20,
     "dateOfBirth":"1992-04-17",
     "nationality":"Germany",
     "contractUntil":"2021-06-30",
     "marketValue":null
  },
  {
     "name":"Laurent Koscielny",
     "position":"Centre-Back",
     "jerseyNumber":6,
     "dateOfBirth":"1985-09-10",
     "nationality":"France",
     "contractUntil":"2020-06-30",
     "marketValue":null
  },
  // {
  //    "name":"Gabriel Paulista",
  //    "position":"Centre-Back",
  //    "jerseyNumber":5,
  //    "dateOfBirth":"1990-11-26",
  //    "nationality":"Brazil",
  //    "contractUntil":"2019-06-30",
  //    "marketValue":null
  // },
  {
     "name":"Per Mertesacker",
     "position":"Centre-Back",
     "jerseyNumber":4,
     "dateOfBirth":"1984-09-29",
     "nationality":"Germany",
     "contractUntil":"2018-06-30",
     "marketValue":null
  },
  {
     "name":"Rob Holding",
     "position":"Centre-Back",
     "jerseyNumber":16,
     "dateOfBirth":"1995-09-20",
     "nationality":"England",
     "contractUntil":"2020-06-30",
     "marketValue":null
  },
  {
     "name":"Nacho Monreal",
     "position":"Left-Back",
     "jerseyNumber":18,
     "dateOfBirth":"1986-02-26",
     "nationality":"Spain",
     "contractUntil":"2019-06-30",
     "marketValue":null
  },
  // {
  //    "name":"Kieran Gibbs",
  //    "position":"Left-Back",
  //    "jerseyNumber":3,
  //    "dateOfBirth":"1989-09-26",
  //    "nationality":"England",
  //    "contractUntil":"2018-06-30",
  //    "marketValue":null
  // },
  {
     "name":"Héctor Bellerín",
     "position":"Right-Back",
     "jerseyNumber":24,
     "dateOfBirth":"1995-03-19",
     "nationality":"Spain",
     "contractUntil":"2023-06-30",
     "marketValue":null
  },
  // {
  //    "name":"Carl Jenkinson",
  //    "position":"Right-Back",
  //    "jerseyNumber":25,
  //    "dateOfBirth":"1992-02-08",
  //    "nationality":"England",
  //    "contractUntil":"2018-06-30",
  //    "marketValue":null
  // },
  {
     "name":"Mathieu Debuchy",
     "position":"Right-Back",
     "jerseyNumber":2,
     "dateOfBirth":"1985-07-28",
     "nationality":"France",
     "contractUntil":"2019-06-30",
     "marketValue":null
  },
  {
     "name":"Granit Xhaka",
     "position":"Defensive Midfield",
     "jerseyNumber":29,
     "dateOfBirth":"1992-09-27",
     "nationality":"Switzerland",
     "contractUntil":"2021-06-30",
     "marketValue":null
  },
  {
     "name":"Francis Coquelin",
     "position":"Defensive Midfield",
     "jerseyNumber":34,
     "dateOfBirth":"1991-05-13",
     "nationality":"France",
     "contractUntil":"2021-06-30",
     "marketValue":null
  },
  {
     "name":"Mohamed Elneny",
     "position":"Defensive Midfield",
     "jerseyNumber":35,
     "dateOfBirth":"1992-07-11",
     "nationality":"Egypt",
     "contractUntil":"2020-06-30",
     "marketValue":null
  },
  {
     "name":"Aaron Ramsey",
     "position":"Central Midfield",
     "jerseyNumber":8,
     "dateOfBirth":"1990-12-26",
     "nationality":"Wales",
     "contractUntil":"2019-06-30",
     "marketValue":null
  },
  {
     "name":"Santi Cazorla",
     "position":"Central Midfield",
     "jerseyNumber":19,
     "dateOfBirth":"1984-12-13",
     "nationality":"Spain",
     "contractUntil":"2018-06-30",
     "marketValue":null
  },
  // {
  //    "name":"Alex Oxlade-Chamberlain",
  //    "position":"Right Midfield",
  //    "jerseyNumber":15,
  //    "dateOfBirth":"1993-08-15",
  //    "nationality":"England",
  //    "contractUntil":"2018-06-30",
  //    "marketValue":null
  // },
  {
     "name":"Mesut Özil",
     "position":"Attacking Midfield",
     "jerseyNumber":11,
     "dateOfBirth":"1988-10-15",
     "nationality":"Germany",
     "contractUntil":"2018-06-30",
     "marketValue":null
  },
  {
     "name":"Alexis Sánchez",
     "position":"Left Wing",
     "jerseyNumber":7,
     "dateOfBirth":"1988-12-19",
     "nationality":"Chile",
     "contractUntil":"2018-06-30",
     "marketValue":null
  },
  {
     "name":"Alex Iwobi",
     "position":"Left Wing",
     "jerseyNumber":17,
     "dateOfBirth":"1996-05-03",
     "nationality":"Nigeria",
     "contractUntil":"2020-06-30",
     "marketValue":null
  },
  {
     "name":"Theo Walcott",
     "position":"Right Wing",
     "jerseyNumber":14,
     "dateOfBirth":"1989-03-16",
     "nationality":"England",
     "contractUntil":"2019-06-30",
     "marketValue":null
  },
  {
     "name":"Olivier Giroud",
     "position":"Centre-Forward",
     "jerseyNumber":12,
     "dateOfBirth":"1986-09-30",
     "nationality":"France",
     "contractUntil":"2019-06-30",
     "marketValue":null
  },
  {
     "name":"Lucas Pérez",
     "position":"Centre-Forward",
     "jerseyNumber":28,
     "dateOfBirth":"1988-09-10",
     "nationality":"Spain",
     "contractUntil":"2020-06-30",
     "marketValue":null
  },
  {
     "name":"Danny Welbeck",
     "position":"Centre-Forward",
     "jerseyNumber":23,
     "dateOfBirth":"1990-11-26",
     "nationality":"England",
     "contractUntil":"2019-06-30",
     "marketValue":null
  },
  {
     "name":"Sead Kolasinac",
     "position":"Left-Back",
     "jerseyNumber":31,
     "dateOfBirth":"1993-06-20",
     "nationality":"Bosnia-Herzegovina",
     "contractUntil":"2022-06-30",
     "marketValue":null
  },
  {
     "name":"Alexandre Lacazette",
     "position":"Centre-Forward",
     "jerseyNumber":9,
     "dateOfBirth":"1991-05-28",
     "nationality":"France",
     "contractUntil":"2022-06-30",
     "marketValue":null
  },
  // {
  //    "name":"Joel Campbell",
  //    "position":"Right Wing",
  //    "jerseyNumber":39,
  //    "dateOfBirth":"1992-06-26",
  //    "nationality":"Costa Rica",
  //    "contractUntil":"2018-06-30",
  //    "marketValue":null
  // },
  {
     "name":"Chuba Akpom",
     "position":"Centre-Forward",
     "jerseyNumber":32,
     "dateOfBirth":"1995-10-09",
     "nationality":"England",
     "contractUntil":"2019-06-30",
     "marketValue":null
  }
]

export default players
