import MeetupList from "../components/meetups/MeetupList";

const DUMMY_ARRAY = [
  {
    id: "m1",
    title: "Berlin Meetup",
    image:
      "https://www.worldatlas.com/r/w1200/upload/7b/92/51/shutterstock-1011630226.jpg",
    address: "Carlos Pellegrini 451, C1009 CABA, Argentina",
    description: "The first meetup will be in Berlin, Germany.",
  },
  {
    id: "m2",
    title: "Buenos Aires Meetup",
    image:
      "https://www.americasquarterly.org/wp-content/uploads/2016/10/Argentina_Top.jpg",
    address: "Str. des 17. Juni 100, 10557 Berlin, Germany",
    description: "The second meetup will be in Buenos Aires, Argentina.",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_ARRAY} />;
};

export default HomePage;
