import Head from "next/head";
// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY_ARRAY = [
  {
    id: "m1",
    title: "Berlin Meetup",
    image:
      "https://www.worldatlas.com/r/w1200/upload/7b/92/51/shutterstock-1011630226.jpg",
    address: "Str. des 17. Juni 100, 10557 Berlin, Germany",
    description: "The first meetup will be in Berlin, Germany.",
  },
  {
    id: "m2",
    title: "Buenos Aires Meetup",
    image:
      "https://www.americasquarterly.org/wp-content/uploads/2016/10/Argentina_Top.jpg",
    address: "Carlos Pellegrini 451, C1009 CABA, Argentina",
    description: "The second meetup will be in Buenos Aires, Argentina.",
  },
];

const HomePage = (props) => {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);

  //   useEffect(() => {
  //     // send a http request and fetch data
  //     setLoadedMeetups(DUMMY_ARRAY);
  //   });

  return (
    <>
      <Head>
        <title>NextJS Meetups by David Schiumerini</title>
        <meta
          name="description"
          content="Browse a huge list of active NextJS meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from API
//   return {
//     props: { meetups: DUMMY_ARRAY },
//     revalidate: 10,
//   };
// }

export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://WQ4BsDPVw3mTNxHN:WQ4BsDPVw3mTNxHN@cluster0.hnyvj.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
